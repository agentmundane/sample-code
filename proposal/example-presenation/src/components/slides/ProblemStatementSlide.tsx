import { AlertTriangle, Clock, DollarSign, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const ProblemStatementSlide = () => {
  const problems = [
    {
      icon: Clock,
      title: "Manual Process Inefficiency",
      impact: "High",
      description: "Teams spend countless hours on repetitive tasks like data entry, email management, and routine processing that could be automated.",
      stats: "60% of work time on manual tasks"
    },
    {
      icon: DollarSign,
      title: "Escalating Operational Costs",
      impact: "Critical",
      description: "Without automation, businesses face rising labor costs and reduced productivity as manual processes become bottlenecks.",
      stats: "40% higher operational costs"
    },
    {
      icon: Users,
      title: "Data Silos & Poor Integration",
      impact: "High",
      description: "Information is trapped in separate systems, preventing teams from accessing real-time data and making informed decisions.",
      stats: "70% of data remains isolated"
    },
    {
      icon: AlertTriangle,
      title: "Scalability Limitations",
      impact: "Critical",
      description: "Manual processes cannot scale with business growth, creating operational bottlenecks and limiting expansion potential.",
      stats: "3x slower growth without automation"
    }
  ];

  return (
    <div className="slide-container">
      <div className="slide-content">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="heading-title text-acelo-navy mb-4">
              Current <span className="text-acelo-orange">Challenges</span>
            </h1>
            <div className="w-16 h-1 bg-acelo-orange mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Modern businesses face unprecedented challenges in managing data, workflows, and customer interactions. These pain points are costing organizations time, money, and competitive advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {problems.map((problem, index) => (
              <Card key={index} className="brand-shadow-card hover:brand-shadow-elevated transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                        <problem.icon className="w-6 h-6 text-red-500" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-acelo-navy">{problem.title}</h3>
                        <Badge 
                          variant={problem.impact === "Critical" ? "destructive" : "secondary"}
                          className={problem.impact === "Critical" ? "" : "bg-yellow-100 text-yellow-800"}
                        >
                          {problem.impact}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-3">{problem.description}</p>
                      <div className="text-sm font-semibold text-red-600">{problem.stats}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="brand-shadow-card bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
            <CardContent className="p-8">
              <div className="text-center">
                <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-acelo-navy mb-4">The Cost of Inaction</h3>
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                  Every day without intelligent automation means lost productivity, missed opportunities, and falling behind competitors who have embraced AI-powered solutions. The businesses that act now will dominate tomorrow's market.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};