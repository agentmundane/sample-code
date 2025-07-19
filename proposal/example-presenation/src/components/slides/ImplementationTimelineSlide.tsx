import { Calendar, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export const ImplementationTimelineSlide = () => {
  const phases = [
    {
      phase: "Phase 1: Discovery & Planning",
      duration: "2 weeks",
      status: "planning",
      tasks: [
        "Requirements gathering",
        "Stakeholder interviews",
        "Technical assessment",
        "Project planning"
      ],
      deliverables: "Project charter, technical specifications"
    },
    {
      phase: "Phase 2: Setup & Configuration",
      duration: "3 weeks",
      status: "in-progress",
      tasks: [
        "Environment setup",
        "Initial configuration",
        "Data migration planning",
        "Security implementation"
      ],
      deliverables: "Configured system, migration plan"
    },
    {
      phase: "Phase 3: Development & Testing",
      duration: "4 weeks",
      status: "upcoming",
      tasks: [
        "Custom development",
        "Integration testing",
        "Performance optimization",
        "User acceptance testing"
      ],
      deliverables: "Tested system, integration documentation"
    },
    {
      phase: "Phase 4: Deployment & Training",
      duration: "2 weeks",
      status: "upcoming",
      tasks: [
        "Production deployment",
        "User training sessions",
        "Documentation handover",
        "Support setup"
      ],
      deliverables: "Live system, trained users, documentation"
    }
  ];

  const milestones = [
    { milestone: "Project Kickoff", date: "Week 1", status: "completed" },
    { milestone: "Technical Review", date: "Week 3", status: "completed" },
    { milestone: "Beta Testing", date: "Week 7", status: "upcoming" },
    { milestone: "Go-Live", date: "Week 11", status: "upcoming" }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "in-progress":
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case "planning":
        return <Calendar className="w-5 h-5 text-blue-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "in-progress":
        return "bg-yellow-100 text-yellow-800";
      case "planning":
        return "bg-blue-100 text-blue-800";
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
              Implementation <span className="text-acelo-orange">Timeline</span>
            </h1>
            <div className="w-16 h-1 bg-acelo-orange mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Structured approach to successful delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-acelo-navy">Project Phases</h2>
              {phases.map((phase, index) => (
                <Card key={index} className="brand-shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(phase.status)}
                        <h3 className="text-lg font-semibold text-acelo-navy">{phase.phase}</h3>
                      </div>
                      <Badge variant="outline" className={getStatusColor(phase.status)}>
                        {phase.duration}
                      </Badge>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-acelo-navy mb-2">Key Tasks</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {phase.tasks.map((task, taskIndex) => (
                            <li key={taskIndex} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-acelo-orange rounded-full"></div>
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-acelo-navy mb-2">Deliverables</h4>
                        <p className="text-sm text-muted-foreground">{phase.deliverables}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-acelo-navy">Key Milestones</h2>
              <Card className="brand-shadow-card">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {milestones.map((milestone, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          {getStatusIcon(milestone.status)}
                          <span className="font-medium text-acelo-navy">{milestone.milestone}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold text-acelo-orange">{milestone.date}</div>
                          <Badge variant="outline" className={getStatusColor(milestone.status)} size="sm">
                            {milestone.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="brand-shadow-card bg-gradient-to-br from-acelo-navy to-acelo-navy/90 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Project Progress</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Overall Completion</span>
                        <span>35%</span>
                      </div>
                      <Progress value={35} className="h-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-acelo-orange">11</div>
                        <div className="text-sm text-white/80">Total Weeks</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-acelo-orange">4</div>
                        <div className="text-sm text-white/80">Major Phases</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="brand-shadow-card bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-acelo-navy mb-3">Success Factors</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Lorem ipsum dolor sit amet</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Consectetur adipiscing elit</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Sed do eiusmod tempor</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};