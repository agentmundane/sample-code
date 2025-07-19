import { Play, Monitor, Smartphone, Tablet, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const ProductDemoSlide = () => {
  const features = [
    {
      title: "Dashboard Overview",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Comprehensive analytics at your fingertips.",
      rating: 4.9
    },
    {
      title: "Real-time Monitoring",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Live data streaming.",
      rating: 4.8
    },
    {
      title: "Automated Workflows",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
      rating: 4.9
    }
  ];

  const platforms = [
    { icon: Monitor, name: "Desktop", status: "Available" },
    { icon: Tablet, name: "Tablet", status: "Available" },
    { icon: Smartphone, name: "Mobile", status: "Available" }
  ];

  return (
    <div className="slide-container">
      <div className="slide-content">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="heading-title text-acelo-navy mb-4">
              Product <span className="text-acelo-orange">Demo</span>
            </h1>
            <div className="w-16 h-1 bg-acelo-orange mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Experience our solution in action.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="brand-shadow-card hover:brand-shadow-elevated transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-acelo-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="w-8 h-8 text-acelo-orange" />
                    </div>
                    <h3 className="text-xl font-semibold text-acelo-navy mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                    <div className="flex items-center justify-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold text-acelo-navy">{feature.rating}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="brand-shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-acelo-navy mb-6">Multi-Platform Access</h3>
                <div className="space-y-4">
                  {platforms.map((platform, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <platform.icon className="w-6 h-6 text-acelo-orange" />
                        <span className="font-medium text-acelo-navy">{platform.name}</span>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {platform.status}
                      </Badge>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Access from any device, anywhere.
                </p>
              </CardContent>
            </Card>

            <Card className="brand-shadow-card bg-gradient-to-br from-acelo-navy to-acelo-navy/90 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Live Demo</h3>
                <div className="aspect-video bg-white/10 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-acelo-orange mx-auto mb-4" />
                    <p className="text-white/90">Click to start interactive demo</p>
                  </div>
                </div>
                <Button className="w-full bg-acelo-orange hover:bg-acelo-orange/90 text-white">
                  Start Interactive Demo
                </Button>
                <p className="text-xs text-white/70 mt-2 text-center">
                  Demo duration: 3 minutes
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};