import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CustomerTier, getChannelIcon, getChannelColor } from "@/data/sequences";
import { Mail, Linkedin, Phone, ThumbsUp, Calendar } from "lucide-react";

interface SequenceDisplayProps {
  selectedTier: CustomerTier;
}

const getChannelLucideIcon = (channel: string) => {
  switch (channel) {
    case 'email':
      return Mail;
    case 'linkedin':
      return Linkedin;
    case 'phone':
      return Phone;
    case 'interaction':
      return ThumbsUp;
    default:
      return Calendar;
  }
};

export const SequenceDisplay = ({ selectedTier }: SequenceDisplayProps) => {
  return (
    <Card className="w-full">
      <CardHeader className="text-center pb-6">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-3xl">{selectedTier.icon}</span>
          <CardTitle className="text-2xl font-heading font-bold text-foreground">
            {selectedTier.name} Sequence
          </CardTitle>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{selectedTier.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>•</span>
            <span>{selectedTier.focus}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {selectedTier.sequence.map((step, index) => {
            const IconComponent = getChannelLucideIcon(step.channel);
            const isLastStep = index === selectedTier.sequence.length - 1;
            
            return (
              <div key={index} className="relative">
                <div className="sequence-step">
                  <div className="flex flex-col items-center">
                    <div className={`sequence-icon channel-${step.channel}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    {!isLastStep && (
                      <div className="sequence-connector h-8 mt-2"></div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline" className="text-xs font-medium">
                        Day {step.day}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {step.channel.charAt(0).toUpperCase() + step.channel.slice(1)}
                      </Badge>
                    </div>
                    
                    <h4 className="font-heading font-semibold text-foreground mb-2">
                      {step.description}
                    </h4>
                    
                    {step.details && (
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.details}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-8 p-6 bg-gradient-to-r from-acelo-navy/5 to-acelo-orange/5 rounded-lg border border-acelo-orange/20">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-acelo-orange rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs font-bold">💡</span>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-acelo-navy mb-2">Implementation Tip</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Copy this sequence into your CRM (HubSpot, Salesforce, etc.) and customize the messaging to match your brand voice and specific offerings. 
                Each step is designed to build momentum and create meaningful touchpoints with your prospects.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};