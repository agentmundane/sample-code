import { Quote, Customer, Product, QuoteLineItem } from '@/types/quote';

export const sampleCustomers: Customer[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    email: 'sarah.chen@automate-inc.com',
    companyName: 'Automate Inc.',
    advancedPricing: true,
    discountRate: 15
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    email: 'marcus.r@innovateai.tech',
    companyName: 'InnovateAI Technologies',
    advancedPricing: false
  },
  {
    id: '3',
    name: 'Dr. Emily Watson',
    email: 'e.watson@datadriven-corp.com',
    companyName: 'DataDriven Corp',
    advancedPricing: true,
    discountRate: 20
  },
  {
    id: '4',
    name: 'James Park',
    email: 'james.park@smartflow-solutions.io',
    companyName: 'SmartFlow Solutions',
    advancedPricing: false
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    email: 'lisa.thompson@nexus-digital.com',
    companyName: 'Nexus Digital Agency',
    advancedPricing: true,
    discountRate: 25
  }
];

export const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'n8n Workflow Development',
    type: 'service',
    basePrice: 2500,
    currency: 'GBP',
    description: 'Custom n8n automation workflows tailored to your business processes'
  },
  {
    id: '2',
    name: 'Copilot Studio Agent Build',
    type: 'service', 
    basePrice: 3500,
    currency: 'GBP',
    description: 'Professional Microsoft Copilot Studio chatbot development and deployment'
  },
  {
    id: '3',
    name: '"Second Brain" RAG System Setup',
    type: 'consulting',
    basePrice: 4000,
    currency: 'GBP',
    description: 'Complete Retrieval-Augmented Generation system for organizational knowledge management'
  },
  {
    id: '4',
    name: 'AI Agent Strategy Workshop',
    type: 'consulting',
    basePrice: 1800,
    currency: 'GBP',
    description: 'Full-day strategic planning session for AI automation implementation'
  },
  {
    id: '5',
    name: 'Make.com Integration Package',
    type: 'service',
    basePrice: 2000,
    currency: 'GBP',
    description: 'Complete Make.com automation setup and integration with existing systems'
  },
  {
    id: '6',
    name: 'AI Chatbot MVP Development',
    type: 'service',
    basePrice: 1500,
    currency: 'GBP',
    description: 'Rapid prototyping and deployment of custom AI chatbot solutions'
  },
  {
    id: '7',
    name: 'Process Automation Audit',
    type: 'consulting',
    basePrice: 1200,
    currency: 'GBP',
    description: 'Comprehensive analysis of business processes for automation opportunities'
  },
  {
    id: '8',
    name: 'Enterprise AI Platform Setup',
    type: 'service',
    basePrice: 8000,
    currency: 'GBP',
    description: 'Complete enterprise-scale AI automation platform implementation'
  },
  {
    id: '9',
    name: 'LangChain Development Service',
    type: 'service',
    basePrice: 3000,
    currency: 'GBP',
    description: 'Custom LangChain application development for complex AI workflows'
  },
  {
    id: '10',
    name: 'AI Training & Onboarding',
    type: 'consulting',
    basePrice: 2200,
    currency: 'GBP',
    description: 'Team training and onboarding for AI automation tools and best practices'
  }
];

const createSampleLineItem = (product: Product, quantity: number = 1, discountRate: number = 0): QuoteLineItem => {
  const unitPrice = product.basePrice;
  const lineTotal = unitPrice * quantity;
  const discountAmount = lineTotal * (discountRate / 100);
  const subtotal = lineTotal - discountAmount;

  return {
    id: `item-${product.id}-${Date.now()}`,
    product,
    quantity,
    unitPrice,
    discount: {
      type: 'percentage',
      value: discountRate
    },
    subtotal
  };
};

export const generateSampleQuotes = (): Quote[] => {
  const now = new Date();
  const quotes: Quote[] = [];

  // Quote 1: Automate Inc. - Complete Automation Overhaul
  const quote1LineItems = [
    createSampleLineItem(sampleProducts[0], 3, 15), // n8n Workflow Development with 15% discount
    createSampleLineItem(sampleProducts[3], 1, 15), // AI Agent Strategy Workshop with 15% discount
    createSampleLineItem(sampleProducts[9], 1, 15)  // AI Training & Onboarding with 15% discount
  ];
  quotes.push({
    id: 'quote-1',
    quoteNumber: 'AM-001',
    customer: sampleCustomers[0],
    lineItems: quote1LineItems,
    status: 'sent',
    totalAmount: quote1LineItems.reduce((sum, item) => sum + item.subtotal, 0),
    currency: 'GBP',
    createdAt: new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
    updatedAt: new Date(now.getTime() - 6 * 24 * 60 * 60 * 1000), // 6 days ago
    validUntil: new Date(now.getTime() + 23 * 24 * 60 * 60 * 1000), // 23 days from now
    notes: 'Sarah is excited about the automation potential. Follow-up call scheduled to discuss implementation timeline and team training requirements.'
  });

  // Quote 2: InnovateAI Technologies - Chatbot & RAG System
  const quote2LineItems = [
    createSampleLineItem(sampleProducts[1], 1, 0),     // Copilot Studio Agent Build
    createSampleLineItem(sampleProducts[2], 1, 0),     // "Second Brain" RAG System Setup
    createSampleLineItem(sampleProducts[6], 1, 0)      // Process Automation Audit
  ];
  quotes.push({
    id: 'quote-2',
    quoteNumber: 'AM-002',
    customer: sampleCustomers[1],
    lineItems: quote2LineItems,
    status: 'approved',
    totalAmount: quote2LineItems.reduce((sum, item) => sum + item.subtotal, 0),
    currency: 'GBP',
    createdAt: new Date(now.getTime() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
    updatedAt: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    validUntil: new Date(now.getTime() + 25 * 24 * 60 * 60 * 1000), // 25 days from now
    notes: 'Approved by Marcus. They want to start with the RAG system first, then move to chatbot development. PO expected this week.'
  });

  // Quote 3: DataDriven Corp - Enterprise AI Platform
  const quote3LineItems = [
    createSampleLineItem(sampleProducts[7], 1, 20),    // Enterprise AI Platform Setup with 20% discount
    createSampleLineItem(sampleProducts[8], 2, 20),    // LangChain Development Service with 20% discount
    createSampleLineItem(sampleProducts[9], 3, 20)     // AI Training & Onboarding with 20% discount
  ];
  quotes.push({
    id: 'quote-3',
    quoteNumber: 'AM-003',
    customer: sampleCustomers[2],
    lineItems: quote3LineItems,
    status: 'won',
    totalAmount: quote3LineItems.reduce((sum, item) => sum + item.subtotal, 0),
    currency: 'GBP',
    createdAt: new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000), // 14 days ago
    updatedAt: new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000),  // 1 day ago
    validUntil: new Date(now.getTime() + 16 * 24 * 60 * 60 * 1000), // 16 days from now
    notes: 'Major enterprise win! Dr. Watson was impressed with our AI capabilities demo. 6-month implementation starting next month. This will be a great case study.'
  });

  // Quote 4: SmartFlow Solutions - Quick Win Package
  const quote4LineItems = [
    createSampleLineItem(sampleProducts[4], 1, 0),     // Make.com Integration Package
    createSampleLineItem(sampleProducts[5], 2, 0),     // AI Chatbot MVP Development
    createSampleLineItem(sampleProducts[6], 1, 0)      // Process Automation Audit
  ];
  quotes.push({
    id: 'quote-4',
    quoteNumber: 'AM-004',
    customer: sampleCustomers[3],
    lineItems: quote4LineItems,
    status: 'draft',
    totalAmount: quote4LineItems.reduce((sum, item) => sum + item.subtotal, 0),
    currency: 'GBP',
    createdAt: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    updatedAt: new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
    validUntil: new Date(now.getTime() + 28 * 24 * 60 * 60 * 1000), // 28 days from now
    notes: 'James wants to start small but scale quickly. Focusing on immediate ROI opportunities. Still finalizing scope for the chatbot requirements.'
  });

  // Quote 5: Nexus Digital Agency - Lost to Budget Constraints
  const quote5LineItems = [
    createSampleLineItem(sampleProducts[0], 5, 25),   // n8n Workflow Development with 25% discount
    createSampleLineItem(sampleProducts[3], 2, 25),   // AI Agent Strategy Workshop with 25% discount
    createSampleLineItem(sampleProducts[9], 2, 25)    // AI Training & Onboarding with 25% discount
  ];
  quotes.push({
    id: 'quote-5',
    quoteNumber: 'AM-005',
    customer: sampleCustomers[4],
    lineItems: quote5LineItems,
    status: 'lost',
    totalAmount: quote5LineItems.reduce((sum, item) => sum + item.subtotal, 0),
    currency: 'GBP',
    createdAt: new Date(now.getTime() - 21 * 24 * 60 * 60 * 1000), // 21 days ago
    updatedAt: new Date(now.getTime() - 10 * 24 * 60 * 60 * 1000), // 10 days ago
    validUntil: new Date(now.getTime() + 9 * 24 * 60 * 60 * 1000),  // 9 days from now
    notes: 'Lisa loved our approach but agency had budget cuts. Keeping in touch for Q2 when their funding situation improves. Great relationship built for future opportunities.'
  });

  return quotes;
};

export const seedSampleData = () => {
  const sampleQuotes = generateSampleQuotes();
  const existingQuotes = localStorage.getItem('sales-quotes');
  
  // Only seed if no quotes exist
  if (!existingQuotes || existingQuotes === '[]') {
    const serializedQuotes = JSON.stringify(
      sampleQuotes.map(q => ({
        ...q,
        createdAt: q.createdAt.toISOString(),
        updatedAt: q.updatedAt.toISOString(),
        validUntil: q.validUntil?.toISOString()
      }))
    );
    
    localStorage.setItem('sales-quotes', serializedQuotes);
    localStorage.setItem('sales-quotes-version', '1.0');
    
    return true;
  }
  
  return false;
};

export const resetToSampleData = () => {
  localStorage.removeItem('sales-quotes');
  localStorage.removeItem('sales-quotes-version');
  return seedSampleData();
};