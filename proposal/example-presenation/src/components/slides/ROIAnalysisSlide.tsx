import { DollarSign, TrendingUp, PieChart, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const ROIAnalysisSlide = () => {
  const roiMetrics = [
    { 
      title: "Investment Recovery", 
      timeframe: "6 months", 
      percentage: 75,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    { 
      title: "Cost Savings", 
      timeframe: "12 months", 
      percentage: 150,
      description: "Sed do eiusmod tempor incididunt ut labore et dolore."
    },
    { 
      title: "Revenue Growth", 
      timeframe: "18 months", 
      percentage: 200,
      description: "Ut enim ad minim veniam, quis nostrud exercitation."
    }
  ];

  const costBreakdown = [
    { category: "Implementation", amount: "$45K", percentage: 30 },
    { category: "Training", amount: "$15K", percentage: 10 },
    { category: "Support", amount: "$30K", percentage: 20 },
    { category: "Licenses", amount: "$60K", percentage: 40 }
  ];

  const benefits = [
    { benefit: "Operational Efficiency", value: "$125K", type: "annual" },
    { benefit: "Error Reduction", value: "$35K", type: "annual" },
    { benefit: "Time Savings", value: "$85K", type: "annual" },
    { benefit: "Compliance", value: "$25K", type: "annual" }
  ];

  return (
    <div className="slide-container">
      <div className="slide-content">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="heading-title text-acelo-navy mb-4">
              ROI <span className="text-acelo-orange">Analysis</span>
            </h1>
            <div className="w-16 h-1 bg-acelo-orange mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Clear financial benefits and measurable returns.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="brand-shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-acelo-navy">
                  <TrendingUp className="w-5 h-5 text-acelo-orange" />
                  ROI Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {roiMetrics.map((metric, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-acelo-navy">{metric.title}</span>
                        <span className="text-sm text-acelo-orange font-semibold">{metric.percentage}%</span>
                      </div>
                      <Progress value={Math.min(metric.percentage, 100)} className="h-3" />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{metric.description}</span>
                        <span>{metric.timeframe}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="brand-shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-acelo-navy">
                  <PieChart className="w-5 h-5 text-acelo-orange" />
                  Cost Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {costBreakdown.map((cost, index) => (
                    <div key={index} className="p-4 rounded-lg bg-gray-50">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-acelo-navy">{cost.category}</h4>
                        <span className="text-acelo-orange font-bold">{cost.amount}</span>
                      </div>
                      <Progress value={cost.percentage} className="h-2" />
                      <div className="text-right text-xs text-muted-foreground mt-1">
                        {cost.percentage}% of total
                      </div>
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
                  <BarChart3 className="w-5 h-5 text-acelo-orange" />
                  Annual Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-sm font-medium text-acelo-navy">{benefit.benefit}</span>
                      <span className="text-lg font-bold text-green-600">{benefit.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-acelo-navy text-white rounded-lg">
                  <div className="text-center">
                    <div className="text-sm mb-2">Total Annual Savings</div>
                    <div className="text-3xl font-bold text-acelo-orange">$270K</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="brand-shadow-card bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardContent className="p-8">
                <div className="text-center">
                  <DollarSign className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-acelo-navy mb-4">Net ROI</h3>
                  <div className="text-4xl font-bold text-green-600 mb-4">180%</div>
                  <p className="text-muted-foreground mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Payback period of 8 months.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Total Investment:</span>
                      <span className="font-semibold">$150K</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>3-Year Return:</span>
                      <span className="font-semibold text-green-600">$420K</span>
                    </div>
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