export interface SequenceStep {
  day: number;
  channel: 'email' | 'linkedin' | 'phone' | 'interaction';
  description: string;
  details?: string;
}

export interface CustomerTier {
  id: 'gold' | 'silver' | 'bronze';
  name: string;
  icon: string;
  description: string;
  duration: string;
  focus: string;
  sequence: SequenceStep[];
}

export const customerTiers: CustomerTier[] = [
  {
    id: 'gold',
    name: 'Gold Customer',
    icon: '🥇',
    description: 'High-value, top-tier prospect',
    duration: '14 days',
    focus: 'Building a relationship, deep personalisation',
    sequence: [
      {
        day: 1,
        channel: 'linkedin',
        description: 'LinkedIn Profile View & Personalised Connection Request',
        details: 'View their profile and send a highly personalised connection request referencing their recent work or achievements'
      },
      {
        day: 3,
        channel: 'email',
        description: 'Highly Personalised Email 1',
        details: 'Reference their work, company news, or recent achievements. Show you\'ve done your research'
      },
      {
        day: 5,
        channel: 'phone',
        description: 'Phone Call 1',
        details: 'Attempt a direct call. Leave a personalised voicemail if no answer, referencing your previous touchpoints'
      },
      {
        day: 7,
        channel: 'email',
        description: 'Email 2 - Case Study/Relevant Resource',
        details: 'Share a relevant case study or resource that specifically addresses their industry or role challenges'
      },
      {
        day: 10,
        channel: 'interaction',
        description: 'LinkedIn Interaction',
        details: 'Engage with their content - comment meaningfully on a post or share their content with insightful commentary'
      },
      {
        day: 12,
        channel: 'phone',
        description: 'Phone Call 2 / Email 3',
        details: 'Final attempt with a direct call or strategic email focusing on a specific pain point you can solve'
      },
      {
        day: 14,
        channel: 'email',
        description: 'Break-up Email',
        details: 'Professional break-up email that leaves the door open and provides additional value'
      }
    ]
  },
  {
    id: 'silver',
    name: 'Silver Customer',
    icon: '🥈',
    description: 'Medium-value, mid-tier prospect',
    duration: '10 days',
    focus: 'Value proposition, efficiency',
    sequence: [
      {
        day: 1,
        channel: 'email',
        description: 'Personalised Email 1',
        details: 'Semi-personalised email focusing on their role and common industry challenges'
      },
      {
        day: 3,
        channel: 'linkedin',
        description: 'LinkedIn Connection Request',
        details: 'Send a connection request with a brief, relevant message about mutual interests or connections'
      },
      {
        day: 5,
        channel: 'email',
        description: 'Email 2 - Value Proposition Follow-up',
        details: 'Follow-up email highlighting your value proposition with a clear call-to-action'
      },
      {
        day: 8,
        channel: 'linkedin',
        description: 'LinkedIn Message',
        details: 'If connected, send a direct message with a soft approach and valuable insight'
      },
      {
        day: 10,
        channel: 'email',
        description: 'Email 3 - Break-up',
        details: 'Final email with a last-chance offer or valuable resource before moving them to nurture'
      }
    ]
  },
  {
    id: 'bronze',
    name: 'Bronze Customer',
    icon: '🥉',
    description: 'Lower-value or mass-outreach prospect',
    duration: '7 days',
    focus: 'Volume and broad reach',
    sequence: [
      {
        day: 1,
        channel: 'email',
        description: 'Automated Email 1',
        details: 'Template-based email with basic personalisation (name, company) focusing on common pain points'
      },
      {
        day: 3,
        channel: 'email',
        description: 'Automated Email 2 - Follow-up',
        details: 'Template follow-up email with social proof and clear value proposition'
      },
      {
        day: 5,
        channel: 'email',
        description: 'Automated Email 3 - Final Offer/Resource',
        details: 'Template email with a compelling offer, discount, or valuable free resource'
      },
      {
        day: 7,
        channel: 'email',
        description: 'Automated Email 4 - Break-up',
        details: 'Final automated email that creates urgency and leaves door open for future engagement'
      }
    ]
  }
];

export const getChannelIcon = (channel: SequenceStep['channel']): string => {
  switch (channel) {
    case 'email':
      return '✉️';
    case 'linkedin':
      return '💼';
    case 'phone':
      return '📞';
    case 'interaction':
      return '👍';
    default:
      return '📋';
  }
};

// This function is now deprecated - using CSS classes instead
export const getChannelColor = (channel: SequenceStep['channel']): string => {
  return `channel-${channel}`;
};