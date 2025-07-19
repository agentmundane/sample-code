import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Search, Sparkles, ArrowRight, Users, Target, Zap } from 'lucide-react';
import { canvasTemplates, templateCategories, type CanvasTemplate } from '@/data/templates';

interface TemplateSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTemplate: (template: CanvasTemplate, canvasName: string) => void;
}

export const TemplateSelector = ({ isOpen, onClose, onSelectTemplate }: TemplateSelectorProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTemplate, setSelectedTemplate] = useState<CanvasTemplate | null>(null);
  const [canvasName, setCanvasName] = useState('');

  const filteredTemplates = canvasTemplates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleTemplateSelect = (template: CanvasTemplate) => {
    setSelectedTemplate(template);
    setCanvasName(template.name);
  };

  const handleCreateFromTemplate = () => {
    if (selectedTemplate && canvasName.trim()) {
      onSelectTemplate(selectedTemplate, canvasName.trim());
      setSelectedTemplate(null);
      setCanvasName('');
      setSearchQuery('');
      setSelectedCategory('All');
      onClose();
    }
  };

  const handleBack = () => {
    setSelectedTemplate(null);
    setCanvasName('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
        <AnimatePresence mode="wait">
          {!selectedTemplate ? (
            <motion.div
              key="template-list"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 text-2xl">
                  <Sparkles className="w-6 h-6 text-primary" />
                  Choose a Template
                </DialogTitle>
                <p className="text-slate-600">
                  Get started quickly with pre-built Strategy Canvases for different AI automation solutions.
                </p>
              </DialogHeader>

              <div className="space-y-6 mt-6">
                {/* Search and Filters */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <Input
                        placeholder="Search templates..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {templateCategories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className="whitespace-nowrap"
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Template Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
                  <AnimatePresence>
                    {filteredTemplates.map((template, index) => (
                      <motion.div
                        key={template.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Card 
                          className="cursor-pointer hover:shadow-md transition-all duration-200 hover:border-primary/30 group"
                          onClick={() => handleTemplateSelect(template)}
                        >
                          <CardHeader className="pb-3">
                            <div className="flex items-start justify-between">
                              <div className="flex items-center gap-3">
                                <div className="text-2xl">{template.icon}</div>
                                <div>
                                  <CardTitle className="text-base group-hover:text-primary transition-colors">
                                    {template.name}
                                  </CardTitle>
                                  <Badge variant="secondary" className="mt-1">
                                    {template.category}
                                  </Badge>
                                </div>
                              </div>
                              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
                            </div>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <CardDescription className="text-sm">
                              {template.description}
                            </CardDescription>
                            <div className="flex items-center gap-4 mt-3 text-xs text-slate-500">
                              <div className="flex items-center gap-1">
                                <Target className="w-3 h-3" />
                                <span>{template.data.products.length} Products</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="w-3 h-3" />
                                <span>{template.data.customerJobs.length} Jobs</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {filteredTemplates.length === 0 && (
                  <div className="text-center py-8">
                    <Search className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                    <p className="text-slate-500">No templates found matching your criteria.</p>
                  </div>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="template-preview"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <DialogHeader>
                <div className="flex items-center gap-3">
                  <Button variant="ghost" size="sm" onClick={handleBack}>
                    ← Back
                  </Button>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{selectedTemplate.icon}</span>
                    <DialogTitle className="text-xl">{selectedTemplate.name}</DialogTitle>
                  </div>
                </div>
                <p className="text-slate-600 ml-12">
                  {selectedTemplate.description}
                </p>
              </DialogHeader>

              <div className="space-y-6 mt-6">
                {/* Canvas Name Input */}
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">
                    Canvas Name
                  </label>
                  <Input
                    value={canvasName}
                    onChange={(e) => setCanvasName(e.target.value)}
                    placeholder="Enter a name for your canvas"
                    className="text-base"
                  />
                </div>

                {/* Template Preview */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-h-64 overflow-y-auto">
                  {/* Value Map Preview */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-primary flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Value Map
                    </h3>
                    <div className="space-y-2">
                      <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
                        <h4 className="font-medium text-sm mb-2">Products & Services</h4>
                        <div className="space-y-1">
                          {selectedTemplate.data.products.slice(0, 2).map((item, index) => (
                            <div key={index} className="text-xs text-slate-600 bg-white rounded px-2 py-1">
                              {item}
                            </div>
                          ))}
                          {selectedTemplate.data.products.length > 2 && (
                            <div className="text-xs text-slate-500">
                              +{selectedTemplate.data.products.length - 2} more...
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                        <h4 className="font-medium text-sm mb-2">Pain Relievers</h4>
                        <div className="space-y-1">
                          {selectedTemplate.data.painRelievers.slice(0, 2).map((item, index) => (
                            <div key={index} className="text-xs text-slate-600 bg-white rounded px-2 py-1">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Customer Profile Preview */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-blue-600 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Customer Profile
                    </h3>
                    <div className="space-y-2">
                      <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
                        <h4 className="font-medium text-sm mb-2">Customer Jobs</h4>
                        <div className="space-y-1">
                          {selectedTemplate.data.customerJobs.slice(0, 2).map((item, index) => (
                            <div key={index} className="text-xs text-slate-600 bg-white rounded px-2 py-1">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-pink-50 rounded-lg p-3 border border-pink-200">
                        <h4 className="font-medium text-sm mb-2">Pains</h4>
                        <div className="space-y-1">
                          {selectedTemplate.data.customerPains.slice(0, 2).map((item, index) => (
                            <div key={index} className="text-xs text-slate-600 bg-white rounded px-2 py-1">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Create Button */}
                <div className="flex gap-3">
                  <Button variant="outline" onClick={handleBack} className="flex-1">
                    Choose Different Template
                  </Button>
                  <Button 
                    onClick={handleCreateFromTemplate} 
                    disabled={!canvasName.trim()} 
                    className="flex-1 bg-gradient-to-r from-primary to-primary/80"
                  >
                    Create Canvas from Template
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};