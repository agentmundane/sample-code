import { User, Mail, Phone, Linkedin, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export const TeamIntroductionSlide = () => {
  const teamMembers = [
    {
      name: "John Gordon",
      role: "AI Solutions Architect",
      initials: "JG",
      experience: "8 years",
      specialties: ["n8n Workflows", "OpenAI Integration", "RAG Systems"],
      email: "john@agentmundane.com",
      phone: "+1 (555) 123-4567",
      bio: "Expert in designing and implementing intelligent automation systems. Specializes in creating custom AI agents that transform business operations."
    },
    {
      name: "Sarah Kim",
      role: "Prompt Engineer",
      initials: "SK",
      experience: "5 years",
      specialties: ["LLM Optimization", "Agent Behaviors", "AI Training"],
      email: "sarah@agentmundane.com",
      phone: "+1 (555) 234-5678",
      bio: "Specialist in crafting optimal prompts and training AI agents to deliver precise, context-aware responses for business applications."
    },
    {
      name: "Michael Torres",
      role: "n8n Developer",
      initials: "MT",
      experience: "6 years",
      specialties: ["Workflow Automation", "API Integration", "Data Processing"],
      email: "michael@agentmundane.com",
      phone: "+1 (555) 345-6789",
      bio: "Master of n8n workflow automation with expertise in connecting diverse systems and creating seamless data pipelines."
    },
    {
      name: "Elena Rodriguez",
      role: "Implementation Specialist",
      initials: "ER",
      experience: "7 years",
      specialties: ["Change Management", "User Training", "Process Optimization"],
      email: "elena@agentmundane.com",
      phone: "+1 (555) 456-7890",
      bio: "Ensures smooth deployment of AI automation solutions with comprehensive training and ongoing support for client teams."
    }
  ];

  const teamStats = [
    { label: "AI Automation Experience", value: "26 years" },
    { label: "Workflows Deployed", value: "200+" },
    { label: "Client Success Rate", value: "95%" },
    { label: "AI Certifications", value: "15+" }
  ];

  return (
    <div className="slide-container">
      <div className="slide-content">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="heading-title text-acelo-navy mb-4">
              Meet Our <span className="text-acelo-orange">Team</span>
            </h1>
            <div className="w-16 h-1 bg-acelo-orange mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our team of AI automation specialists brings deep expertise in n8n, OpenAI, and intelligent workflow design. We're dedicated to transforming your business operations through cutting-edge AI solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {teamMembers.map((member, index) => (
              <Card key={index} className="brand-shadow-card hover:brand-shadow-elevated transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-16 h-16 border-2 border-acelo-orange">
                      <AvatarFallback className="text-white font-semibold text-lg bg-acelo-orange">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-acelo-navy">{member.name}</h3>
                        <Badge variant="outline" className="text-acelo-orange border-acelo-orange">
                          {member.experience}
                        </Badge>
                      </div>
                      <div className="text-acelo-orange font-medium mb-3">{member.role}</div>
                      <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                      
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-acelo-navy text-sm mb-2">Specialties</h4>
                          <div className="flex flex-wrap gap-1">
                            {member.specialties.map((specialty, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs bg-acelo-navy/10 text-acelo-navy">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Mail className="w-4 h-4" />
                            <span>{member.email}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Phone className="w-4 h-4" />
                            <span>{member.phone}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="brand-shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-acelo-navy mb-6">Team Statistics</h3>
                <div className="grid grid-cols-2 gap-4">
                  {teamStats.map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-acelo-orange mb-2">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="brand-shadow-card bg-gradient-to-br from-acelo-navy to-acelo-navy/90 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Why Our Team?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Award className="w-5 h-5 text-acelo-orange mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-acelo-orange">Proven Expertise</h4>
                      <p className="text-white/90 text-sm">Deep expertise in AI automation with proven track record in enterprise deployments.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <User className="w-5 h-5 text-acelo-orange mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-acelo-orange">Dedicated Support</h4>
                      <p className="text-white/90 text-sm">Full-service support from planning through implementation and ongoing optimization.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Linkedin className="w-5 h-5 text-acelo-orange mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-acelo-orange">Industry Recognition</h4>
                      <p className="text-white/90 text-sm">Recognized leaders in the AI automation space with industry certifications and awards.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white/10 rounded-lg">
                  <div className="text-center">
                    <div className="text-sm mb-2">Team Availability</div>
                    <div className="text-xl font-bold text-acelo-orange">Full-time Dedicated</div>
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