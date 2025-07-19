import { useState } from "react";
import { PresentationLayout } from "./PresentationLayout";
import { TitleSlide } from "./slides/TitleSlide";
import { AgendaSlide } from "./slides/AgendaSlide";
import { AboutUsSlide } from "./slides/AboutUsSlide";
import { ProblemStatementSlide } from "./slides/ProblemStatementSlide";
import { MarketAnalysisSlide } from "./slides/MarketAnalysisSlide";
import { OurSolutionSlide } from "./slides/OurSolutionSlide";
import { ProductDemoSlide } from "./slides/ProductDemoSlide";
import { CaseStudiesSlide } from "./slides/CaseStudiesSlide";
import { ROIAnalysisSlide } from "./slides/ROIAnalysisSlide";
import { ImplementationTimelineSlide } from "./slides/ImplementationTimelineSlide";
import { PricingOverviewSlide } from "./slides/PricingOverviewSlide";
import { RiskAssessmentSlide } from "./slides/RiskAssessmentSlide";
import { TeamIntroductionSlide } from "./slides/TeamIntroductionSlide";
import { TechnologyStackSlide } from "./slides/TechnologyStackSlide";
import { CompetitiveAnalysisSlide } from "./slides/CompetitiveAnalysisSlide";
import { NextStepsSlide } from "./slides/NextStepsSlide";
import { FAQSlide } from "./slides/FAQSlide";
import { ContactInformationSlide } from "./slides/ContactInformationSlide";
import { AppendixSlide } from "./slides/AppendixSlide";
import { ThankYouSlide } from "./slides/ThankYouSlide";

const slideComponents = {
  TitleSlide,
  AgendaSlide,
  AboutUsSlide,
  ProblemStatementSlide,
  MarketAnalysisSlide,
  OurSolutionSlide,
  ProductDemoSlide,
  CaseStudiesSlide,
  ROIAnalysisSlide,
  ImplementationTimelineSlide,
  PricingOverviewSlide,
  RiskAssessmentSlide,
  TeamIntroductionSlide,
  TechnologyStackSlide,
  CompetitiveAnalysisSlide,
  NextStepsSlide,
  FAQSlide,
  ContactInformationSlide,
  AppendixSlide,
  ThankYouSlide,
};

export const PresentationApp = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const renderSlide = (slideNumber: number) => {
    const slideComponentNames = Object.keys(slideComponents);
    const componentName = slideComponentNames[slideNumber - 1];
    const SlideComponent = slideComponents[componentName as keyof typeof slideComponents];
    
    return SlideComponent ? <SlideComponent /> : <div>Slide not found</div>;
  };

  return (
    <PresentationLayout
      currentSlide={currentSlide}
      onSlideChange={setCurrentSlide}
    >
      {renderSlide(currentSlide)}
    </PresentationLayout>
  );
};