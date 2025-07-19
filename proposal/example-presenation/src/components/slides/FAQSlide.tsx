import { HelpCircle, ChevronDown, Clock, DollarSign, Shield, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export const FAQSlide = () => {
  const faqCategories = [
    {
      category: "Implementation",
      icon: Clock,
      questions: [
        {
          q: "How long does the implementation take?",
          a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Typical implementation takes 8-12 weeks depending on complexity and scope. We follow a structured approach with clear milestones and regular check-ins."
        },
        {
          q: "What support do you provide during implementation?",
          a: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. We provide dedicated project management, technical support, user training, and 24/7 support during critical phases."
        },
        {
          q: "Can you integrate with our existing systems?",
          a: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Yes, we have extensive experience with enterprise integrations and provide custom API development as needed."
        }
      ]
    },
    {
      category: "Pricing & Contracts",
      icon: DollarSign,
      questions: [
        {
          q: "What's included in the pricing?",
          a: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Our pricing includes software licenses, implementation services, training, and first-year support."
        },
        {
          q: "Are there any hidden fees?",
          a: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. No hidden fees. All costs are transparent and outlined in our detailed proposal."
        },
        {
          q: "What are your payment terms?",
          a: "Deserunt mollit anim id est laborum. We offer flexible payment terms including milestone-based payments and annual subscriptions with various options."
        }
      ]
    },
    {
      category: "Security & Compliance",
      icon: Shield,
      questions: [
        {
          q: "How secure is your platform?",
          a: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem. We maintain enterprise-grade security with SOC 2, ISO 27001 compliance, and regular security audits."
        },
        {
          q: "Where is our data stored?",
          a: "Accusantium doloremque laudantium, totam rem aperiam. Data is stored in secure, compliant cloud facilities with geographic options and full encryption at rest and in transit."
        },
        {
          q: "Do you support compliance requirements?",
          a: "Eaque ipsa quae ab illo inventore veritatis et quasi architecto. Yes, we support GDPR, HIPAA, SOX, and other regulatory requirements with appropriate controls."
        }
      ]
    },
    {
      category: "Support & Training",
      icon: Users,
      questions: [
        {
          q: "What training do you provide?",
          a: "Beatae vitae dicta sunt explicabo. We provide comprehensive training including administrator training, end-user training, and ongoing education programs."
        },
        {
          q: "What support options are available?",
          a: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur. We offer 24/7 support, dedicated customer success managers, and comprehensive documentation."
        },
        {
          q: "How do you handle escalations?",
          a: "Aut odit aut fugit, sed quia consequuntur magni dolores. We have a clear escalation process with defined SLAs and direct access to senior technical teams."
        }
      ]
    }
  ];

  const quickStats = [
    { stat: "99.9%", label: "Uptime SLA" },
    { stat: "< 2hrs", label: "Response Time" },
    { stat: "24/7", label: "Support Available" },
    { stat: "98%", label: "Customer Satisfaction" }
  ];

  return (
    <div className="slide-container">
      <div className="slide-content">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="heading-title text-acelo-navy mb-4">
              Frequently Asked <span className="text-acelo-orange">Questions</span>
            </h1>
            <div className="w-16 h-1 bg-acelo-orange mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Common questions and detailed answers.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {quickStats.map((stat, index) => (
              <Card key={index} className="brand-shadow-card text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-acelo-orange mb-2">{stat.stat}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="brand-shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-acelo-orange/10 rounded-lg flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-acelo-orange" />
                    </div>
                    <h3 className="text-xl font-semibold text-acelo-navy">{category.category}</h3>
                  </div>
                  
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`}>
                        <AccordionTrigger className="text-left text-acelo-navy hover:text-acelo-orange">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="brand-shadow-card bg-gradient-to-br from-acelo-navy to-acelo-navy/90 text-white mt-12">
            <CardContent className="p-8">
              <div className="text-center">
                <HelpCircle className="w-16 h-16 text-acelo-orange mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
                <p className="text-white/90 max-w-3xl mx-auto mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Our team is here to help with any additional questions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-acelo-orange mb-2">Schedule a Call</div>
                    <p className="text-white/80 text-sm">Book a personalized consultation</p>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-acelo-orange mb-2">Email Support</div>
                    <p className="text-white/80 text-sm">Get answers via email</p>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-acelo-orange mb-2">Live Demo</div>
                    <p className="text-white/80 text-sm">See the platform in action</p>
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