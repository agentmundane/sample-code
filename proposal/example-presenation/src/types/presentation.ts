export interface SlideData {
  id: number;
  title: string;
  subtitle?: string;
  component: string;
}

export interface Presenter {
  name: string;
  initials: string;
  avatar?: string;
}

export const SLIDE_DATA: SlideData[] = [
  { id: 1, title: "Title Slide", subtitle: "Company Introduction", component: "TitleSlide" },
  { id: 2, title: "Agenda", subtitle: "Meeting Overview", component: "AgendaSlide" },
  { id: 3, title: "About Us", subtitle: "Company Overview", component: "AboutUsSlide" },
  { id: 4, title: "Problem Statement", subtitle: "Industry Challenges", component: "ProblemStatementSlide" },
  { id: 5, title: "Market Analysis", subtitle: "Industry Trends", component: "MarketAnalysisSlide" },
  { id: 6, title: "Our Solution", subtitle: "Value Proposition", component: "OurSolutionSlide" },
  { id: 7, title: "Product Demo", subtitle: "Key Features", component: "ProductDemoSlide" },
  { id: 8, title: "Case Studies", subtitle: "Success Stories", component: "CaseStudiesSlide" },
  { id: 9, title: "ROI Analysis", subtitle: "Financial Benefits", component: "ROIAnalysisSlide" },
  { id: 10, title: "Implementation Timeline", subtitle: "Project Phases", component: "ImplementationTimelineSlide" },
  { id: 11, title: "Pricing Overview", subtitle: "Package Options", component: "PricingOverviewSlide" },
  { id: 12, title: "Risk Assessment", subtitle: "Mitigation Strategies", component: "RiskAssessmentSlide" },
  { id: 13, title: "Team Introduction", subtitle: "Key Personnel", component: "TeamIntroductionSlide" },
  { id: 14, title: "Technology Stack", subtitle: "Technical Architecture", component: "TechnologyStackSlide" },
  { id: 15, title: "Competitive Analysis", subtitle: "Market Positioning", component: "CompetitiveAnalysisSlide" },
  { id: 16, title: "Next Steps", subtitle: "Action Items", component: "NextStepsSlide" },
  { id: 17, title: "FAQ", subtitle: "Common Questions", component: "FAQSlide" },
  { id: 18, title: "Contact Information", subtitle: "How to Reach Us", component: "ContactInformationSlide" },
  { id: 19, title: "Appendix", subtitle: "Additional Resources", component: "AppendixSlide" },
  { id: 20, title: "Thank You", subtitle: "Call to Action", component: "ThankYouSlide" }
];

export const PRESENTERS: Presenter[] = [
  { name: "John Smith", initials: "JS" },
  { name: "Jane Doe", initials: "JD" }
];