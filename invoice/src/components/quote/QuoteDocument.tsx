import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Quote } from '@/types/quote';
import { Calendar, MapPin, Phone, Mail, Globe, PrinterIcon } from 'lucide-react';

interface QuoteDocumentProps {
  quote: Partial<Quote>;
  onClose: () => void;
}

export const QuoteDocument: React.FC<QuoteDocumentProps> = ({ quote, onClose }) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP'
    }).format(amount);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };

  const handlePrint = () => {
    window.print();
  };

  const subtotal = quote.totalAmount || 0;
  const tax = subtotal * 0.2; // 20% VAT
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-background p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8 print:hidden">
          <h1 className="text-xl sm:text-2xl font-bold">Quote Document</h1>
          <div className="flex gap-2 flex-wrap">
            <Button onClick={handlePrint} variant="outline" className="gap-2 flex-1 sm:flex-none">
              <PrinterIcon className="h-4 w-4" />
              Print
            </Button>
            <Button onClick={onClose} variant="outline" className="flex-1 sm:flex-none">
              Close
            </Button>
          </div>
        </div>

        {/* Document */}
        <Card className="shadow-strong">
          <CardContent className="p-6 sm:p-12">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6 sm:gap-0 mb-12">
              <div>
                <img 
                  src="/agentmundanetransparent.png" 
                  alt="AgentMundane Logo" 
                  className="h-16 w-auto mb-4"
                />
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>AI Innovation Hub, Manchester, UK</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>+44 161 AI-AGENT</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>quotes@agentmundane.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <span>www.agentmundane.com</span>
                  </div>
                </div>
              </div>
              
              <div className="text-left sm:text-right">
                <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-2">QUOTE</h1>
                <div className="space-y-1 text-sm">
                  <div>Quote #: {quote.quoteNumber || 'QT-001'}</div>
                  <div>Date: {formatDate(new Date())}</div>
                  <div>Valid Until: {formatDate(new Date(Date.now() + 30 * 24 * 60 * 60 * 1000))}</div>
                </div>
              </div>
            </div>

            {/* Customer Information */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4 text-primary">Quote For:</h2>
              <div className="bg-muted/30 p-4 rounded-lg">
                <div className="font-medium">{quote.customer?.name}</div>
                <div>{quote.customer?.companyName}</div>
                <div className="text-sm text-muted-foreground">{quote.customer?.email}</div>
                {quote.customer?.advancedPricing && (
                  <Badge variant="outline" className="mt-2 bg-brand-navy/10 text-brand-navy border-brand-navy/20">
                    Advanced Pricing Customer
                  </Badge>
                )}
              </div>
            </div>

            {/* Quote Items */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4 text-primary">Quote Items:</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-primary">
                      <th className="text-left py-3 px-2 font-semibold">Item</th>
                      <th className="text-left py-3 px-2 font-semibold">Type</th>
                      <th className="text-right py-3 px-2 font-semibold">Qty</th>
                      <th className="text-right py-3 px-2 font-semibold">Unit Price</th>
                      <th className="text-right py-3 px-2 font-semibold">Discount</th>
                      <th className="text-right py-3 px-2 font-semibold">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {quote.lineItems?.map((item, index) => (
                      <tr key={item.id} className="border-b">
                        <td className="py-4 px-2">
                          <div className="font-medium">{item.product.name}</div>
                          <div className="text-sm text-muted-foreground">{item.product.description}</div>
                        </td>
                        <td className="py-4 px-2">
                          <Badge variant="outline" className="text-xs">
                            {item.product.type.replace('-', ' ')}
                          </Badge>
                        </td>
                        <td className="py-4 px-2 text-right">{item.quantity}</td>
                        <td className="py-4 px-2 text-right">{formatCurrency(item.unitPrice)}</td>
                        <td className="py-4 px-2 text-right">
                          {item.discount.value > 0 
                            ? `${item.discount.type === 'percentage' ? `${item.discount.value}%` : formatCurrency(item.discount.value)}`
                            : '-'
                          }
                        </td>
                        <td className="py-4 px-2 text-right font-medium">{formatCurrency(item.subtotal)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Totals */}
            <div className="flex justify-end mb-8">
              <div className="w-64 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal:</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>VAT (20%):</span>
                  <span>{formatCurrency(tax)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t pt-2">
                  <span>Total:</span>
                  <span className="text-primary">{formatCurrency(total)}</span>
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="border-t pt-6">
              <h3 className="font-semibold mb-3">Terms & Conditions:</h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <p>• This quote is valid for 30 days from the date of issue.</p>
                <p>• Payment terms: Net 30 days from invoice date.</p>
                <p>• All prices are exclusive of VAT unless otherwise stated.</p>
                <p>• Cancellation policy: 48 hours notice required for cancellations.</p>
                <p>• Travel and accommodation costs may apply for off-site delivery.</p>
              </div>
            </div>

            {/* Internal Notes */}
            {quote.notes && (
              <div className="mt-6 p-4 bg-muted/30 rounded-lg print:hidden">
                <h3 className="font-semibold mb-2">Internal Notes:</h3>
                <p className="text-sm text-muted-foreground">{quote.notes}</p>
              </div>
            )}

            {/* Footer */}
            <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
              <p>Thank you for your business. We look forward to working with you.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};