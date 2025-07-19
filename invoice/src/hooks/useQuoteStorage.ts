import { useState, useEffect, useCallback } from 'react';
import { Quote } from '@/types/quote';
import { StorageUtils, StorageError } from '@/utils/storage';

export const useQuoteStorage = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  const loadQuotes = useCallback(() => {
    setIsLoading(true);
    setError(null);
    try {
      const loadedQuotes = StorageUtils.loadQuotes();
      setQuotes(loadedQuotes);
    } catch (err) {
      setError(err instanceof StorageError ? err.message : 'Failed to load quotes');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadQuotes();

    // Listen for storage events from other tabs
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'sales-quotes') {
        loadQuotes();
      }
    };

    // Listen for custom events from our storage utils
    const handleQuotesSaved = () => {
      setLastSaved(new Date());
    };

    const handleQuotesCleared = () => {
      setQuotes([]);
      setLastSaved(null);
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('quotes-saved', handleQuotesSaved);
    window.addEventListener('quotes-cleared', handleQuotesCleared);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('quotes-saved', handleQuotesSaved);
      window.removeEventListener('quotes-cleared', handleQuotesCleared);
    };
  }, [loadQuotes]);

  const saveQuote = (quote: Partial<Quote>): Quote => {
    setError(null);
    const now = new Date();
    const existingQuoteIndex = quotes.findIndex(q => q.id === quote.id);
    
    let savedQuote: Quote;
    let newQuotes: Quote[];
    
    if (existingQuoteIndex >= 0) {
      // Update existing quote
      savedQuote = {
        ...quotes[existingQuoteIndex],
        ...quote,
        updatedAt: now
      } as Quote;
      
      newQuotes = [...quotes];
      newQuotes[existingQuoteIndex] = savedQuote;
    } else {
      // Create new quote
      savedQuote = {
        id: quote.id || `quote-${Date.now()}`,
        quoteNumber: quote.quoteNumber || `QT-${Date.now().toString().slice(-6)}`,
        customer: quote.customer!,
        lineItems: quote.lineItems || [],
        status: quote.status || 'draft',
        totalAmount: quote.totalAmount || 0,
        currency: quote.currency || 'GBP',
        createdAt: now,
        updatedAt: now,
        validUntil: new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000), // 30 days
        notes: quote.notes
      };
      
      newQuotes = [...quotes, savedQuote];
    }
    
    try {
      StorageUtils.saveQuotes(newQuotes);
      setQuotes(newQuotes);
      setLastSaved(now);
    } catch (err) {
      setError(err instanceof StorageError ? err.message : 'Failed to save quote');
      throw err;
    }
    
    return savedQuote;
  };

  const deleteQuote = (id: string) => {
    setError(null);
    try {
      const newQuotes = quotes.filter(q => q.id !== id);
      StorageUtils.saveQuotes(newQuotes);
      setQuotes(newQuotes);
      setLastSaved(new Date());
    } catch (err) {
      setError(err instanceof StorageError ? err.message : 'Failed to delete quote');
      throw err;
    }
  };

  const updateQuoteStatus = (id: string, status: Quote['status']) => {
    setError(null);
    const quoteIndex = quotes.findIndex(q => q.id === id);
    if (quoteIndex >= 0) {
      try {
        const newQuotes = [...quotes];
        newQuotes[quoteIndex] = {
          ...newQuotes[quoteIndex],
          status,
          updatedAt: new Date()
        };
        StorageUtils.saveQuotes(newQuotes);
        setQuotes(newQuotes);
        setLastSaved(new Date());
      } catch (err) {
        setError(err instanceof StorageError ? err.message : 'Failed to update quote status');
        throw err;
      }
    }
  };

  const duplicateQuote = (id: string): Quote | null => {
    setError(null);
    const originalQuote = quotes.find(q => q.id === id);
    if (!originalQuote) return null;

    const now = new Date();
    const duplicatedQuote: Quote = {
      ...originalQuote,
      id: `quote-${Date.now()}`,
      quoteNumber: `QT-${Date.now().toString().slice(-6)}`,
      status: 'draft',
      createdAt: now,
      updatedAt: now,
      validUntil: new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000)
    };

    try {
      const newQuotes = [...quotes, duplicatedQuote];
      StorageUtils.saveQuotes(newQuotes);
      setQuotes(newQuotes);
      setLastSaved(now);
      return duplicatedQuote;
    } catch (err) {
      setError(err instanceof StorageError ? err.message : 'Failed to duplicate quote');
      throw err;
    }
  };

  const clearAllQuotes = () => {
    setError(null);
    try {
      StorageUtils.clearStorage();
      setQuotes([]);
      setLastSaved(null);
    } catch (err) {
      setError(err instanceof StorageError ? err.message : 'Failed to clear quotes');
      throw err;
    }
  };

  const exportQuotes = () => {
    try {
      return StorageUtils.exportQuotes();
    } catch (err) {
      setError(err instanceof StorageError ? err.message : 'Failed to export quotes');
      throw err;
    }
  };

  const importQuotes = (jsonData: string) => {
    setError(null);
    try {
      const result = StorageUtils.importQuotes(jsonData);
      if (result.success) {
        loadQuotes(); // Reload quotes after import
      } else {
        setError(result.errors.join(', '));
      }
      return result;
    } catch (err) {
      setError(err instanceof StorageError ? err.message : 'Failed to import quotes');
      throw err;
    }
  };

  const getStorageInfo = () => {
    return StorageUtils.getStorageUsage();
  };

  return {
    quotes,
    isLoading,
    error,
    lastSaved,
    saveQuote,
    deleteQuote,
    updateQuoteStatus,
    duplicateQuote,
    clearAllQuotes,
    exportQuotes,
    importQuotes,
    getStorageInfo,
    reloadQuotes: loadQuotes
  };
};