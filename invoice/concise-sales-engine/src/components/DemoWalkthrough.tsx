import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, ArrowRight, CheckCircle, Database, Save, RefreshCw } from 'lucide-react';

interface DemoWalkthroughProps {
  onClose: () => void;
}

export const DemoWalkthrough: React.FC<DemoWalkthroughProps> = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Welcome to AgentMundane!",
      content: "Welcome to the AgentMundane Service Quoter - your professional tool for creating AI automation service quotes. Let's explore the powerful features that will help you showcase our capabilities to potential clients.",
      icon: <Database className="h-6 w-6" />
    },
    {
      title: "Professional Quote Creation",
      content: "Create professional service quotes for AI automation projects. Every quote is automatically saved as you work, ensuring you never lose your progress. Perfect for client presentations and proposals.",
      icon: <Save className="h-6 w-6" />
    },
    {
      title: "AI Automation Services",
      content: "Our catalog includes comprehensive AI automation services: n8n workflows, Copilot Studio agents, RAG systems, and strategic consulting. Each service is designed to showcase AgentMundane's expertise.",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      title: "Client-Ready Documents",
      content: "Generate professional PDF quotes with AgentMundane branding. Each document includes detailed service descriptions, pricing, and terms - ready to send to potential clients.",
      icon: <Database className="h-6 w-6" />
    },
    {
      title: "Showcase Your Expertise",
      content: "Use the pre-loaded sample quotes to demonstrate AgentMundane's capabilities. These realistic examples show the value we bring to businesses seeking AI automation solutions.",
      icon: <RefreshCw className="h-6 w-6" />
    }
  ];

  const currentStepData = steps[currentStep];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="max-w-md w-full">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              {currentStepData.icon}
              {currentStepData.title}
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              {currentStepData.content}
            </p>
            
            {/* Progress indicator */}
            <div className="flex items-center gap-2">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index <= currentStep ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>

            {/* Step counter */}
            <div className="flex justify-center">
              <Badge variant="outline">
                {currentStep + 1} of {steps.length}
              </Badge>
            </div>
          </div>

          <div className="flex gap-2">
            <Button 
              variant="outline" 
              onClick={prevStep}
              disabled={currentStep === 0}
              className="flex-1"
            >
              Previous
            </Button>
            <Button 
              onClick={nextStep}
              className="flex-1 gap-2"
            >
              {currentStep === steps.length - 1 ? 'Get Started' : 'Next'}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};