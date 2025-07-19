import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Quote } from '@/types/quote';
import { Calculator, PoundSterling, FileText, Clock } from 'lucide-react';

interface QuoteSummaryProps {
  quote: Partial<Quote>;
}

export const QuoteSummary: React.FC<QuoteSummaryProps> = ({ quote }) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: quote.currency || 'GBP'
    }).format(amount);
  };

  const itemCount = quote.lineItems?.length || 0;
  const subtotal = quote.totalAmount || 0;
  const tax = subtotal * 0.1; // 10% tax for demo
  const total = subtotal + tax;

  return (
    <Card className="shadow-medium border-0">
      <CardHeader className="bg-gradient-primary text-white">
        <div className="flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          <CardTitle className="text-lg">Quote Summary</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        {/* Status */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Status</span>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            <Clock className="h-3 w-3 mr-1" />
            {quote.status || 'Draft'}
          </Badge>
        </div>

        {/* Customer Info */}
        {quote.customer && (
          <div className="space-y-2">
            <span className="text-sm font-medium">Customer</span>
            <div className="text-sm text-muted-foreground">
              <div>{quote.customer.name}</div>
              <div>{quote.customer.companyName}</div>
            </div>
          </div>
        )}

        {/* Item Count */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Items</span>
          <div className="flex items-center gap-1">
            <FileText className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{itemCount} item{itemCount !== 1 ? 's' : ''}</span>
          </div>
        </div>

        {/* Financial Summary */}
        <div className="space-y-3 pt-4 border-t">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Tax (10%)</span>
            <span>{formatCurrency(tax)}</span>
          </div>
          <div className="flex justify-between font-semibold text-lg pt-2 border-t">
            <span>Total</span>
            <div className="flex items-center gap-2">
              <PoundSterling className="h-5 w-5 text-primary" />
              <span className="text-primary">{formatCurrency(total)}</span>
            </div>
          </div>
        </div>

        {/* Advanced Pricing Notice */}
        {quote.customer?.advancedPricing && (
          <div className="p-3 bg-primary/5 border border-primary/20 rounded-md">
            <div className="text-xs text-primary font-medium">
              ✓ Advanced Customer Pricing Applied
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              {quote.customer.discountRate}% discount included in line items
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};