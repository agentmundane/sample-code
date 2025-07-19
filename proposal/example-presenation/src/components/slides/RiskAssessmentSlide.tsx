import { Shield, AlertTriangle, CheckCircle, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export const RiskAssessmentSlide = () => {
  const risks = [
    {
      category: "Technical",
      level: "Low",
      probability: 20,
      impact: "Medium",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      mitigation: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      category: "Timeline",
      level: "Medium",
      probability: 35,
      impact: "High",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      mitigation: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."
    },
    {
      category: "Budget",
      level: "Low",
      probability: 15,
      impact: "High",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      mitigation: "Deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis."
    },
    {
      category: "Adoption",
      level: "Medium",
      probability: 40,
      impact: "Medium",
      description: "Iste natus error sit voluptatem accusantium doloremque laudantium.",
      mitigation: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
    }
  ];

  const mitigationStrategies = [
    {
      strategy: "Comprehensive Testing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Multi-phase testing approach.",
      effectiveness: 85
    },
    {
      strategy: "Phased Implementation",
      description: "Sed do eiusmod tempor incididunt ut labore. Gradual rollout to minimize disruption.",
      effectiveness: 90
    },
    {
      strategy: "Stakeholder Engagement",
      description: "Ut enim ad minim veniam, quis nostrud. Regular communication and training.",
      effectiveness: 80
    },
    {
      strategy: "Contingency Planning",
      description: "Duis aute irure dolor in reprehenderit. Backup plans for critical scenarios.",
      effectiveness: 95
    }
  ];

  const getRiskColor = (level: string) => {
    switch (level) {
      case "Low":
        return "bg-green-100 text-green-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "High":
        return "bg-red-100 text-red-800";
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
              Risk <span className="text-acelo-orange">Assessment</span>
            </h1>
            <div className="w-16 h-1 bg-acelo-orange mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proactive risk management for project success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="brand-shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-acelo-navy">
                  <AlertTriangle className="w-5 h-5 text-acelo-orange" />
                  Identified Risks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {risks.map((risk, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-acelo-navy">{risk.category}</h4>
                        <Badge variant="outline" className={getRiskColor(risk.level)}>
                          {risk.level} Risk
                        </Badge>
                      </div>
                      
                      <div className="space-y-2 mb-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Probability:</span>
                          <span className="font-medium">{risk.probability}%</span>
                        </div>
                        <Progress value={risk.probability} className="h-2" />
                      </div>

                      <div className="space-y-2">
                        <div className="text-sm">
                          <span className="font-medium text-acelo-navy">Impact: </span>
                          <span className="text-muted-foreground">{risk.impact}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{risk.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="brand-shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-acelo-navy">
                  <Shield className="w-5 h-5 text-acelo-orange" />
                  Mitigation Strategies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mitigationStrategies.map((strategy, index) => (
                    <div key={index} className="p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-acelo-navy">{strategy.strategy}</h4>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {strategy.effectiveness}%
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{strategy.description}</p>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Effectiveness:</span>
                        <span className="font-medium text-green-600">{strategy.effectiveness}%</span>
                      </div>
                      <Progress value={strategy.effectiveness} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="brand-shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-acelo-navy">
                  <FileText className="w-5 h-5 text-acelo-orange" />
                  Risk Matrix
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {risks.map((risk, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-acelo-navy">{risk.category}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground">{risk.probability}%</span>
                        <Badge variant="outline" className={getRiskColor(risk.level)}>
                          {risk.level}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-acelo-navy/5 rounded-lg">
                  <h4 className="font-semibold text-acelo-navy mb-2">Overall Risk Level</h4>
                  <div className="flex items-center space-x-2">
                    <Progress value={25} className="h-3 flex-1" />
                    <Badge variant="outline" className="bg-green-100 text-green-800">Low</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="brand-shadow-card bg-gradient-to-br from-acelo-navy to-acelo-navy/90 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Risk Management Framework</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-acelo-orange mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-acelo-orange">Continuous Monitoring</h4>
                      <p className="text-white/90 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-acelo-orange mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-acelo-orange">Regular Reviews</h4>
                      <p className="text-white/90 text-sm">Sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-acelo-orange mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-acelo-orange">Escalation Procedures</h4>
                      <p className="text-white/90 text-sm">Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white/10 rounded-lg">
                  <div className="text-center">
                    <div className="text-sm mb-2">Risk Confidence Level</div>
                    <div className="text-2xl font-bold text-acelo-orange">92%</div>
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