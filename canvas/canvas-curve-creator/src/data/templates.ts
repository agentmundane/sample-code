export interface CanvasTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  data: {
    products: string[];
    painRelievers: string[];
    gainCreators: string[];
    customerJobs: string[];
    customerPains: string[];
    customerGains: string[];
  };
}

export const canvasTemplates: CanvasTemplate[] = [
  {
    id: 'sales-sop-agent',
    name: 'Sales SOP "Second Brain" Agent',
    description: 'AI agent that uses RAG to instantly answer sales team questions about company policies',
    category: 'Automation',
    icon: '🧠',
    data: {
      products: [
        'RAG-powered AI agent for SOP queries',
        'Sales knowledge base integration',
        'Real-time policy question answering',
        'Internal documentation search system'
      ],
      painRelievers: [
        'Eliminates time spent searching for policies',
        'Reduces onboarding time for new sales staff',
        'Ensures consistent policy knowledge across team',
        'Provides instant access to complex procedures'
      ],
      gainCreators: [
        'Increases sales team productivity',
        'Improves response accuracy and consistency',
        'Accelerates new hire onboarding',
        'Enhances customer interaction quality'
      ],
      customerJobs: [
        'Instantly answer sales team questions about company policies',
        'Onboard new sales staff quickly and effectively',
        'Maintain consistent knowledge across the team',
        'Provide accurate information during customer calls'
      ],
      customerPains: [
        'Onboarding new sales staff is slow',
        'Policy knowledge is inconsistent across team',
        'Time wasted searching through documentation',
        'Difficulty finding specific procedures quickly'
      ],
      customerGains: [
        'Faster decision-making during sales calls',
        'Improved sales performance consistency',
        'Reduced training time and costs',
        'Better customer service quality'
      ]
    }
  },
  {
    id: 'competitor-analysis-agent',
    name: 'Automated Competitor Analysis Agent',
    description: 'n8n workflow using Apify/Firecrawl that scrapes competitor websites and summarizes changes',
    category: 'Marketing',
    icon: '🔍',
    data: {
      products: [
        'Automated competitor website monitoring',
        'Product update tracking system',
        'Marketing campaign analysis tool',
        'Competitive intelligence reports'
      ],
      painRelievers: [
        'Eliminates manual competitor research',
        'Reduces time spent monitoring competition',
        'Provides structured competitive data',
        'Automates repetitive analysis tasks'
      ],
      gainCreators: [
        'Enables faster competitive responses',
        'Improves market positioning strategy',
        'Provides actionable competitive insights',
        'Enhances strategic decision-making'
      ],
      customerJobs: [
        'Track competitor product updates and campaigns',
        'Monitor competitive pricing changes',
        'Stay informed about market movements',
        'Identify new competitive threats and opportunities'
      ],
      customerPains: [
        'Manually checking competitor websites is time-consuming',
        'Missing important competitive changes',
        'Inconsistent competitor monitoring',
        'Difficulty tracking multiple competitors simultaneously'
      ],
      customerGains: [
        'Real-time competitive intelligence',
        'Better strategic positioning',
        'Faster response to market changes',
        'Improved competitive advantage'
      ]
    }
  },
  {
    id: 'meeting-summarizer',
    name: 'Automated Meeting Summarizer',
    description: 'AI-powered tool that automatically transcribes and summarizes meeting content',
    category: 'Product',
    icon: '📝',
    data: {
      products: [
        'AI meeting transcription service',
        'Automated summary generation',
        'Action item extraction tool',
        'Meeting insights dashboard'
      ],
      painRelievers: [
        'Eliminates manual note-taking during meetings',
        'Reduces post-meeting summary work',
        'Ensures no important points are missed',
        'Provides consistent meeting documentation'
      ],
      gainCreators: [
        'Increases meeting productivity',
        'Improves follow-up task completion',
        'Enhances team collaboration',
        'Creates searchable meeting archives'
      ],
      customerJobs: [
        'Document important meeting discussions',
        'Track action items and commitments',
        'Share meeting outcomes with stakeholders',
        'Maintain organizational knowledge'
      ],
      customerPains: [
        'Time spent on repetitive note-taking tasks',
        'Missing important meeting details',
        'Inconsistent meeting documentation',
        'Difficulty following up on action items'
      ],
      customerGains: [
        'Better meeting follow-through',
        'Improved team accountability',
        'Enhanced project continuity',
        'More focused meeting discussions'
      ]
    }
  },
  {
    id: 'social-media-generator',
    name: 'AI-Powered Social Media Post Generator',
    description: 'Automated content creation tool for consistent social media presence',
    category: 'Marketing',
    icon: '📱',
    data: {
      products: [
        'AI content generation platform',
        'Multi-platform post optimization',
        'Brand voice consistency tool',
        'Content calendar automation'
      ],
      painRelievers: [
        'Reduces content creation time',
        'Eliminates creative blocks',
        'Ensures consistent posting schedule',
        'Maintains brand voice across platforms'
      ],
      gainCreators: [
        'Increases social media engagement',
        'Improves brand visibility',
        'Enhances content quality',
        'Streamlines content marketing workflow'
      ],
      customerJobs: [
        'Maintain consistent social media presence',
        'Create engaging content regularly',
        'Build brand awareness online',
        'Drive traffic to business website'
      ],
      customerPains: [
        'Slow response time to customer queries',
        'Inconsistent content quality',
        'Lack of time for content creation',
        'Difficulty maintaining posting schedule'
      ],
      customerGains: [
        'Higher social media engagement rates',
        'Improved brand recognition',
        'Better content performance metrics',
        'More efficient marketing operations'
      ]
    }
  },
  {
    id: 'email-triage-agent',
    name: 'Email Triage Agent',
    description: 'Intelligent email sorting and response system for improved customer communication',
    category: 'Automation',
    icon: '📧',
    data: {
      products: [
        'AI-powered email classification',
        'Automated response generation',
        'Priority inbox management',
        'Customer sentiment analysis'
      ],
      painRelievers: [
        'Reduces email processing time',
        'Eliminates manual email sorting',
        'Provides faster customer responses',
        'Improves email organization'
      ],
      gainCreators: [
        'Increases customer satisfaction',
        'Improves response time metrics',
        'Enhances team productivity',
        'Provides better customer insights'
      ],
      customerJobs: [
        'Process customer emails efficiently',
        'Provide timely responses to inquiries',
        'Maintain professional communication',
        'Track customer interaction history'
      ],
      customerPains: [
        'Inconsistent report formatting',
        'Time spent on repetitive email tasks',
        'Missing urgent customer messages',
        'Difficulty prioritizing email responses'
      ],
      customerGains: [
        'Faster customer response times',
        'Better customer service quality',
        'Improved team efficiency',
        'Enhanced customer relationship management'
      ]
    }
  }
];

export const templateCategories = [
  'All',
  'Automation',
  'Marketing', 
  'Product'
];