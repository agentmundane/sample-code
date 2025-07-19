import { Check, Star, Zap, Crown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const PricingOverviewSlide = () => {
  const pricingTiers = [
    {
      name: "Workflow Starter",
      icon: Zap,
      price: "$2,500",
      period: "one-time setup",
      description: "Perfect for small businesses ready to automate their first processes.",
      features: [
        "3 automated workflows",
        "Basic AI agent setup",
        "n8n workflow design",
        "Email & chat integration",
        "30-day support included"
      ],
      popular: false
    },
    {
      name: "Custom Agent Build",
      icon: Star,
      price: "$8,500",
      period: "complete package",
      description: "Comprehensive AI agent solution with advanced capabilities and training.",
      features: [
        "Full Second Brain agent",
        "RAG knowledge system",
        "Voice AI integration",
        "Advanced workflow automation",
        "90-day support & training",
        "Ongoing optimization"
      ],
      popular: true
    },
    {
      name: "Enterprise Strategy",
      icon: Crown,
      price: "Custom",
      period: "contact us",
      description: "Full-scale AI transformation with dedicated team and custom development.",
      features: [
        "Unlimited AI agents",
        "Enterprise integrations",
        "Custom development",
        "Dedicated project manager",
        "24/7 priority support",
        "Quarterly strategy reviews"
      ],
      popular: false
    }
  ];

  const addOns = [
    { name: "Team Training Workshop", price: "$1,500", description: "Comprehensive 2-day training on AI automation best practices" },
    { name: "Additional AI Agents", price: "$1,500/agent", description: "Custom AI agents for specialized business functions" },
    { name: "Priority Support", price: "$500/month", description: "Dedicated support with 4-hour response time" },
    { name: "System Integration", price: "$2,500", description: "Connect your existing tools and databases to AI workflows" }
  ];

  return (
    <div className="slide-container">
      <div className="slide-content">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="heading-title text-acelo-navy mb-4">
              Pricing <span className="text-acelo-orange">Overview</span>
            </h1>
            <div className="w-16 h-1 bg-acelo-orange mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transparent pricing for AI automation solutions that deliver immediate value. Choose the package that matches your automation goals and scale as you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`brand-shadow-card hover:brand-shadow-elevated transition-all duration-300 ${
                tier.popular ? 'ring-2 ring-acelo-orange relative' : ''
              }`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-acelo-orange text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-acelo-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <tier.icon className="w-8 h-8 text-acelo-orange" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-acelo-navy">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold text-acelo-orange">{tier.price}</div>
                  <div className="text-sm text-muted-foreground">{tier.period}</div>
                  <p className="text-sm text-muted-foreground mt-2">{tier.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${tier.popular ? 'bg-acelo-orange hover:bg-acelo-orange/90' : 'bg-acelo-navy hover:bg-acelo-navy/90'} text-white`}
                  >
                    {tier.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="brand-shadow-card">
              <CardHeader>
                <CardTitle className="text-acelo-navy">Add-on Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {addOns.map((addon, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-acelo-navy">{addon.name}</h4>
                        <p className="text-sm text-muted-foreground">{addon.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-acelo-orange">{addon.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="brand-shadow-card bg-gradient-to-br from-acelo-navy to-acelo-navy/90 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-acelo-orange mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-acelo-orange">No Hidden Fees</h4>
                      <p className="text-white/90 text-sm">Transparent pricing with everything included upfront. No surprise charges.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-acelo-orange mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-acelo-orange">Flexible Terms</h4>
                      <p className="text-white/90 text-sm">Start small and scale up. Pay only for what you need when you need it.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-acelo-orange mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-acelo-orange">Money-back Guarantee</h4>
                      <p className="text-white/90 text-sm">100% satisfaction guarantee. If automation doesn't deliver value, we'll refund your investment.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white/10 rounded-lg">
                  <div className="text-center">
                    <div className="text-sm mb-2">Special Offer</div>
                    <div className="text-xl font-bold text-acelo-orange">Free consultation</div>
                    <div className="text-xs text-white/70">Limited time offer</div>
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