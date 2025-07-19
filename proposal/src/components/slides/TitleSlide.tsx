import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { PRESENTERS } from "@/types/presentation";

export const TitleSlide = () => {
  return (
    <div className="slide-container brand-gradient-navy text-white">
      <div className="slide-content flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="heading-display leading-tight">
              AI Automation Strategy{" "}
              <span className="text-acelo-orange">Proposal</span>
            </h1>
            <div className="w-16 h-1 bg-acelo-orange mx-auto"></div>
          </div>

          {/* Subtitle */}
          <div className="space-y-2">
            <h2 className="heading-section text-white/90">
              Transforming Business Operations with Intelligent AI Agents
            </h2>
          </div>

          {/* Tagline */}
          <div className="mt-12">
            <p className="text-xl text-white/80 italic font-light">
              Empowering Business Through AI Automation
            </p>
          </div>

          {/* Presenters */}
          <div className="flex justify-center items-center gap-8 mt-16">
            {PRESENTERS.map((presenter) => (
              <div key={presenter.name} className="flex flex-col items-center space-y-3">
                 <Avatar className="w-16 h-16 border-2 border-acelo-orange">
                   <AvatarFallback 
                     className={`text-white font-semibold text-lg ${
                       presenter.initials === 'JS' 
                         ? 'bg-acelo-orange' 
                         : 'bg-white/20 backdrop-blur'
                     }`}
                   >
                    {presenter.initials}
                  </AvatarFallback>
                </Avatar>
                <span className="text-white font-medium">{presenter.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};