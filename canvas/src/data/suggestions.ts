export interface Suggestion {
  id: string;
  text: string;
  category: 'products' | 'painRelievers' | 'gainCreators' | 'customerJobs' | 'customerPains' | 'customerGains';
  keywords: string[];
  industry?: string;
  confidence: number;
}

export const aiSuggestions: Suggestion[] = [
  // Products & Services
  {
    id: 'p1',
    text: 'Automated meeting summarizer',
    category: 'products',
    keywords: ['meeting', 'transcription', 'ai', 'automation'],
    industry: 'productivity',
    confidence: 0.9
  },
  {
    id: 'p2',
    text: 'AI-powered social media post generator',
    category: 'products',
    keywords: ['social media', 'content', 'ai', 'automation'],
    industry: 'marketing',
    confidence: 0.95
  },
  {
    id: 'p3',
    text: 'Email triage agent',
    category: 'products',
    keywords: ['email', 'automation', 'ai', 'triage'],
    industry: 'communication',
    confidence: 0.88
  },
  {
    id: 'p4',
    text: 'Automated data visualization tool',
    category: 'products',
    keywords: ['data', 'visualization', 'automation', 'analytics'],
    industry: 'analytics',
    confidence: 0.92
  },
  {
    id: 'p5',
    text: 'AI customer support chatbot',
    category: 'products',
    keywords: ['chatbot', 'customer support', 'ai', 'automation'],
    industry: 'service',
    confidence: 0.87
  },

  // Pain Relievers
  {
    id: 'pr1',
    text: 'Eliminates time spent on repetitive tasks',
    category: 'painRelievers',
    keywords: ['repetitive', 'time', 'manual', 'tedious'],
    confidence: 0.9
  },
  {
    id: 'pr2',
    text: 'Reduces manual data entry errors',
    category: 'painRelievers',
    keywords: ['errors', 'manual', 'accuracy', 'mistakes'],
    confidence: 0.95
  },
  {
    id: 'pr3',
    text: 'Provides 24/7 automated responses',
    category: 'painRelievers',
    keywords: ['availability', '24/7', 'response', 'automation'],
    confidence: 0.85
  },
  {
    id: 'pr4',
    text: 'Eliminates inconsistent report formatting',
    category: 'painRelievers',
    keywords: ['formatting', 'reports', 'consistency', 'standardization'],
    confidence: 0.83
  },
  {
    id: 'pr5',
    text: 'Reduces dependency on manual monitoring',
    category: 'painRelievers',
    keywords: ['monitoring', 'manual', 'surveillance', 'tracking'],
    confidence: 0.88
  },

  // Gain Creators
  {
    id: 'gc1',
    text: 'Increases operational efficiency by 40%',
    category: 'gainCreators',
    keywords: ['efficiency', 'productivity', 'performance', 'optimization'],
    confidence: 0.92
  },
  {
    id: 'gc2',
    text: 'Enables real-time decision making',
    category: 'gainCreators',
    keywords: ['real-time', 'decisions', 'instant', 'speed'],
    confidence: 0.89
  },
  {
    id: 'gc3',
    text: 'Improves customer response time',
    category: 'gainCreators',
    keywords: ['response time', 'customer', 'speed', 'satisfaction'],
    confidence: 0.94
  },
  {
    id: 'gc4',
    text: 'Provides actionable business insights',
    category: 'gainCreators',
    keywords: ['insights', 'analytics', 'intelligence', 'data'],
    confidence: 0.87
  },
  {
    id: 'gc5',
    text: 'Scales operations without additional staff',
    category: 'gainCreators',
    keywords: ['scaling', 'growth', 'automation', 'efficiency'],
    confidence: 0.91
  },

  // Customer Jobs
  {
    id: 'cj1',
    text: 'Automate repetitive business processes',
    category: 'customerJobs',
    keywords: ['automation', 'processes', 'workflow', 'efficiency'],
    confidence: 0.95
  },
  {
    id: 'cj2',
    text: 'Improve customer service quality',
    category: 'customerJobs',
    keywords: ['customer service', 'quality', 'support', 'satisfaction'],
    confidence: 0.93
  },
  {
    id: 'cj3',
    text: 'Generate insights from business data',
    category: 'customerJobs',
    keywords: ['insights', 'data', 'analytics', 'intelligence'],
    confidence: 0.88
  },
  {
    id: 'cj4',
    text: 'Streamline content creation workflows',
    category: 'customerJobs',
    keywords: ['content', 'creation', 'workflow', 'marketing'],
    confidence: 0.86
  },
  {
    id: 'cj5',
    text: 'Monitor competitive landscape changes',
    category: 'customerJobs',
    keywords: ['monitoring', 'competition', 'market', 'intelligence'],
    confidence: 0.84
  },

  // Customer Pains
  {
    id: 'cp1',
    text: 'Time spent on repetitive tasks',
    category: 'customerPains',
    keywords: ['repetitive', 'time', 'manual', 'tedious'],
    confidence: 0.92
  },
  {
    id: 'cp2',
    text: 'Inconsistent report formatting',
    category: 'customerPains',
    keywords: ['inconsistent', 'formatting', 'reports', 'standardization'],
    confidence: 0.94
  },
  {
    id: 'cp3',
    text: 'Slow response time to customer queries',
    category: 'customerPains',
    keywords: ['slow', 'response', 'customer', 'delay'],
    confidence: 0.89
  },
  {
    id: 'cp4',
    text: 'Difficulty tracking multiple data sources',
    category: 'customerPains',
    keywords: ['tracking', 'data', 'sources', 'management'],
    confidence: 0.87
  },
  {
    id: 'cp5',
    text: 'Manual monitoring of business metrics',
    category: 'customerPains',
    keywords: ['manual', 'monitoring', 'metrics', 'tracking'],
    confidence: 0.85
  },

  // Customer Gains
  {
    id: 'cg1',
    text: 'Faster decision-making capabilities',
    category: 'customerGains',
    keywords: ['faster', 'decisions', 'speed', 'agility'],
    confidence: 0.91
  },
  {
    id: 'cg2',
    text: 'Improved operational efficiency',
    category: 'customerGains',
    keywords: ['efficiency', 'operations', 'productivity', 'optimization'],
    confidence: 0.88
  },
  {
    id: 'cg3',
    text: 'Better customer satisfaction scores',
    category: 'customerGains',
    keywords: ['satisfaction', 'customer', 'scores', 'service'],
    confidence: 0.86
  },
  {
    id: 'cg4',
    text: 'Real-time business intelligence',
    category: 'customerGains',
    keywords: ['real-time', 'intelligence', 'insights', 'data'],
    confidence: 0.84
  },
  {
    id: 'cg5',
    text: 'Reduced operational costs',
    category: 'customerGains',
    keywords: ['costs', 'savings', 'efficiency', 'optimization'],
    confidence: 0.93
  }
];

export const generateAISuggestions = (
  category: Suggestion['category'],
  existingItems: string[],
  limit: number = 3
): Suggestion[] => {
  // Filter suggestions by category
  const categorySuggestions = aiSuggestions.filter(s => s.category === category);
  
  // Filter out suggestions that are already used (similar text)
  const availableSuggestions = categorySuggestions.filter(suggestion => {
    return !existingItems.some(item => 
      item.toLowerCase().includes(suggestion.text.toLowerCase().substring(0, 10)) ||
      suggestion.text.toLowerCase().includes(item.toLowerCase().substring(0, 10))
    );
  });

  // Sort by confidence and return top suggestions
  return availableSuggestions
    .sort((a, b) => b.confidence - a.confidence)
    .slice(0, limit);
};

export const getSmartSuggestions = (
  category: Suggestion['category'],
  existingItems: string[],
  searchQuery?: string,
  limit: number = 3
): Suggestion[] => {
  let suggestions = generateAISuggestions(category, existingItems, limit * 2);

  // If there's a search query, prioritize matching suggestions
  if (searchQuery && searchQuery.length > 2) {
    const query = searchQuery.toLowerCase();
    suggestions = suggestions.filter(s => 
      s.text.toLowerCase().includes(query) ||
      s.keywords.some(keyword => keyword.toLowerCase().includes(query))
    );
  }

  return suggestions.slice(0, limit);
};