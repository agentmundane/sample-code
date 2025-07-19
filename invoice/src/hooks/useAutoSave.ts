import { useEffect, useRef, useCallback } from 'react';
import { Quote } from '@/types/quote';

interface UseAutoSaveOptions {
  delay?: number; // Delay in milliseconds before auto-save
  enabled?: boolean; // Whether auto-save is enabled
  onSave?: (quote: Partial<Quote>) => void; // Callback when auto-save occurs
  onError?: (error: Error) => void; // Callback when auto-save fails
}

export const useAutoSave = (
  quote: Partial<Quote>,
  options: UseAutoSaveOptions = {}
) => {
  const {
    delay = 2000, // Default 2 seconds
    enabled = true,
    onSave,
    onError
  } = options;

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const previousQuoteRef = useRef<string>('');
  const isInitialLoadRef = useRef(true);

  const saveQuote = useCallback(async () => {
    if (!onSave || !quote.customer || !quote.lineItems?.length) {
      return;
    }

    try {
      await onSave(quote);
    } catch (error) {
      onError?.(error as Error);
    }
  }, [quote, onSave, onError]);

  const scheduleAutoSave = useCallback(() => {
    if (!enabled) return;

    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Schedule new save
    timeoutRef.current = setTimeout(() => {
      saveQuote();
    }, delay);
  }, [enabled, delay, saveQuote]);

  useEffect(() => {
    // Skip auto-save on initial load
    if (isInitialLoadRef.current) {
      isInitialLoadRef.current = false;
      return;
    }

    // Check if quote has actually changed
    const currentQuoteString = JSON.stringify({
      customer: quote.customer,
      lineItems: quote.lineItems,
      totalAmount: quote.totalAmount,
      notes: quote.notes
    });

    if (currentQuoteString !== previousQuoteRef.current) {
      previousQuoteRef.current = currentQuoteString;
      scheduleAutoSave();
    }
  }, [quote, scheduleAutoSave]);

  useEffect(() => {
    // Cleanup timeout on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Save immediately when called
  const saveNow = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    saveQuote();
  }, [saveQuote]);

  return {
    saveNow,
    isEnabled: enabled
  };
};