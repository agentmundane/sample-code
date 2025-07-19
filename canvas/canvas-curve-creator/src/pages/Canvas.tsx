import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import html2canvas from 'html2canvas';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Save } from 'lucide-react';
import { StickyNote } from '@/components/StickyNote';
import { CanvasSection } from '@/components/CanvasSection';
import { useToast } from '@/hooks/use-toast';

interface CanvasData {
  name: string;
  customerJobs: string[];
  customerPains: string[];
  customerGains: string[];
  products: string[];
  painRelievers: string[];
  gainCreators: string[];
}

const Canvas = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const canvasRef = useRef<HTMLDivElement>(null);
  const [canvasData, setCanvasData] = useState<CanvasData>({
    name: '',
    customerJobs: [],
    customerPains: [],
    customerGains: [],
    products: [],
    painRelievers: [],
    gainCreators: []
  });

  useEffect(() => {
    if (!id) return;
    
    const stored = localStorage.getItem(`strategy_canvas_${id}`);
    if (stored) {
      setCanvasData(JSON.parse(stored));
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  const saveCanvas = () => {
    if (!id) return;
    
    localStorage.setItem(`strategy_canvas_${id}`, JSON.stringify(canvasData));
    
    // Update canvas metadata
    const canvases = JSON.parse(localStorage.getItem('strategy_canvases') || '[]');
    const updatedCanvases = canvases.map((c: { id: string; updatedAt: string }) => 
      c.id === id ? { ...c, updatedAt: new Date().toISOString() } : c
    );
    localStorage.setItem('strategy_canvases', JSON.stringify(updatedCanvases));
    
    toast({
      title: "Canvas saved",
      description: "Your changes have been saved successfully.",
    });
  };

  const updateSection = (section: keyof CanvasData, items: string[]) => {
    setCanvasData(prev => {
      const newData = { ...prev, [section]: items };
      
      // Auto-save changes to localStorage
      if (id) {
        localStorage.setItem(`strategy_canvas_${id}`, JSON.stringify(newData));
        
        // Update canvas metadata
        const canvases = JSON.parse(localStorage.getItem('strategy_canvases') || '[]');
        const updatedCanvases = canvases.map((c: { id: string; updatedAt: string }) => 
          c.id === id ? { ...c, updatedAt: new Date().toISOString() } : c
        );
        localStorage.setItem('strategy_canvases', JSON.stringify(updatedCanvases));
      }
      
      return newData;
    });
  };

  const exportCanvas = async () => {
    if (!canvasRef.current) return;

    try {
      toast({
        title: "Generating export...",
        description: "Please wait while we create your high-quality image.",
      });

      // Use html2canvas to capture the visual canvas
      const canvas = await html2canvas(canvasRef.current, {
        scale: 2, // Higher resolution
        backgroundColor: '#ffffff',
        useCORS: true,
        allowTaint: true,
        height: canvasRef.current.scrollHeight,
        width: canvasRef.current.scrollWidth,
        scrollX: 0,
        scrollY: 0,
        windowWidth: canvasRef.current.scrollWidth,
        windowHeight: canvasRef.current.scrollHeight,
      });

      // Convert to blob and download
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.download = `${canvasData.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_strategy_canvas.png`;
          link.href = url;
          link.click();
          URL.revokeObjectURL(url);

          toast({
            title: "Canvas exported successfully!",
            description: "Your high-quality Strategy Canvas has been downloaded.",
          });
        }
      }, 'image/png', 1.0);

    } catch (error) {
      toast({
        title: "Export failed",
        description: "There was an error exporting your canvas. Please try again.",
        variant: "destructive"
      });
    }
  };

  if (!canvasData.name) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile-Optimized Header */}
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="container mx-auto px-3 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate('/')}
                className="gap-1 sm:gap-2 shrink-0 px-2 sm:px-4"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Dashboard</span>
              </Button>
              <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center shrink-0">
                <img src="/agentmundanetransparent.png" alt="AgentMundane" className="w-full h-full object-contain" />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-sm sm:text-xl font-semibold truncate">{canvasData.name}</h1>
                <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">Strategy Canvas</p>
              </div>
            </div>
            <div className="flex gap-1 sm:gap-2 shrink-0">
              <Button variant="outline" onClick={saveCanvas} className="gap-1 sm:gap-2 text-xs sm:text-sm px-2 sm:px-4">
                <Save className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Save</span>
              </Button>
              <Button onClick={exportCanvas} className="gap-1 sm:gap-2 text-xs sm:text-sm px-2 sm:px-4">
                <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Export</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-2 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
        {/* Mobile-Optimized Value Proposition Canvas */}
        <motion.div 
          ref={canvasRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-8 shadow-lg sm:shadow-xl lg:shadow-2xl border border-slate-200"
        >
          {/* Mobile-Friendly Canvas Title */}
          <div className="text-center mb-4 sm:mb-6 lg:mb-8">
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm rounded-full px-3 sm:px-4 lg:px-6 py-2 sm:py-3 shadow-lg border border-white/20">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full"></div>
              <h2 className="text-base sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Strategy Canvas
              </h2>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full"></div>
            </div>
          </div>

          {/* Mobile-First Grid Layout */}
          <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-6 xl:gap-8">
            {/* Value Map - Mobile Stacked */}
            <div className="lg:col-span-2 relative">
              {/* Background for Visual Appeal */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl lg:rounded-2xl shadow-lg transform rotate-1 opacity-20"></div>
              
              {/* Main Content Container */}
              <div className="relative bg-white rounded-xl lg:rounded-2xl shadow-lg border-2 border-primary/20 p-3 sm:p-4 lg:p-6">
                {/* Value Map Header */}
                <div className="text-center mb-4 sm:mb-6">
                  <div className="inline-flex items-center gap-1 sm:gap-2 bg-primary/10 rounded-full px-3 sm:px-4 lg:px-6 py-2 sm:py-3 mb-2 sm:mb-4">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full"></div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">Value Map</h3>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600">Your AI automation solutions</p>
                </div>

                {/* Value Map Grid - Mobile Optimized */}
                <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                  {/* Products & Services Section */}
                  <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg lg:rounded-xl p-3 sm:p-4 lg:p-6 border border-primary/20">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center shrink-0">
                        <span className="text-white font-bold text-xs sm:text-sm">P</span>
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm sm:text-base font-semibold text-primary">Products & Services</h4>
                        <p className="text-xs text-primary/70 hidden sm:block">Your AI automation solutions and offerings</p>
                      </div>
                    </div>
                    <CanvasSection
                      title=""
                      description=""
                      items={canvasData.products}
                      onUpdate={(items) => updateSection('products', items)}
                      placeholder="e.g., AI-powered customer support chatbot"
                      compact
                      noteColor="blue"
                    />
                  </div>
                  
                  {/* Pain Relievers Section */}
                  <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg lg:rounded-xl p-3 sm:p-4 lg:p-6 border border-primary/20">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center shrink-0">
                        <span className="text-white font-bold text-xs sm:text-sm">R</span>
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm sm:text-base font-semibold text-primary">Pain Relievers</h4>
                        <p className="text-xs text-primary/70 hidden sm:block">How you alleviate customer problems</p>
                      </div>
                    </div>
                    <CanvasSection
                      title=""
                      description=""
                      items={canvasData.painRelievers}
                      onUpdate={(items) => updateSection('painRelievers', items)}
                      placeholder="e.g., Eliminates time spent on repetitive tasks"
                      compact
                      noteColor="blue"
                    />
                  </div>
                  
                  {/* Gain Creators Section */}
                  <div className="bg-gradient-to-r from-primary/10 to-primary/15 rounded-lg lg:rounded-xl p-3 sm:p-4 lg:p-6 border border-primary/30">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/80 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-white font-bold text-xs sm:text-sm">C</span>
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm sm:text-base font-semibold text-primary">Gain Creators</h4>
                        <p className="text-xs text-primary/70 hidden sm:block">How you create customer benefits</p>
                      </div>
                    </div>
                    <CanvasSection
                      title=""
                      description=""
                      items={canvasData.gainCreators}
                      onUpdate={(items) => updateSection('gainCreators', items)}
                      placeholder="e.g., Increases operational efficiency by 40%"
                      compact
                      noteColor="blue"
                    />
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-4 h-4 sm:w-6 sm:h-6 bg-primary/20 rounded opacity-50"></div>
                <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-3 h-3 sm:w-4 sm:h-4 bg-primary/30 rounded opacity-40"></div>
              </div>
            </div>

            {/* Value Mapping Connections - Hidden on Mobile */}
            <div className="hidden lg:flex lg:col-span-1 items-center justify-center relative">
              <div className="relative w-full h-full">
                {/* Central connection */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent"></div>
                </div>
                
                {/* Mapping arrows */}
                <div className="absolute top-1/4 left-0 w-full flex items-center">
                  <div className="flex-1 h-px bg-gradient-to-r from-primary/30 via-primary/40 to-transparent opacity-60"></div>
                  <div className="w-2 h-2 bg-primary/40 rounded-full mx-2"></div>
                </div>
                
                <div className="absolute top-1/2 left-0 w-full flex items-center">
                  <div className="flex-1 h-px bg-gradient-to-r from-accent/30 via-accent/40 to-transparent opacity-60"></div>
                  <div className="w-2 h-2 bg-accent/40 rounded-full mx-2"></div>
                </div>
                
                <div className="absolute top-3/4 left-0 w-full flex items-center">
                  <div className="flex-1 h-px bg-gradient-to-r from-primary/40 via-primary/50 to-transparent opacity-60"></div>
                  <div className="w-2 h-2 bg-primary/50 rounded-full mx-2"></div>
                </div>

                {/* Central mapping indicator */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-white rounded-full p-3 shadow-lg border-2 border-primary/20">
                    <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Profile - Mobile Optimized */}
            <div className="lg:col-span-2 relative">
              {/* Background for Visual Appeal */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/10 rounded-full opacity-20 transform -rotate-1 shadow-lg"></div>
              
              {/* Main Content Container */}
              <div className="relative bg-white rounded-xl lg:rounded-2xl shadow-lg border-2 border-accent/20 p-3 sm:p-4 lg:p-6">
                {/* Customer Profile Header */}
                <div className="text-center mb-4 sm:mb-6">
                  <div className="inline-flex items-center gap-1 sm:gap-2 bg-primary/10 rounded-full px-3 sm:px-4 lg:px-6 py-2 sm:py-3 mb-2 sm:mb-4">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full"></div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">Customer Profile</h3>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600">Understanding your ideal customer</p>
                </div>

                {/* Customer Profile Grid - Mobile Optimized */}
                <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                  {/* Customer Jobs Section */}
                  <div className="bg-gradient-to-r from-accent/5 to-accent/10 rounded-lg lg:rounded-xl p-3 sm:p-4 lg:p-6 border border-accent/20">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-accent rounded-full flex items-center justify-center shrink-0">
                        <span className="text-white font-bold text-xs sm:text-sm">J</span>
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm sm:text-base font-semibold text-accent">Customer Jobs</h4>
                        <p className="text-xs text-accent/70 hidden sm:block">What they're trying to achieve</p>
                      </div>
                    </div>
                    <CanvasSection
                      title=""
                      description=""
                      items={canvasData.customerJobs}
                      onUpdate={(items) => updateSection('customerJobs', items)}
                      placeholder="e.g., Automate repetitive business processes"
                      compact
                      noteColor="orange"
                    />
                  </div>

                  {/* Customer Pains Section */}
                  <div className="bg-gradient-to-r from-accent/5 to-accent/10 rounded-lg lg:rounded-xl p-3 sm:p-4 lg:p-6 border border-accent/20">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-accent rounded-full flex items-center justify-center shrink-0">
                        <span className="text-white font-bold text-xs sm:text-sm">P</span>
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm sm:text-base font-semibold text-accent">Customer Pains</h4>
                        <p className="text-xs text-accent/70 hidden sm:block">What frustrates them</p>
                      </div>
                    </div>
                    <CanvasSection
                      title=""
                      description=""
                      items={canvasData.customerPains}
                      onUpdate={(items) => updateSection('customerPains', items)}
                      placeholder="e.g., Time spent on repetitive tasks"
                      compact
                      noteColor="orange"
                    />
                  </div>

                  {/* Customer Gains Section */}
                  <div className="bg-gradient-to-r from-accent/10 to-accent/15 rounded-lg lg:rounded-xl p-3 sm:p-4 lg:p-6 border border-accent/30">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-accent/80 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-white font-bold text-xs sm:text-sm">G</span>
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm sm:text-base font-semibold text-accent">Customer Gains</h4>
                        <p className="text-xs text-accent/70 hidden sm:block">What benefits they want</p>
                      </div>
                    </div>
                    <CanvasSection
                      title=""
                      description=""
                      items={canvasData.customerGains}
                      onUpdate={(items) => updateSection('customerGains', items)}
                      placeholder="e.g., Faster decision-making capabilities"
                      compact
                      noteColor="orange"
                    />
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-4 h-4 sm:w-6 sm:h-6 bg-accent/20 rounded-full opacity-50"></div>
                <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-3 h-3 sm:w-4 sm:h-4 bg-accent/30 rounded-full opacity-40"></div>
              </div>
            </div>
          </div>

          {/* Mobile-Friendly Progress Indicator */}
          <div className="mt-4 sm:mt-6 lg:mt-8 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-white/60 backdrop-blur-sm rounded-full px-4 sm:px-6 py-3 border border-white/20">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs sm:text-sm text-slate-600">
                  {[...canvasData.products, ...canvasData.painRelievers, ...canvasData.gainCreators, 
                    ...canvasData.customerJobs, ...canvasData.customerPains, ...canvasData.customerGains].length} items
                </span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-slate-300"></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-xs sm:text-sm text-slate-600">Canvas Progress</span>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Canvas;