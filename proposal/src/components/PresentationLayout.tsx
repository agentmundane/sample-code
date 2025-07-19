import { useState } from "react";
import { Menu, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { SLIDE_DATA } from "@/types/presentation";

interface PresentationLayoutProps {
  currentSlide: number;
  onSlideChange: (slideNumber: number) => void;
  children: React.ReactNode;
}

export const PresentationLayout = ({ 
  currentSlide, 
  onSlideChange, 
  children 
}: PresentationLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [desktopSidebarCollapsed, setDesktopSidebarCollapsed] = useState(false);

  const NavigationContent = () => (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <h2 className="font-heading font-semibold text-lg">AgentMundane Proposal</h2>
        <p className="text-sm text-muted-foreground">Interactive Template</p>
      </div>
      
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {SLIDE_DATA.map((slide) => (
          <button
            key={slide.id}
            onClick={() => {
              onSlideChange(slide.id);
              setSidebarOpen(false);
            }}
            className={cn(
              "w-full flex items-start gap-3 p-3 rounded-lg text-left transition-colors hover:bg-muted",
              currentSlide === slide.id 
                ? "bg-primary text-primary-foreground" 
                : "text-foreground"
            )}
          >
            <Badge variant={currentSlide === slide.id ? "secondary" : "outline"}>
              {slide.id}
            </Badge>
            <div className="flex-1 min-w-0">
              <div className="font-medium truncate">{slide.title}</div>
              <div className={cn(
                "text-sm truncate",
                currentSlide === slide.id 
                  ? "text-primary-foreground/80" 
                  : "text-muted-foreground"
              )}>
                {slide.subtitle}
              </div>
            </div>
          </button>
        ))}
      </nav>
    </div>
  );

  const goToPrevious = () => {
    if (currentSlide > 1) {
      onSlideChange(currentSlide - 1);
    }
  };

  const goToNext = () => {
    if (currentSlide < SLIDE_DATA.length) {
      onSlideChange(currentSlide + 1);
    }
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className={`hidden lg:flex lg:flex-col border-r bg-muted/30 transition-all duration-300 ${
        desktopSidebarCollapsed ? 'lg:w-0 lg:overflow-hidden' : 'lg:w-80'
      }`}>
        {!desktopSidebarCollapsed && <NavigationContent />}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navigation */}
        <header className="flex items-center justify-between p-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex items-center gap-2">
            {/* Mobile Menu Toggle */}
            <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 p-0">
                <NavigationContent />
              </SheetContent>
            </Sheet>

            {/* Desktop Menu Toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="hidden lg:flex"
              onClick={() => setDesktopSidebarCollapsed(!desktopSidebarCollapsed)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-acelo-orange"></div>
              <span className="font-heading font-semibold hidden sm:inline">AgentMundane Proposal</span>
            </div>
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={goToPrevious}
              disabled={currentSlide === 1}
              className="hidden sm:flex"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              disabled={currentSlide === 1}
              className="sm:hidden"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Badge variant="outline" className="px-3 py-1">
              {currentSlide} / {SLIDE_DATA.length}
            </Badge>

            <Button
              variant="ghost"
              size="sm"
              onClick={goToNext}
              disabled={currentSlide === SLIDE_DATA.length}
              className="hidden sm:flex"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              disabled={currentSlide === SLIDE_DATA.length}
              className="sm:hidden"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </header>

        {/* Slide Content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};