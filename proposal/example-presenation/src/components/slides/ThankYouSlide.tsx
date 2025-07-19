import { Heart, Star, ArrowRight, Mail, Phone, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const ThankYouSlide = () => {
  const nextSteps = [
    {
      step: "Follow-up Meeting",
      description: "Schedule a personalized consultation to discuss your automation goals.",
      timeframe: "Within 48 hours"
    },
    {
      step: "Detailed Proposal",
      description: "Receive a comprehensive automation strategy tailored to your business.",
      timeframe: "Within 3 days"
    },
    {
      step: "Technical Review",
      description: "Technical assessment and final approval before implementation begins.",
      timeframe: "Next week"
    }
  ];

  const contactInfo = [
    {
      method: "Email",
      value: "john@agentmundane.com",
      icon: Mail,
      description: "Send us your questions"
    },
    {
      method: "Phone",
      value: "+1 (555) 123-4567",
      icon: Phone,
      description: "Call us directly"
    },
    {
      method: "Schedule",
      value: "calendly.com/agentmundane",
      icon: Calendar,
      description: "Book a meeting"
    }
  ];

  const testimonial = {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. This partnership has been transformational for our business.",
    author: "Jane Smith",
    position: "CEO, TechCorp Industries",
    initials: "JS"
  };

  return (
    <div className="slide-container">
      <div className="slide-content">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-acelo-orange/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Heart className="w-12 h-12 text-acelo-orange" />
            </div>
            <h1 className="heading-display text-acelo-navy mb-6">
              Thank You
            </h1>
            <div className="w-24 h-1 bg-acelo-orange mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Thank you for your interest in transforming your business with AI automation. We appreciate your time and look forward to partnering with you on this exciting journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="brand-shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-acelo-navy mb-6">What Happens Next?</h3>
                <div className="space-y-6">
                  {nextSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-acelo-orange rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-acelo-navy mb-1">{step.step}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{step.description}</p>
                        <div className="text-xs text-acelo-orange font-medium">{step.timeframe}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="brand-shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-acelo-navy mb-6">Get In Touch</h3>
                <div className="space-y-4 mb-6">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-acelo-orange/10 rounded-lg flex items-center justify-center">
                        <contact.icon className="w-5 h-5 text-acelo-orange" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-acelo-navy">{contact.method}</h4>
                        <div className="text-sm text-acelo-orange font-medium">{contact.value}</div>
                        <p className="text-xs text-muted-foreground">{contact.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-acelo-orange hover:bg-acelo-orange/90 text-white flex-1">
                    Schedule Follow-up
                  </Button>
                  <Button variant="outline" className="border-acelo-orange text-acelo-orange hover:bg-acelo-orange hover:text-white flex-1">
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="brand-shadow-card bg-gradient-to-r from-acelo-navy to-acelo-navy/90 text-white mb-12">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-acelo-orange fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg italic text-white/90 max-w-4xl mx-auto mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <Avatar className="w-12 h-12 border-2 border-acelo-orange">
                    <AvatarFallback className="text-white font-semibold bg-acelo-orange">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <div className="font-semibold text-acelo-orange">{testimonial.author}</div>
                    <div className="text-sm text-white/80">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="brand-shadow-card bg-gradient-to-br from-acelo-orange to-acelo-orange/90 text-white">
            <CardContent className="p-12">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
                <p className="text-white/90 text-lg max-w-3xl mx-auto mb-8">
                  Start your AI automation journey today and join the businesses already transforming their operations with intelligent workflows. Let's make it happen together.
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-acelo-orange hover:bg-white/90 px-8 py-4 text-lg font-semibold"
                >
                  Let's Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold mb-2">Fast Implementation</div>
                    <p className="text-white/80 text-sm">Get up and running quickly</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-2">Expert Support</div>
                    <p className="text-white/80 text-sm">Dedicated team to guide you</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold mb-2">Proven Results</div>
                    <p className="text-white/80 text-sm">Success stories speak for themselves</p>
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