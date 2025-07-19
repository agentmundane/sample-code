import { Quote } from '@/types/quote';

export class StorageError extends Error {
  constructor(message: string, public cause?: Error) {
    super(message);
    this.name = 'StorageError';
  }
}

export class StorageUtils {
  private static STORAGE_KEY = 'sales-quotes';
  private static STORAGE_VERSION = '1.0';
  private static VERSION_KEY = 'sales-quotes-version';
  private static MAX_STORAGE_SIZE = 5 * 1024 * 1024; // 5MB

  static isStorageAvailable(): boolean {
    try {
          const testKey = '__storage_test__';
    localStorage.setItem(testKey, 'test');
    localStorage.removeItem(testKey);
      return true;
    } catch {
      return false;
    }
  }

  static getStorageUsage(): { used: number; available: number; percentage: number } {
    if (!this.isStorageAvailable()) {
      return { used: 0, available: 0, percentage: 0 };
    }

    let totalSize = 0;
    for (const key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        totalSize += localStorage.getItem(key)?.length || 0;
      }
    }

    const used = totalSize * 2; // UTF-16 encoding
    const available = this.MAX_STORAGE_SIZE - used;
    const percentage = Math.round((used / this.MAX_STORAGE_SIZE) * 100);

    return { used, available, percentage };
  }

  static validateQuote(quote: any): quote is Quote {
    return (
      typeof quote === 'object' &&
      quote !== null &&
      typeof quote.id === 'string' &&
      typeof quote.quoteNumber === 'string' &&
      typeof quote.customer === 'object' &&
      Array.isArray(quote.lineItems) &&
      typeof quote.status === 'string' &&
      typeof quote.totalAmount === 'number' &&
      typeof quote.currency === 'string' &&
      quote.createdAt instanceof Date &&
      quote.updatedAt instanceof Date
    );
  }

  static saveQuotes(quotes: Quote[]): void {
    if (!this.isStorageAvailable()) {
      throw new StorageError('localStorage is not available');
    }

    try {
      // Validate all quotes before saving
      quotes.forEach((quote, index) => {
        if (!this.validateQuote(quote)) {
          throw new StorageError(`Invalid quote at index ${index}`);
        }
      });

      const serializedQuotes = JSON.stringify(
        quotes.map(q => ({
          ...q,
          createdAt: q.createdAt.toISOString(),
          updatedAt: q.updatedAt.toISOString(),
          validUntil: q.validUntil?.toISOString()
        }))
      );

      // Check storage size
      const usage = this.getStorageUsage();
      if (usage.used + serializedQuotes.length * 2 > this.MAX_STORAGE_SIZE) {
        throw new StorageError('Storage quota exceeded');
      }

      localStorage.setItem(this.STORAGE_KEY, serializedQuotes);
      localStorage.setItem(this.VERSION_KEY, this.STORAGE_VERSION);
      
      // Dispatch custom event for listeners
      window.dispatchEvent(new CustomEvent('quotes-saved', { detail: { quotes } }));
    } catch (error) {
      if (error instanceof StorageError) {
        throw error;
      }
      throw new StorageError('Failed to save quotes', error as Error);
    }
  }

  static loadQuotes(): Quote[] {
    if (!this.isStorageAvailable()) {
      return [];
    }

    try {
      const storedQuotes = localStorage.getItem(this.STORAGE_KEY);
      const version = localStorage.getItem(this.VERSION_KEY);

      if (!storedQuotes) {
        return [];
      }

      // Handle version migration if needed
      if (version !== this.STORAGE_VERSION) {
        // Storage version mismatch - in a real app, you'd implement migration logic here
      }

      const parsedQuotes = JSON.parse(storedQuotes);
      
      if (!Array.isArray(parsedQuotes)) {
        throw new StorageError('Invalid quotes format in storage');
      }

      const quotes = parsedQuotes.map((quote: any) => ({
        ...quote,
        createdAt: new Date(quote.createdAt),
        updatedAt: new Date(quote.updatedAt),
        validUntil: quote.validUntil ? new Date(quote.validUntil) : undefined
      }));

      // Validate loaded quotes (invalid quotes will be filtered out)

      return quotes.filter(this.validateQuote);
    } catch (error) {
      // Failed to load quotes from storage - graceful degradation
      return [];
    }
  }

  static exportQuotes(): string {
    const quotes = this.loadQuotes();
    return JSON.stringify({
      version: this.STORAGE_VERSION,
      exportDate: new Date().toISOString(),
      quotes: quotes.map(q => ({
        ...q,
        createdAt: q.createdAt.toISOString(),
        updatedAt: q.updatedAt.toISOString(),
        validUntil: q.validUntil?.toISOString()
      }))
    }, null, 2);
  }

  static importQuotes(jsonData: string): { success: boolean; imported: number; errors: string[] } {
    try {
      const data = JSON.parse(jsonData);
      const errors: string[] = [];
      
      if (!data.quotes || !Array.isArray(data.quotes)) {
        throw new Error('Invalid import format');
      }

      const quotes = data.quotes.map((quote: any, index: number) => {
        try {
          return {
            ...quote,
            createdAt: new Date(quote.createdAt),
            updatedAt: new Date(quote.updatedAt),
            validUntil: quote.validUntil ? new Date(quote.validUntil) : undefined
          };
        } catch (error) {
          errors.push(`Quote ${index + 1}: Invalid date format`);
          return null;
        }
      }).filter(Boolean);

      // Validate and save
      const validQuotes = quotes.filter((quote: any, index: number) => {
        const isValid = this.validateQuote(quote);
        if (!isValid) {
          errors.push(`Quote ${index + 1}: Invalid quote structure`);
        }
        return isValid;
      });

      if (validQuotes.length > 0) {
        this.saveQuotes(validQuotes);
      }

      return {
        success: true,
        imported: validQuotes.length,
        errors
      };
    } catch (error) {
      return {
        success: false,
        imported: 0,
        errors: [`Import failed: ${error instanceof Error ? error.message : 'Unknown error'}`]
      };
    }
  }

  static clearStorage(): void {
    if (!this.isStorageAvailable()) {
      return;
    }

    try {
      localStorage.removeItem(this.STORAGE_KEY);
      localStorage.removeItem(this.VERSION_KEY);
      
      // Dispatch custom event
      window.dispatchEvent(new CustomEvent('quotes-cleared'));
    } catch (error) {
      throw new StorageError('Failed to clear storage', error as Error);
    }
  }

  static createBackup(): Blob {
    const exportData = this.exportQuotes();
    return new Blob([exportData], { type: 'application/json' });
  }

  static downloadBackup(): void {
    try {
      const blob = this.createBackup();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `quotes-backup-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      throw new StorageError('Failed to download backup', error as Error);
    }
  }
}