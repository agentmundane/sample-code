import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit3, Trash2, ExternalLink, Search, Filter, Clock, Users, Target, TrendingUp, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { TemplateSelector } from '@/components/TemplateSelector';
import { type CanvasTemplate } from '@/data/templates';

interface Canvas {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

const Dashboard = () => {
  const [canvases, setCanvases] = useState<Canvas[]>([]);
  const [newCanvasName, setNewCanvasName] = useState('');
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterBy, setFilterBy] = useState<'all' | 'recent' | 'favorites'>('all');
  const [isTemplateSelectorOpen, setIsTemplateSelectorOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('strategy_canvases');
    if (stored) {
      setCanvases(JSON.parse(stored));
    }
  }, []);

  const createCanvas = () => {
    if (!newCanvasName.trim()) return;
    
    const newCanvas: Canvas = {
      id: Date.now().toString(),
      name: newCanvasName.trim(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const updatedCanvases = [...canvases, newCanvas];
    setCanvases(updatedCanvases);
    localStorage.setItem('strategy_canvases', JSON.stringify(updatedCanvases));
    
    // Initialize empty canvas data
    localStorage.setItem(`strategy_canvas_${newCanvas.id}`, JSON.stringify({
      name: newCanvas.name,
      customerJobs: [],
      customerPains: [],
      customerGains: [],
      products: [],
      painRelievers: [],
      gainCreators: []
    }));

    setNewCanvasName('');
    setIsCreateDialogOpen(false);
    navigate(`/canvas/${newCanvas.id}`);
  };

  const createCanvasFromTemplate = (template: CanvasTemplate, canvasName: string) => {
    const newCanvas: Canvas = {
      id: Date.now().toString(),
      name: canvasName,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const updatedCanvases = [...canvases, newCanvas];
    setCanvases(updatedCanvases);
    localStorage.setItem('strategy_canvases', JSON.stringify(updatedCanvases));
    
    // Initialize canvas with template data
    localStorage.setItem(`strategy_canvas_${newCanvas.id}`, JSON.stringify({
      name: newCanvas.name,
      ...template.data
    }));

    navigate(`/canvas/${newCanvas.id}`);
  };

  const deleteCanvas = (id: string) => {
    const updatedCanvases = canvases.filter(c => c.id !== id);
    setCanvases(updatedCanvases);
    localStorage.setItem('strategy_canvases', JSON.stringify(updatedCanvases));
    localStorage.removeItem(`strategy_canvas_${id}`);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const filteredCanvases = canvases.filter(canvas => {
    const matchesSearch = canvas.name.toLowerCase().includes(searchQuery.toLowerCase());
    if (filterBy === 'recent') {
      const threeDaysAgo = new Date();
      threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
      return matchesSearch && new Date(canvas.updatedAt) > threeDaysAgo;
    }
    return matchesSearch;
  });

  const getCanvasStats = () => {
    const totalCanvases = canvases.length;
    const recentCanvases = canvases.filter(c => {
      const threeDaysAgo = new Date();
      threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
      return new Date(c.updatedAt) > threeDaysAgo;
    }).length;

    return { totalCanvases, recentCanvases };
  };

  const { totalCanvases, recentCanvases } = getCanvasStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-primary/5">
      {/* Modern Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 sm:gap-3 lg:gap-4 min-w-0 flex-1"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center shrink-0">
                <img src="/agentmundanetransparent.png" alt="AgentMundane" className="w-full h-full object-contain" />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-base sm:text-xl lg:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent truncate">
                  AgentMundane
                </h1>
                <p className="text-xs sm:text-sm lg:text-base text-slate-600 font-medium hidden sm:block">Strategy Canvas Builder</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 sm:gap-4"
            >
              {/* Stats Display */}
              <div className="hidden md:flex items-center gap-4 lg:gap-6 bg-white/50 rounded-xl px-4 lg:px-6 py-3 border border-white/20">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-primary" />
                  <span className="text-xs lg:text-sm font-medium text-slate-700">{totalCanvases} Canvases</span>
                </div>
                <div className="w-px h-4 bg-slate-300"></div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className="text-xs lg:text-sm font-medium text-slate-700">{recentCanvases} Recent</span>
                </div>
              </div>

              <div className="flex gap-1 sm:gap-2 shrink-0">
                <Button
                  variant="outline"
                  onClick={() => setIsTemplateSelectorOpen(true)}
                  className="gap-1 sm:gap-2 hover:bg-primary/5 hover:border-primary/30 text-xs sm:text-sm px-2 sm:px-3 lg:px-4"
                >
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Templates</span>
                </Button>
                <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="gap-1 sm:gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg text-xs sm:text-sm px-2 sm:px-3 lg:px-4">
                      <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">New Canvas</span>
                      <span className="sm:hidden">New</span>
                    </Button>
                  </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-semibold">Create New Canvas</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6">
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-2 block">Canvas Name</label>
                      <Input
                        placeholder="e.g., AI Customer Support Agent for E-commerce"
                        value={newCanvasName}
                        onChange={(e) => setNewCanvasName(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && createCanvas()}
                        className="text-base"
                      />
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)} className="flex-1">
                        Cancel
                      </Button>
                      <Button onClick={createCanvas} disabled={!newCanvasName.trim()} className="flex-1">
                        Create Canvas
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
        {canvases.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12 sm:py-16 lg:py-20"
          >
            <div className="max-w-2xl mx-auto px-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-lg">
                <Target className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary" />
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Ready to Map Your Value Proposition?
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                Create your first Strategy Canvas to start mapping your AI automation solutions to customer needs.
                <span className="hidden sm:inline"> Transform insights into impact with our professional canvas tool.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg">
                      <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                      Start from Scratch
                    </Button>
                  </DialogTrigger>
                </Dialog>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => setIsTemplateSelectorOpen(true)}
                  className="gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg hover:bg-primary/5 hover:border-primary/30"
                >
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                  Use a Template
                </Button>
              </div>
              
              {/* Features showcase */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16 text-left">
                <div className="bg-white/50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/20">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 mb-3 sm:mb-4" />
                  <h3 className="text-sm sm:text-base font-semibold mb-2">Customer Focused</h3>
                  <p className="text-xs sm:text-sm text-slate-600">Map customer jobs, pains, and gains with precision</p>
                </div>
                <div className="bg-white/50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/20">
                  <Target className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 mb-3 sm:mb-4" />
                  <h3 className="text-sm sm:text-base font-semibold mb-2">Value Driven</h3>
                  <p className="text-xs sm:text-sm text-slate-600">Align your AI automation solutions with real business needs</p>
                </div>
                <div className="bg-white/50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/20">
                                      <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-3 sm:mb-4" />
                  <h3 className="text-sm sm:text-base font-semibold mb-2">Results Oriented</h3>
                  <p className="text-xs sm:text-sm text-slate-600">Export professional reports and share insights</p>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <>
            {/* Search and Filter Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 sm:mb-8"
            >
              <div className="bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-between">
                  <div className="flex-1 w-full sm:w-auto">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <Input
                        placeholder="Search canvases..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 bg-white/80 border-white/20 text-sm sm:text-base"
                      />
                    </div>
                  </div>
                  
                  <div className="flex gap-2 w-full sm:w-auto">
                    {['all', 'recent'].map((filter) => (
                      <Button
                        key={filter}
                        variant={filterBy === filter ? "default" : "outline"}
                        size="sm"
                        onClick={() => setFilterBy(filter as typeof filterBy)}
                        className="capitalize flex-1 sm:flex-none text-xs sm:text-sm"
                      >
                        {filter === 'recent' && <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />}
                        {filter}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Canvas Grid */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              <AnimatePresence>
                {filteredCanvases.map((canvas, index) => (
                  <motion.div
                    key={canvas.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-white/20 hover:border-primary/20">
                      <CardHeader className="pb-3 p-4 sm:p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-base sm:text-lg mb-2 group-hover:text-primary transition-colors truncate">
                              {canvas.name}
                            </CardTitle>
                            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
                              <Clock className="w-3 h-3 shrink-0" />
                              <span className="truncate">Updated {formatDate(canvas.updatedAt)}</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="pt-0 p-4 sm:p-6">
                        <div className="flex items-center gap-2 mb-3 sm:mb-4">
                          <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                            Canvas
                          </Badge>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs">
                            Active
                          </Badge>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 gap-1 sm:gap-2 hover:bg-primary hover:text-primary-foreground transition-colors text-xs sm:text-sm"
                            onClick={() => navigate(`/canvas/${canvas.id}`)}
                          >
                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                            Open
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => deleteCanvas(canvas.id)}
                            className="hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors px-2 sm:px-3"
                          >
                            <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredCanvases.length === 0 && searchQuery && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <Search className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No canvases found</h3>
                <p className="text-slate-600">Try adjusting your search terms or create a new canvas.</p>
              </motion.div>
            )}
          </>
        )}
      </main>

      <TemplateSelector
        isOpen={isTemplateSelectorOpen}
        onClose={() => setIsTemplateSelectorOpen(false)}
        onSelectTemplate={createCanvasFromTemplate}
      />
    </div>
  );
};

export default Dashboard;