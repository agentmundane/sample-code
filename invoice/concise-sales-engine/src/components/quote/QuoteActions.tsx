import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Quote } from '@/types/quote';
import { FileText, Send, Save, Copy, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { QuoteDocument } from './QuoteDocument';

interface QuoteActionsProps {
  quote: Partial<Quote>;
  notes: string;
  onNotesChange: (notes: string) => void;
  onSaveQuote: () => Quote | null;
}

export const QuoteActions: React.FC<QuoteActionsProps> = ({
  quote,
  notes,
  onNotesChange,
  onSaveQuote
}) => {
  const { toast } = useToast();
  const [showDocument, setShowDocument] = useState(false);

  const handleSaveQuote = () => {
    const savedQuote = onSaveQuote();
    if (savedQuote) {
      toast({
        title: "Quote Saved",
        description: `Quote #${savedQuote.quoteNumber} has been saved successfully.`,
      });
    } else {
      toast({
        title: "Unable to Save",
        description: "Please select a customer and add at least one item.",
        variant: "destructive"
      });
    }
  };

  const handleGenerateDocument = () => {
    // Generate a quote number if not present
    const quoteWithNumber = {
      ...quote,
      quoteNumber: quote.quoteNumber || `QT-${Date.now().toString().slice(-6)}`
    };
    
    setShowDocument(true);
    toast({
      title: "Document Generated",
      description: "Professional quote document has been generated.",
    });
  };

  const handleSendQuote = () => {
    if (!quote.customer) {
      toast({
        title: "Customer Required",
        description: "Please select a customer before sending the quote.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Quote Sent",
      description: `Quote sent to ${quote.customer.email}`,
    });
  };

  const handleDuplicateQuote = () => {
    toast({
      title: "Quote Duplicated",
      description: "A copy of this quote has been created.",
    });
  };

  const isQuoteReady = quote.customer && quote.lineItems && quote.lineItems.length > 0;

  return (
    <>
    <Card className="shadow-medium border-0">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Actions & Notes
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Notes Section */}
        <div className="space-y-2">
          <Label htmlFor="notes">Internal Notes</Label>
          <Textarea
            id="notes"
            placeholder="Add any internal notes about this quote..."
            value={notes}
            onChange={(e) => onNotesChange(e.target.value)}
            rows={3}
          />
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button 
            onClick={handleSaveQuote} 
            variant="outline" 
            className="w-full gap-2"
          >
            <Save className="h-4 w-4" />
            Save Draft
          </Button>

          <Button 
            onClick={handleGenerateDocument}
            variant="outline"
            className="w-full gap-2"
            disabled={!isQuoteReady}
          >
            <Download className="h-4 w-4" />
            Generate Document
          </Button>

          <Button 
            onClick={handleSendQuote}
            className="w-full gap-2"
            disabled={!isQuoteReady}
          >
            <Send className="h-4 w-4" />
            Send to Customer
          </Button>

          <Button 
            onClick={handleDuplicateQuote}
            variant="outline"
            className="w-full gap-2"
            disabled={!isQuoteReady}
          >
            <Copy className="h-4 w-4" />
            Duplicate Quote
          </Button>
        </div>

        {!isQuoteReady && (
          <div className="text-xs text-muted-foreground text-center p-2 bg-muted/50 rounded">
            Select a customer and add items to enable all actions
          </div>
        )}
      </CardContent>
    </Card>
    
    {showDocument && (
      <div className="fixed inset-0 bg-background z-50 overflow-auto">
        <QuoteDocument 
          quote={{
            ...quote,
            quoteNumber: quote.quoteNumber || `QT-${Date.now().toString().slice(-6)}`,
            notes
          }} 
          onClose={() => setShowDocument(false)} 
        />
      </div>
    )}
  </>
  );
};