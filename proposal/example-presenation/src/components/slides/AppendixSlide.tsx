import { FileText, Download, ExternalLink, BookOpen, BarChart3, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const AppendixSlide = () => {
  const documents = [
    {
      title: "Technical Specifications",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Detailed technical requirements and architecture.",
      type: "PDF",
      size: "2.3 MB",
      pages: 45,
      category: "technical"
    },
    {
      title: "Implementation Guide",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Step-by-step implementation process.",
      type: "PDF",
      size: "1.8 MB",
      pages: 32,
      category: "implementation"
    },
    {
      title: "Security Compliance Report",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
      type: "PDF",
      size: "3.1 MB",
      pages: 67,
      category: "security"
    },
    {
      title: "ROI Calculator",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
      type: "Excel",
      size: "0.5 MB",
      pages: "12 sheets",
      category: "financial"
    },
    {
      title: "Case Study Collection",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
      type: "PDF",
      size: "4.2 MB",
      pages: 89,
      category: "case-studies"
    },
    {
      title: "API Documentation",
      description: "Anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      type: "HTML",
      size: "N/A",
      pages: "Interactive",
      category: "technical"
    }
  ];

  const externalLinks = [
    {
      title: "Product Demo Portal",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interactive product demonstrations.",
      url: "demo.acelo.com",
      category: "demo"
    },
    {
      title: "Customer Portal",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Client resources and support.",
      url: "portal.acelo.com",
      category: "support"
    },
    {
      title: "Knowledge Base",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
      url: "help.acelo.com",
      category: "documentation"
    },
    {
      title: "Community Forum",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
      url: "community.acelo.com",
      category: "community"
    }
  ];

  const additionalResources = [
    {
      title: "Compliance Certifications",
      items: ["SOC 2 Type II Report", "ISO 27001 Certificate", "GDPR Compliance Statement", "HIPAA BAA Template"]
    },
    {
      title: "Technical Resources",
      items: ["System Requirements", "Integration Guides", "API Reference", "SDK Documentation"]
    },
    {
      title: "Training Materials",
      items: ["Administrator Training", "End User Training", "Video Tutorials", "Quick Start Guides"]
    },
    {
      title: "Support Information",
      items: ["Support Escalation Matrix", "SLA Documentation", "Contact Directory", "Emergency Procedures"]
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "technical":
        return FileText;
      case "security":
        return Shield;
      case "financial":
        return BarChart3;
      default:
        return BookOpen;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "technical":
        return "bg-blue-100 text-blue-800";
      case "security":
        return "bg-red-100 text-red-800";
      case "financial":
        return "bg-green-100 text-green-800";
      case "implementation":
        return "bg-purple-100 text-purple-800";
      case "case-studies":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="slide-container">
      <div className="slide-content">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="heading-title text-acelo-navy mb-4">
              <span className="text-acelo-orange">Appendix</span> & Resources
            </h1>
            <div className="w-16 h-1 bg-acelo-orange mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Additional documentation and resources.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="brand-shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-acelo-navy">
                  <Download className="w-5 h-5 text-acelo-orange" />
                  Downloadable Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {documents.map((doc, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          {(() => {
                            const IconComponent = getCategoryIcon(doc.category);
                            return <IconComponent className="w-5 h-5 text-acelo-orange flex-shrink-0 mt-0.5" />;
                          })()}
                          <div>
                            <h4 className="font-semibold text-acelo-navy">{doc.title}</h4>
                            <p className="text-sm text-muted-foreground">{doc.description}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className={getCategoryColor(doc.category)}>
                          {doc.type}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <span>{doc.size}</span>
                          <span>{doc.pages} pages</span>
                        </div>
                        <Button size="sm" variant="outline" className="text-acelo-orange border-acelo-orange hover:bg-acelo-orange hover:text-white">
                          <Download className="w-3 h-3 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="brand-shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-acelo-navy">
                  <ExternalLink className="w-5 h-5 text-acelo-orange" />
                  Online Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {externalLinks.map((link, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-acelo-navy">{link.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{link.description}</p>
                          <div className="text-xs text-acelo-orange font-medium">{link.url}</div>
                        </div>
                        <Button size="sm" variant="outline" className="text-acelo-orange border-acelo-orange hover:bg-acelo-orange hover:text-white">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Visit
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {additionalResources.map((resource, index) => (
              <Card key={index} className="brand-shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-acelo-navy mb-4">{resource.title}</h3>
                  <ul className="space-y-2">
                    {resource.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-acelo-orange rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="brand-shadow-card bg-gradient-to-br from-acelo-navy to-acelo-navy/90 text-white">
            <CardContent className="p-8">
              <div className="text-center">
                <BookOpen className="w-16 h-16 text-acelo-orange mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Need Additional Information?</h3>
                <p className="text-white/90 max-w-3xl mx-auto mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. We're happy to provide any additional documentation or resources you need.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-acelo-orange mb-2">Custom Documentation</div>
                    <p className="text-white/80 text-sm">Tailored to your specific requirements</p>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-acelo-orange mb-2">Technical Deep Dives</div>
                    <p className="text-white/80 text-sm">Detailed technical presentations</p>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-acelo-orange mb-2">Compliance Reports</div>
                    <p className="text-white/80 text-sm">Industry-specific compliance documentation</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};