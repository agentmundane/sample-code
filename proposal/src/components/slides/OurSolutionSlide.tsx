import { CheckCircle, Zap, Shield, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const OurSolutionSlide = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Intelligent Automation",
      description: "Custom AI agents that handle complex tasks, learn from patterns, and adapt to your business needs automatically.",
      metric: "80% time saved"
    },
    {
      icon: Shield,
      title: "RAG Knowledge Systems",
      description: "Advanced retrieval-augmented generation that turns your data into intelligent, queryable knowledge bases.",
      metric: "24/7 AI support"
    },
    {
      icon: Rocket,
      title: "Seamless Integration",
      description: "n8n-powered workflows that connect all your tools and systems into one cohesive automation ecosystem.",
      metric: "100+ integrations"
    }
  ];

  const features = [
    "n8n Workflow Integration",
    "Custom AI Agent Development",
    "RAG-Powered Knowledge Bases",
    "Voice AI with ElevenLabs",
    "OpenAI & GPT Integration",
    "Microsoft Copilot Studio Integration",
    "Firecrawl Web Data Extraction",
    "Real-time Process Monitoring"
  ];

  return (
    <div className="slide-container">
      <div className="slide-content">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="heading-title text-acelo-navy mb-4">
              Our <span className="text-acelo-orange">Solution</span>
            </h1>
            <div className="w-16 h-1 bg-acelo-orange mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive AI automation solutions that eliminate manual work, enhance decision-making, and scale your operations. Built with cutting-edge tools and proven methodologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="brand-shadow-card hover:brand-shadow-elevated transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-acelo-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-acelo-orange" />
                  </div>
                  <h3 className="text-xl font-semibold text-acelo-navy mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground mb-4">{benefit.description}</p>
                  <Badge variant="secondary" className="bg-acelo-orange text-white">
                    {benefit.metric}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="brand-shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-acelo-navy mb-6">Key Features</h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="brand-shadow-card bg-gradient-to-br from-acelo-navy to-acelo-navy/90 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Value Proposition</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-white/10 rounded-lg">
                    <h4 className="font-semibold text-acelo-orange mb-2">Immediate Impact</h4>
                    <p className="text-white/90 text-sm">
                      Start automating tasks from day one with pre-built workflows and instant AI agent deployment.
                    </p>
                  </div>
                  <div className="p-4 bg-white/10 rounded-lg">
                    <h4 className="font-semibold text-acelo-orange mb-2">Long-term Growth</h4>
                    <p className="text-white/90 text-sm">
                      Scale operations without proportional cost increases through intelligent automation infrastructure.
                    </p>
                  </div>
                  <div className="p-4 bg-white/10 rounded-lg">
                    <h4 className="font-semibold text-acelo-orange mb-2">Risk Mitigation</h4>
                    <p className="text-white/90 text-sm">
                      Enterprise-grade security and reliability with continuous monitoring and expert support.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};