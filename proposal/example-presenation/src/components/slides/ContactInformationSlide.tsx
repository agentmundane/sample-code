import { Mail, Phone, MapPin, Globe, Linkedin, Calendar, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const ContactInformationSlide = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      primary: "john@agentmundane.com",
      secondary: "info@agentmundane.com",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      icon: Phone,
      title: "Phone",
      primary: "+1 (555) 123-4567",
      secondary: "+1 (555) 123-4568",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna."
    },
    {
      icon: MapPin,
      title: "Office",
      primary: "123 Business Ave",
      secondary: "Suite 456, City, State 12345",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {
      icon: Globe,
      title: "Website",
      primary: "www.agentmundane.com",
      secondary: "blog.agentmundane.com",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse."
    }
  ];

  const teamContacts = [
    {
      name: "John Smith",
      role: "Project Manager",
      initials: "JS",
      email: "john@agentmundane.com",
      phone: "+1 (555) 123-4567",
      availability: "Mon-Fri, 9AM-6PM EST"
    },
    {
      name: "Sarah Johnson",
      role: "Technical Lead",
      initials: "SJ",
      email: "sarah@agentmundane.com",
      phone: "+1 (555) 234-5678",
      availability: "Mon-Fri, 8AM-5PM EST"
    },
    {
      name: "Michael Chen",
      role: "Solutions Architect",
      initials: "MC",
      email: "michael@agentmundane.com",
      phone: "+1 (555) 345-6789",
      availability: "Mon-Fri, 10AM-7PM EST"
    }
  ];

  const quickActions = [
    {
      icon: Calendar,
      title: "Schedule Meeting",
      description: "Book a time that works for you",
      action: "calendly.com/agentmundane"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our team now",
      action: "Available 24/7"
    },
    {
      icon: Mail,
      title: "Send Message",
      description: "Send us your questions",
      action: "Response within 2 hours"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM EST" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM EST" },
    { day: "Sunday", hours: "Closed" },
    { day: "Emergency Support", hours: "24/7 Available" }
  ];

  return (
    <div className="slide-container">
      <div className="slide-content">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="heading-title text-acelo-navy mb-4">
              Contact <span className="text-acelo-orange">Information</span>
            </h1>
            <div className="w-16 h-1 bg-acelo-orange mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. We're here to help and answer any questions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card key={index} className="brand-shadow-card text-center hover:brand-shadow-elevated transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-acelo-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-6 h-6 text-acelo-orange" />
                  </div>
                  <h3 className="text-lg font-semibold text-acelo-navy mb-3">{method.title}</h3>
                  <div className="space-y-1 mb-3">
                    <div className="font-medium text-acelo-navy">{method.primary}</div>
                    <div className="text-sm text-muted-foreground">{method.secondary}</div>
                  </div>
                  <p className="text-xs text-muted-foreground">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="brand-shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-acelo-navy mb-6">Direct Team Contacts</h3>
                <div className="space-y-4">
                  {teamContacts.map((contact, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <Avatar className="w-12 h-12 border-2 border-acelo-orange">
                        <AvatarFallback className="text-white font-semibold bg-acelo-orange">
                          {contact.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-acelo-navy">{contact.name}</h4>
                        </div>
                        <div className="text-sm text-acelo-orange mb-2">{contact.role}</div>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <Mail className="w-3 h-3" />
                            <span>{contact.email}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="w-3 h-3" />
                            <span>{contact.phone}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-3 h-3" />
                            <span>{contact.availability}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="brand-shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-acelo-navy mb-6">Quick Actions</h3>
                <div className="space-y-4 mb-6">
                  {quickActions.map((action, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 border border-acelo-orange/20 rounded-lg hover:bg-acelo-orange/5 transition-colors">
                      <div className="w-10 h-10 bg-acelo-orange/10 rounded-lg flex items-center justify-center">
                        <action.icon className="w-5 h-5 text-acelo-orange" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-acelo-navy">{action.title}</h4>
                        <p className="text-sm text-muted-foreground mb-1">{action.description}</p>
                        <p className="text-xs text-acelo-orange font-medium">{action.action}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-acelo-navy">Office Hours</h4>
                  {officeHours.map((hours, index) => (
                    <div key={index} className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">{hours.day}</span>
                      <span className="font-medium text-acelo-navy">{hours.hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="brand-shadow-card bg-gradient-to-br from-acelo-navy to-acelo-navy/90 text-white">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
                <p className="text-white/90 max-w-3xl mx-auto mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ready to start your transformation journey?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <Button className="bg-acelo-orange hover:bg-acelo-orange/90 text-white px-8 py-3">
                    Schedule a Call
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-acelo-navy px-8 py-3">
                    Send Message
                  </Button>
                </div>
                <div className="flex items-center justify-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Linkedin className="w-5 h-5 text-acelo-orange" />
                    <span className="text-white/80">linkedin.com/company/agentmundane</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-5 h-5 text-acelo-orange" />
                    <span className="text-white/80">www.agentmundane.com</span>
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