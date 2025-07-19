export interface Customer {
  id: string;
  name: string;
  email: string;
  companyName: string;
  advancedPricing?: boolean;
  discountRate?: number;
}

export interface Product {
  id: string;
  name: string;
  type: 'service' | 'consulting' | 'platform' | 'other';
  basePrice: number;
  currency: string;
  description?: string;
}

export interface QuoteLineItem {
  id: string;
  product: Product;
  quantity: number;
  unitPrice: number;
  discount: {
    type: 'percentage' | 'fixed';
    value: number;
  };
  subtotal: number;
}

export interface Quote {
  id: string;
  quoteNumber: string;
  customer: Customer;
  lineItems: QuoteLineItem[];
  status: 'draft' | 'sent' | 'approved' | 'won' | 'lost';
  totalAmount: number;
  currency: string;
  createdAt: Date;
  updatedAt: Date;
  notes?: string;
  validUntil?: Date;
}

export type QuoteStatus = Quote['status'];