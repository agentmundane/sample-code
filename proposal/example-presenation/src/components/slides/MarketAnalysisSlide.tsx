import { TrendingUp, BarChart3, PieChart, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const MarketAnalysisSlide = () => {
  const marketTrends = [
    {
      trend: "Digital Transformation",
      growth: 85,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      trend: "Cloud Adoption",
      growth: 92,
      description: "Sed do eiusmod tempor incididunt ut labore et dolore."
    },
    {
      trend: "AI & Automation",
      growth: 78,
      description: "Ut enim ad minim veniam, quis nostrud exercitation."
    },
    {
      trend: "Remote Work Solutions",
      growth: 95,
      description: "Duis aute irure dolor in reprehenderit in voluptate."
    }
  ];

  const marketSize = [
    { segment: "Enterprise Solutions", size: "$45B", growth: "+15%" },
    { segment: "SMB Solutions", size: "$28B", growth: "+22%" },
    { segment: "Cloud Services", size: "$62B", growth: "+18%" },
    { segment: "Consulting", size: "$35B", growth: "+12%" }
  ];

  return (
    <div className="slide-container">
      <div className="slide-content">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="heading-title text-acelo-navy mb-4">
              Market <span className="text-acelo-orange">Analysis</span>
            </h1>
            <div className="w-16 h-1 bg-acelo-orange mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Understanding market trends drives strategic decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="brand-shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-acelo-navy">
                  <TrendingUp className="w-5 h-5 text-acelo-orange" />
                  Market Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {marketTrends.map((trend, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-acelo-navy">{trend.trend}</span>
                        <span className="text-sm text-acelo-orange font-semibold">{trend.growth}%</span>
                      </div>
                      <Progress value={trend.growth} className="h-2" />
                      <p className="text-xs text-muted-foreground">{trend.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="brand-shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-acelo-navy">
                  <BarChart3 className="w-5 h-5 text-acelo-orange" />
                  Market Size & Growth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {marketSize.map((segment, index) => (
                    <div key={index} className="p-4 rounded-lg bg-gray-50">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-acelo-navy">{segment.segment}</h4>
                        <span className="text-green-600 font-semibold text-sm">{segment.growth}</span>
                      </div>
                      <div className="text-2xl font-bold text-acelo-orange">{segment.size}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="brand-shadow-card bg-gradient-to-r from-acelo-navy to-acelo-navy/90 text-white">
              <CardContent className="p-6">
                <div className="text-center">
                  <Target className="w-12 h-12 text-acelo-orange mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Total Addressable Market</h3>
                  <div className="text-3xl font-bold text-acelo-orange mb-2">$170B</div>
                  <p className="text-white/90 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Growing at 17% CAGR.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="brand-shadow-card bg-gradient-to-r from-acelo-orange to-acelo-orange/90 text-white">
              <CardContent className="p-6">
                <div className="text-center">
                  <PieChart className="w-12 h-12 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Market Opportunity</h3>
                  <div className="text-3xl font-bold mb-2">$12.5B</div>
                  <p className="text-white/90 text-sm">
                    Sed do eiusmod tempor incididunt ut labore. Serviceable addressable market.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};