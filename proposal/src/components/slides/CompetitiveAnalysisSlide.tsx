import { Target, TrendingUp, Award, Users, DollarSign, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export const CompetitiveAnalysisSlide = () => {
  const competitors = [
    {
      name: "Competitor A",
      marketShare: 25,
      strengths: ["Brand Recognition", "Large Customer Base"],
      weaknesses: ["Legacy Technology", "High Costs"],
      pricing: "High",
      rating: 3.5
    },
    {
      name: "Competitor B",
      marketShare: 20,
      strengths: ["Feature Rich", "Good Support"],
      weaknesses: ["Complex Setup", "Limited Scalability"],
      pricing: "Medium",
      rating: 3.8
    },
    {
      name: "Competitor C",
      marketShare: 15,
      strengths: ["Low Cost", "Simple Interface"],
      weaknesses: ["Limited Features", "Poor Performance"],
      pricing: "Low",
      rating: 3.2
    },
    {
      name: "Our Solution",
      marketShare: 12,
      strengths: ["Modern Technology", "Excellent Support", "Competitive Pricing"],
      weaknesses: ["Newer Brand", "Growing Market Share"],
      pricing: "Competitive",
      rating: 4.7
    }
  ];

  const differentiators = [
    {
      icon: Zap,
      title: "Superior Performance",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 10x faster than competitors.",
      advantage: "10x faster"
    },
    {
      icon: DollarSign,
      title: "Cost Effective",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 40% cost savings.",
      advantage: "40% savings"
    },
    {
      icon: Users,
      title: "Better User Experience",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
      advantage: "98% satisfaction"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      advantage: "15+ awards"
    }
  ];

  const marketPosition = [
    { metric: "Innovation", ourScore: 95, competitor: 70 },
    { metric: "Pricing", ourScore: 88, competitor: 65 },
    { metric: "Support", ourScore: 92, competitor: 75 },
    { metric: "Scalability", ourScore: 90, competitor: 60 },
    { metric: "Security", ourScore: 96, competitor: 80 }
  ];

  const getPricingColor = (pricing: string) => {
    switch (pricing) {
      case "High":
        return "bg-red-100 text-red-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Low":
        return "bg-green-100 text-green-800";
      case "Competitive":
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
              Competitive <span className="text-acelo-orange">Analysis</span>
            </h1>
            <div className="w-16 h-1 bg-acelo-orange mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. How we compare in the market landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="brand-shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-acelo-navy">
                  <Target className="w-5 h-5 text-acelo-orange" />
                  Market Landscape
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {competitors.map((competitor, index) => (
                    <div key={index} className={`p-4 rounded-lg border-2 ${
                      competitor.name === "Our Solution" 
                        ? "border-acelo-orange bg-acelo-orange/5" 
                        : "border-gray-200 bg-gray-50"
                    }`}>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className={`font-semibold ${
                          competitor.name === "Our Solution" ? "text-acelo-orange" : "text-acelo-navy"
                        }`}>
                          {competitor.name}
                        </h4>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className={getPricingColor(competitor.pricing)}>
                            {competitor.pricing}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            ⭐ {competitor.rating}
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Market Share:</span>
                          <span className="font-medium">{competitor.marketShare}%</span>
                        </div>
                        <Progress value={competitor.marketShare} className="h-2" />
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <span className="font-medium text-green-600">Strengths:</span>
                          <ul className="text-muted-foreground mt-1">
                            {competitor.strengths.map((strength, idx) => (
                              <li key={idx} className="text-xs">• {strength}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <span className="font-medium text-red-600">Weaknesses:</span>
                          <ul className="text-muted-foreground mt-1">
                            {competitor.weaknesses.map((weakness, idx) => (
                              <li key={idx} className="text-xs">• {weakness}</li>
                            ))}
                          </ul>
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
                  <TrendingUp className="w-5 h-5 text-acelo-orange" />
                  Competitive Positioning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {marketPosition.map((metric, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-acelo-navy">{metric.metric}</span>
                        <div className="flex items-center space-x-2 text-sm">
                          <span className="text-acelo-orange font-semibold">Us: {metric.ourScore}%</span>
                          <span className="text-muted-foreground">Avg: {metric.competitor}%</span>
                        </div>
                      </div>
                      <div className="relative">
                        <Progress value={metric.competitor} className="h-3 bg-gray-200" />
                        <div 
                          className="absolute top-0 left-0 h-3 bg-acelo-orange rounded-full transition-all duration-500"
                          style={{ width: `${metric.ourScore}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {differentiators.map((diff, index) => (
              <Card key={index} className="brand-shadow-card text-center hover:brand-shadow-elevated transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-acelo-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <diff.icon className="w-6 h-6 text-acelo-orange" />
                  </div>
                  <h3 className="text-lg font-semibold text-acelo-navy mb-2">{diff.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{diff.description}</p>
                  <Badge variant="secondary" className="bg-acelo-orange text-white">
                    {diff.advantage}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="brand-shadow-card bg-gradient-to-br from-acelo-navy to-acelo-navy/90 text-white">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <p className="text-white/90 max-w-3xl mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. We deliver superior value through innovation, performance, and customer focus.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-acelo-orange mb-2">40%</div>
                  <div className="text-sm text-white/80">Better Performance</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-acelo-orange mb-2">60%</div>
                  <div className="text-sm text-white/80">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-acelo-orange mb-2">98%</div>
                  <div className="text-sm text-white/80">Client Satisfaction</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};