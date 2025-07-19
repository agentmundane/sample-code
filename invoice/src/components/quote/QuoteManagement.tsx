import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Quote, QuoteStatus } from '@/types/quote';
import { Search, Eye, Copy, Trash2, Edit, Calendar, User, PoundSterling } from 'lucide-react';
import { useQuoteStorage } from '@/hooks/useQuoteStorage';

interface QuoteManagementProps {
  onEditQuote: (quote: Quote) => void;
  onClose: () => void;
}

export const QuoteManagement: React.FC<QuoteManagementProps> = ({ onEditQuote, onClose }) => {
  const { quotes, deleteQuote, updateQuoteStatus, duplicateQuote } = useQuoteStorage();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<QuoteStatus | 'all'>('all');

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP'
    }).format(amount);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).format(date);
  };

  const getStatusColor = (status: QuoteStatus) => {
    switch (status) {
      case 'draft':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'sent':
        return 'bg-brand-orange/10 text-brand-orange border-brand-orange/20';
      case 'approved':
        return 'bg-brand-navy/10 text-brand-navy border-brand-navy/20';
      case 'won':
        return 'bg-brand-navy/10 text-brand-navy border-brand-navy/20';
      case 'lost':
        return 'bg-brand-coral/10 text-brand-coral border-brand-coral/20';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const filteredQuotes = quotes.filter(quote => {
    const matchesSearch = 
      quote.quoteNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.customer.companyName.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || quote.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const handleDuplicate = (quote: Quote) => {
    const duplicated = duplicateQuote(quote.id);
    if (duplicated) {
      onEditQuote(duplicated);
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this quote?')) {
      deleteQuote(id);
    }
  };

  const handleStatusChange = (id: string, newStatus: QuoteStatus) => {
    updateQuoteStatus(id, newStatus);
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">Service Quote Management</h1>
            <p className="text-muted-foreground">Manage all your AgentMundane service quotes</p>
          </div>
          <Button onClick={onClose} variant="outline" className="w-full sm:w-auto">
            Close
          </Button>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by quote number, customer name, or company..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={statusFilter} onValueChange={(value: QuoteStatus | 'all') => setStatusFilter(value)}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="sent">Sent</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="won">Won</SelectItem>
              <SelectItem value="lost">Lost</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          {(['draft', 'sent', 'approved', 'won', 'lost'] as QuoteStatus[]).map(status => {
            const count = quotes.filter(q => q.status === status).length;
            return (
              <Card key={status}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium capitalize">{status}</p>
                      <p className="text-2xl font-bold">{count}</p>
                    </div>
                    <Badge variant="outline" className={getStatusColor(status)}>
                      {status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quotes List */}
        <Card>
          <CardHeader>
            <CardTitle>All Quotes ({filteredQuotes.length})</CardTitle>
          </CardHeader>
          <CardContent>
            {filteredQuotes.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">No quotes found matching your criteria.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredQuotes.map((quote) => (
                  <div key={quote.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1 space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                          <h3 className="font-semibold text-lg">{quote.quoteNumber}</h3>
                          <Badge variant="outline" className={getStatusColor(quote.status)}>
                            {quote.status}
                          </Badge>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>{quote.customer.name} - {quote.customer.companyName}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{formatDate(quote.createdAt)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <PoundSterling className="h-4 w-4" />
                            <span>{formatCurrency(quote.totalAmount)}</span>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
                          <div className="flex items-center gap-2">
                            <span className="text-muted-foreground">Items:</span>
                            <span>{quote.lineItems.length}</span>
                          </div>
                          {quote.customer.advancedPricing && (
                            <Badge variant="outline" className="w-fit bg-brand-navy/10 text-brand-navy border-brand-navy/20">
                              Advanced Pricing
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                        <Select value={quote.status} onValueChange={(value: QuoteStatus) => handleStatusChange(quote.id, value)}>
                          <SelectTrigger className="w-full sm:w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="draft">Draft</SelectItem>
                            <SelectItem value="sent">Sent</SelectItem>
                            <SelectItem value="approved">Approved</SelectItem>
                            <SelectItem value="won">Won</SelectItem>
                            <SelectItem value="lost">Lost</SelectItem>
                          </SelectContent>
                        </Select>
                        
                        <div className="flex gap-2">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => onEditQuote(quote)}
                            className="gap-1 flex-1 sm:flex-none"
                          >
                            <Edit className="h-4 w-4" />
                            <span className="hidden sm:inline">Edit</span>
                          </Button>
                          
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => handleDuplicate(quote)}
                            className="gap-1 flex-1 sm:flex-none"
                          >
                            <Copy className="h-4 w-4" />
                            <span className="hidden sm:inline">Duplicate</span>
                          </Button>
                          
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => handleDelete(quote.id)}
                            className="gap-1 flex-1 sm:flex-none text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="hidden sm:inline">Delete</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};