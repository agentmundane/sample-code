import { Users, Award, Globe, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const AboutUsSlide = () => {
  const stats = [
    { icon: Users, value: "100+", label: "Workflows Deployed" },
    { icon: Award, value: "5+", label: "Years in AI Automation" },
    { icon: Globe, value: "10,000+", label: "Hours Saved for Clients" },
    { icon: TrendingUp, value: "95%", label: "Automation Success Rate" }
  ];

  const expertise = [
    { area: "n8n Workflow Automation", percentage: 95 },
    { area: "AI Agent Development", percentage: 92 },
    { area: "RAG Knowledge Systems", percentage: 88 },
    { area: "Business Process Optimization", percentage: 90 }
  ];

  return (
    <div className="slide-container">
      <div className="slide-content">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="heading-title text-acelo-navy mb-4">
              About <span className="text-acelo-orange">AgentMundane</span>
            </h1>
            <div className="w-16 h-1 bg-acelo-orange mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We are the leading experts in AI automation and intelligent workflow solutions. Our mission is to empower businesses by creating custom AI agents and automated systems that eliminate repetitive tasks and unlock human potential.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="heading-subsection text-acelo-navy mb-6">Our Impact</h2>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <Card key={index} className="text-center brand-shadow-card">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-acelo-orange/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <stat.icon className="w-6 h-6 text-acelo-orange" />
                      </div>
                      <div className="text-2xl font-bold text-acelo-navy mb-2">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="heading-subsection text-acelo-navy mb-6">Our Expertise</h2>
              <div className="space-y-4">
                {expertise.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-acelo-navy">{item.area}</span>
                      <span className="text-sm text-muted-foreground">{item.percentage}%</span>
                    </div>
                    <Progress value={item.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Card className="brand-shadow-card bg-gradient-to-r from-acelo-navy to-acelo-navy/90 text-white">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg text-white/90 max-w-4xl mx-auto">
                  "To democratize AI automation and make intelligent workflows accessible to every business. We believe that by removing mundane tasks through smart automation, we can free up human creativity and drive unprecedented business growth."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};