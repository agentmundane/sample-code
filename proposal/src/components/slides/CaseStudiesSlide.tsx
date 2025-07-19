import { Building, TrendingUp, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const CaseStudiesSlide = () => {
  const caseStudies = [
    {
      company: "FinanceFlow Corp",
      industry: "Financial Services",
      challenge: "Manual invoice processing taking 4+ hours daily with high error rates and delayed approvals affecting cash flow.",
      solution: "Implemented AI-powered 'Second Brain' agent using RAG system to automatically process, validate, and route invoices with intelligent approval workflows.",
      results: [
        { metric: "Processing Time", improvement: "90%" },
        { metric: "Error Reduction", improvement: "95%" },
        { metric: "Cost Savings", improvement: "$50K/year" }
      ],
      testimonial: "The Second Brain agent transformed our accounts payable. What took hours now happens in minutes with zero errors."
    },
    {
      company: "TechSupport Plus",
      industry: "Technology",
      challenge: "Customer support team overwhelmed with repetitive queries, leading to long response times and decreased satisfaction.",
      solution: "Deployed intelligent customer service agent with ElevenLabs voice integration and comprehensive knowledge base for 24/7 support.",
      results: [
        { metric: "Response Time", improvement: "85%" },
        { metric: "Resolution Rate", improvement: "70%" },
        { metric: "Customer Satisfaction", improvement: "92%" }
      ],
      testimonial: "Our AI support agent handles 80% of inquiries automatically, freeing our team for complex issues while customers get instant help."
    }
  ];

  const successMetrics = [
    { icon: Building, value: "50+", label: "Automation Projects" },
    { icon: TrendingUp, value: "95%", label: "Client Success Rate" },
    { icon: Users, value: "1K+", label: "Hours Saved Daily" },
    { icon: Award, value: "100%", label: "ROI Achievement" }
  ];

  return (
    <div className="slide-container">
      <div className="slide-content">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="heading-title text-acelo-navy mb-4">
              Success <span className="text-acelo-orange">Stories</span>
            </h1>
            <div className="w-16 h-1 bg-acelo-orange mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover how businesses like yours have transformed their operations with our AI automation solutions. These case studies showcase real implementations from our course modules.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="brand-shadow-card hover:brand-shadow-elevated transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-acelo-navy">{study.company}</h3>
                    <Badge variant="outline" className="text-acelo-orange border-acelo-orange">
                      {study.industry}
                    </Badge>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-acelo-navy mb-2">Challenge</h4>
                      <p className="text-sm text-muted-foreground">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-acelo-navy mb-2">Solution</h4>
                      <p className="text-sm text-muted-foreground">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-acelo-navy mb-2">Results</h4>
                      <div className="grid grid-cols-3 gap-2">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="text-center p-2 bg-gray-50 rounded">
                            <div className="text-lg font-bold text-acelo-orange">{result.improvement}</div>
                            <div className="text-xs text-muted-foreground">{result.metric}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-acelo-navy/5 p-4 rounded-lg">
                      <p className="text-sm text-acelo-navy italic">"{study.testimonial}"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {successMetrics.map((metric, index) => (
              <Card key={index} className="brand-shadow-card text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-acelo-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <metric.icon className="w-6 h-6 text-acelo-orange" />
                  </div>
                  <div className="text-2xl font-bold text-acelo-navy mb-2">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};