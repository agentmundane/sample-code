import { CheckCircle, Calendar, ArrowRight, Clock, Users, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const NextStepsSlide = () => {
  const actionItems = [
    {
      step: 1,
      title: "Contract Review & Approval",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Legal and technical review process.",
      timeframe: "1-2 weeks",
      responsible: "Legal Team",
      status: "pending"
    },
    {
      step: 2,
      title: "Project Kickoff Meeting",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Stakeholder alignment.",
      timeframe: "Week 3",
      responsible: "Project Team",
      status: "pending"
    },
    {
      step: 3,
      title: "Technical Discovery",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
      timeframe: "Weeks 3-4",
      responsible: "Technical Team",
      status: "pending"
    },
    {
      step: 4,
      title: "Implementation Planning",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
      timeframe: "Week 5",
      responsible: "Implementation Team",
      status: "pending"
    },
    {
      step: 5,
      title: "Development & Testing",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
      timeframe: "Weeks 6-10",
      responsible: "Development Team",
      status: "pending"
    },
    {
      step: 6,
      title: "Go-Live & Support",
      description: "Mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit.",
      timeframe: "Week 11+",
      responsible: "Support Team",
      status: "pending"
    }
  ];

  const immediateActions = [
    {
      action: "Schedule Follow-up Meeting",
      owner: "Client",
      deadline: "Within 48 hours",
      priority: "high"
    },
    {
      action: "Provide Technical Requirements",
      owner: "Client",
      deadline: "End of week",
      priority: "high"
    },
    {
      action: "Send Detailed Proposal",
      owner: "Our Team",
      deadline: "Within 3 days",
      priority: "medium"
    },
    {
      action: "Legal Review Process",
      owner: "Both Teams",
      deadline: "Next week",
      priority: "medium"
    }
  ];

  const milestones = [
    { milestone: "Contract Signed", week: "Week 2" },
    { milestone: "Project Kickoff", week: "Week 3" },
    { milestone: "Technical Specifications", week: "Week 5" },
    { milestone: "Development Complete", week: "Week 10" },
    { milestone: "Go-Live", week: "Week 11" }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
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
              Next <span className="text-acelo-orange">Steps</span>
            </h1>
            <div className="w-16 h-1 bg-acelo-orange mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Clear path forward to project success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="brand-shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-acelo-navy">
                  <Clock className="w-5 h-5 text-acelo-orange" />
                  Immediate Action Items
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {immediateActions.map((item, index) => (
                    <div key={index} className="p-4 border-l-4 border-acelo-orange bg-gray-50 rounded-r-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-acelo-navy">{item.action}</h4>
                        <Badge variant="outline" className={getPriorityColor(item.priority)}>
                          {item.priority}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{item.owner}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{item.deadline}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="brand-shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-acelo-navy">
                  <CheckCircle className="w-5 h-5 text-acelo-orange" />
                  Key Milestones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 bg-green-50 rounded-lg">
                      <div className="w-8 h-8 bg-acelo-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-acelo-navy">{milestone.milestone}</h4>
                        <p className="text-sm text-muted-foreground">{milestone.week}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-acelo-orange" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="brand-shadow-card mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-acelo-navy">
                <FileText className="w-5 h-5 text-acelo-orange" />
                Detailed Implementation Plan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {actionItems.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-start space-x-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="w-10 h-10 bg-acelo-orange rounded-full flex items-center justify-center text-white font-bold">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold text-acelo-navy">{item.title}</h4>
                          <Badge variant="outline" className="text-acelo-orange border-acelo-orange">
                            {item.timeframe}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-2">{item.description}</p>
                        <div className="flex items-center space-x-2 text-sm">
                          <Users className="w-4 h-4 text-acelo-orange" />
                          <span className="text-acelo-navy font-medium">{item.responsible}</span>
                        </div>
                      </div>
                    </div>
                    {index < actionItems.length - 1 && (
                      <div className="absolute left-9 top-16 w-0.5 h-8 bg-gray-200"></div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="brand-shadow-card bg-gradient-to-br from-acelo-navy to-acelo-navy/90 text-white">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
                <p className="text-white/90 max-w-3xl mx-auto mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Let's begin this transformation journey together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-acelo-orange hover:bg-acelo-orange/90 text-white px-8 py-3">
                    Schedule Follow-up Meeting
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-acelo-navy px-8 py-3">
                    Download Proposal
                  </Button>
                </div>
                <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-white/80">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>Quick Implementation</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>Dedicated Support</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4" />
                    <span>Proven Results</span>
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