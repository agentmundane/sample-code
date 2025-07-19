import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, FileText, Calculator, List, Database, Save, AlertCircle, HelpCircle } from 'lucide-react';
import { QuoteHeader } from './quote/QuoteHeader';
import { CustomerSelector } from './quote/CustomerSelector';
import { LineItemsList } from './quote/LineItemsList';
import { QuoteSummary } from './quote/QuoteSummary';
import { QuoteActions } from './quote/QuoteActions';
import { QuoteManagement } from './quote/QuoteManagement';
import { StorageManager } from './StorageManager';
import { DemoWalkthrough } from './DemoWalkthrough';
import { Quote, Customer, QuoteLineItem } from '@/types/quote';
import { useQuoteStorage } from '@/hooks/useQuoteStorage';
import { useAutoSave } from '@/hooks/useAutoSave';
import { seedSampleData } from '@/data/sampleData';
import { useToast } from '@/hooks/use-toast';

const QuoteCalculator: React.FC = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [lineItems, setLineItems] = useState<QuoteLineItem[]>([]);
  const [notes, setNotes] = useState('');
  const [currentQuoteId, setCurrentQuoteId] = useState<string | null>(null);
  const [showManagement, setShowManagement] = useState(false);
  const [showStorage, setShowStorage] = useState(false);
  const [showWalkthrough, setShowWalkthrough] = useState(false);
  const { saveQuote, isLoading, error, lastSaved } = useQuoteStorage();
  const { toast } = useToast();

  // Show walkthrough on first visit
  useEffect(() => {
    const hasSeenWalkthrough = localStorage.getItem('demo-walkthrough-seen');
    if (!hasSeenWalkthrough) {
      setShowWalkthrough(true);
      localStorage.setItem('demo-walkthrough-seen', 'true');
    }
  }, []);

  // Seed sample data on first load
  useEffect(() => {
    seedSampleData();
  }, []);

  const handleAddLineItem = (newItem: QuoteLineItem) => {
    setLineItems(prev => [...prev, newItem]);
  };

  const handleUpdateLineItem = (id: string, updatedItem: Partial<QuoteLineItem>) => {
    setLineItems(prev => prev.map(item => 
      item.id === id ? { ...item, ...updatedItem } : item
    ));
  };

  const handleRemoveLineItem = (id: string) => {
    setLineItems(prev => prev.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return lineItems.reduce((total, item) => total + item.subtotal, 0);
  };

  const handleSaveQuote = () => {
    if (!selectedCustomer || lineItems.length === 0) return null;
    
    const quoteData: Partial<Quote> = {
      id: currentQuoteId || undefined,
      customer: selectedCustomer,
      lineItems,
      totalAmount: calculateTotal(),
      currency: 'GBP',
      status: 'draft',
      notes
    };
    
    const savedQuote = saveQuote(quoteData);
    setCurrentQuoteId(savedQuote.id);
    return savedQuote;
  };

  const handleLoadQuote = (quote: Quote) => {
    setSelectedCustomer(quote.customer);
    setLineItems(quote.lineItems);
    setNotes(quote.notes || '');
    setCurrentQuoteId(quote.id);
    setShowManagement(false);
  };

  const handleNewQuote = () => {
    setSelectedCustomer(null);
    setLineItems([]);
    setNotes('');
    setCurrentQuoteId(null);
  };

  const currentQuote: Partial<Quote> = {
    id: currentQuoteId || undefined,
    customer: selectedCustomer || undefined,
    lineItems,
    totalAmount: calculateTotal(),
    currency: 'GBP',
    status: 'draft',
    notes
  };

  // Auto-save functionality
  const { saveNow } = useAutoSave(currentQuote, {
    delay: 3000, // 3 seconds
    enabled: !!(selectedCustomer && lineItems.length > 0),
    onSave: async (quote) => {
      try {
        const saved = handleSaveQuote();
        if (saved) {
          toast({
            title: "Auto-saved",
            description: `Quote auto-saved at ${new Date().toLocaleTimeString()}`,
          });
        }
      } catch (error) {
        // Auto-save failed - error will be handled by onError callback
      }
    },
    onError: (error) => {
      toast({
        title: "Auto-save failed",
        description: "Failed to auto-save quote. Please save manually.",
        variant: "destructive"
      });
    }
  });

  if (showManagement) {
    return (
      <QuoteManagement
        onEditQuote={handleLoadQuote}
        onClose={() => setShowManagement(false)}
      />
    );
  }

  if (showStorage) {
    return (
      <StorageManager
        onClose={() => setShowStorage(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold">AgentMundane Service Quoter</h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <p className="text-muted-foreground">
                {currentQuoteId ? `Editing Quote #${currentQuoteId}` : 'Create a new quote'}
              </p>
              {lastSaved && (
                <Badge variant="outline" className="w-fit bg-brand-navy/10 text-brand-navy border-brand-navy/20">
                  <Save className="h-3 w-3 mr-1" />
                  Saved {lastSaved.toLocaleTimeString()}
                </Badge>
              )}
              {error && (
                <Badge variant="destructive" className="w-fit">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  {error}
                </Badge>
              )}
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Button onClick={() => setShowWalkthrough(true)} variant="outline" size="sm" className="gap-2">
              <HelpCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Demo Tour</span>
            </Button>
            <Button onClick={() => setShowStorage(true)} variant="outline" className="gap-2 flex-1 sm:flex-none">
              <Database className="h-4 w-4" />
              <span className="sm:inline">Storage</span>
            </Button>
            <Button onClick={() => setShowManagement(true)} variant="outline" className="gap-2 flex-1 sm:flex-none">
              <List className="h-4 w-4" />
              <span className="sm:inline">View All Quotes</span>
            </Button>
            {currentQuoteId && (
              <Button onClick={handleNewQuote} variant="outline" className="flex-1 sm:flex-none">
                New Quote
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Quote Builder */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-medium border-0">
              <CardHeader className="bg-gradient-primary text-white">
                <div className="flex items-center gap-3">
                  <Calculator className="h-6 w-6" />
                  <CardTitle className="text-xl">AgentMundane Service Quoter</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <QuoteHeader />
                <CustomerSelector 
                  selectedCustomer={selectedCustomer}
                  onSelectCustomer={setSelectedCustomer}
                />
                <LineItemsList
                  items={lineItems}
                  onAddItem={handleAddLineItem}
                  onUpdateItem={handleUpdateLineItem}
                  onRemoveItem={handleRemoveLineItem}
                  selectedCustomer={selectedCustomer}
                />
              </CardContent>
            </Card>
          </div>

          {/* Quote Summary & Actions */}
          <div className="space-y-6">
            <QuoteSummary quote={currentQuote} />
            <QuoteActions 
              quote={currentQuote}
              notes={notes}
              onNotesChange={setNotes}
              onSaveQuote={handleSaveQuote}
            />
          </div>
        </div>
      </div>
      
      {/* Demo Walkthrough */}
      {showWalkthrough && (
        <DemoWalkthrough onClose={() => setShowWalkthrough(false)} />
      )}
    </div>
  );
};

export default QuoteCalculator;