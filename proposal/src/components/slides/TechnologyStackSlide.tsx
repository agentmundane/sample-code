import { Server, Database, Cloud, Shield, Code, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export const TechnologyStackSlide = () => {
  const techStack = [
    {
      category: "AI & Automation",
      icon: Zap,
      technologies: [
        { name: "n8n", version: "Latest", adoption: 95 },
        { name: "OpenAI GPT", version: "4.0", adoption: 90 },
        { name: "RAG Systems", version: "Custom", adoption: 85 },
        { name: "LangChain", version: "0.1.x", adoption: 80 }
      ]
    },
    {
      category: "Voice & Communication",
      icon: Server,
      technologies: [
        { name: "ElevenLabs", version: "API v1", adoption: 95 },
        { name: "Microsoft Copilot Studio", version: "Latest", adoption: 90 },
        { name: "Whisper AI", version: "v3", adoption: 85 },
        { name: "Twilio", version: "2024.x", adoption: 75 }
      ]
    },
    {
      category: "Data & Integration",
      icon: Database,
      technologies: [
        { name: "Firecrawl", version: "Latest", adoption: 90 },
        { name: "Vector Databases", version: "Pinecone", adoption: 85 },
        { name: "PostgreSQL", version: "15.x", adoption: 80 },
        { name: "API Connectors", version: "Custom", adoption: 95 }
      ]
    },
    {
      category: "Platform & Hosting",
      icon: Cloud,
      technologies: [
        { name: "AWS/Azure", version: "Latest", adoption: 95 },
        { name: "Docker", version: "24.x", adoption: 90 },
        { name: "Serverless", version: "Functions", adoption: 85 },
        { name: "CDN", version: "Global", adoption: 80 }
      ]
    }
  ];

  const architecture = [
    {
      layer: "User Interface Layer",
      description: "Intuitive dashboards and interfaces for monitoring and controlling AI agents and automated workflows.",
      technologies: ["n8n UI", "Custom Dashboards", "Mobile Apps"],
      color: "bg-blue-500"
    },
    {
      layer: "AI Agent Layer",
      description: "Intelligent agents powered by GPT models that understand context and execute complex business logic.",
      technologies: ["OpenAI GPT", "Custom Agents", "RAG Systems"],
      color: "bg-green-500"
    },
    {
      layer: "Workflow Engine",
      description: "n8n-powered automation engine that orchestrates all business processes and integrations.",
      technologies: ["n8n Core", "Custom Nodes", "Event Triggers"],
      color: "bg-yellow-500"
    },
    {
      layer: "Integration Layer",
      description: "Seamless connections to existing systems, APIs, and data sources for unified operations.",
      technologies: ["REST APIs", "Webhooks", "Database Connectors"],
      color: "bg-purple-500"
    }
  ];

  const securityFeatures = [
    "AI model security & privacy",
    "Encrypted data transmission",
    "Secure API token management",
    "Role-based workflow access",
    "Audit trails for all automations",
    "Data anonymization for AI training"
  ];

  return (
    <div className="slide-container">
      <div className="slide-content">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="heading-title text-acelo-navy mb-4">
              Technology <span className="text-acelo-orange">Stack</span>
            </h1>
            <div className="w-16 h-1 bg-acelo-orange mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our cutting-edge AI automation stack combines the power of n8n workflows, OpenAI intelligence, and enterprise-grade integrations to deliver seamless business transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {techStack.map((stack, index) => (
              <Card key={index} className="brand-shadow-card hover:brand-shadow-elevated transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-acelo-navy">
                    <stack.icon className="w-5 h-5 text-acelo-orange" />
                    {stack.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {stack.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-acelo-navy">{tech.name}</span>
                          <Badge variant="outline" className="text-xs">
                            {tech.version}
                          </Badge>
                        </div>
                        <Progress value={tech.adoption} className="h-2" />
                        <div className="text-right text-xs text-muted-foreground">
                          {tech.adoption}% adoption
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="brand-shadow-card">
              <CardHeader>
                <CardTitle className="text-acelo-navy">System Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {architecture.map((layer, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-start space-x-4">
                        <div className={`w-4 h-4 rounded-full ${layer.color} flex-shrink-0 mt-1`}></div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-acelo-navy mb-1">{layer.layer}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{layer.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {layer.technologies.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="secondary" className="text-xs bg-acelo-navy/10 text-acelo-navy">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      {index < architecture.length - 1 && (
                        <div className="absolute left-2 top-6 w-0.5 h-8 bg-gray-200"></div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="brand-shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-acelo-navy">
                  <Shield className="w-5 h-5 text-acelo-orange" />
                  Security Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {securityFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <Shield className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-acelo-navy">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-acelo-navy/5 rounded-lg">
                  <h4 className="font-semibold text-acelo-navy mb-2">Compliance Standards</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-acelo-orange border-acelo-orange">SOC 2</Badge>
                    <Badge variant="outline" className="text-acelo-orange border-acelo-orange">ISO 27001</Badge>
                    <Badge variant="outline" className="text-acelo-orange border-acelo-orange">GDPR</Badge>
                    <Badge variant="outline" className="text-acelo-orange border-acelo-orange">HIPAA</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="brand-shadow-card bg-gradient-to-br from-acelo-navy to-acelo-navy/90 text-white">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Zap className="w-12 h-12 text-acelo-orange mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Performance</h3>
                  <p className="text-white/90 text-sm">Lightning-fast AI responses and workflow execution with optimized performance monitoring.</p>
                </div>
                <div className="text-center">
                  <Shield className="w-12 h-12 text-acelo-orange mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Security</h3>
                  <p className="text-white/90 text-sm">Bank-level security for AI models and data with comprehensive privacy protection.</p>
                </div>
                <div className="text-center">
                  <Cloud className="w-12 h-12 text-acelo-orange mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Scalability</h3>
                  <p className="text-white/90 text-sm">Seamlessly scale from single workflows to enterprise-wide automation ecosystems.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};