import { CheckCircle, Clock, Users, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const AgendaSlide = () => {
  const agendaItems = [
    {
      icon: Users,
      title: "Introductions",
      duration: "10 min",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      icon: Target,
      title: "Problem & Solution",
      duration: "20 min",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      icon: CheckCircle,
      title: "Product Demo",
      duration: "25 min",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {
      icon: Clock,
      title: "Implementation & Next Steps",
      duration: "15 min",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse."
    }
  ];

  return (
    <div className="slide-container">
      <div className="slide-content">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="heading-title text-acelo-navy mb-4">
              Today's <span className="text-acelo-orange">Agenda</span>
            </h1>
            <div className="w-16 h-1 bg-acelo-orange mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {agendaItems.map((item, index) => (
              <Card key={index} className="brand-shadow-card hover:brand-shadow-elevated transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-acelo-orange/10 rounded-lg flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-acelo-orange" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-acelo-navy">{item.title}</h3>
                        <Badge variant="secondary" className="bg-acelo-navy text-white">
                          {item.duration}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Total Duration: <span className="font-semibold text-acelo-navy">70 minutes</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};