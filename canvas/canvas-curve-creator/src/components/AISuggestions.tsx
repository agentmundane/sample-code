import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sparkles, Plus, RefreshCw, Lightbulb } from 'lucide-react';
import { generateAISuggestions, type Suggestion } from '@/data/suggestions';

interface AISuggestionsProps {
  category: Suggestion['category'];
  existingItems: string[];
  onSelectSuggestion: (suggestion: string) => void;
  isVisible?: boolean;
}

export const AISuggestions = ({ 
  category, 
  existingItems, 
  onSelectSuggestion, 
  isVisible = true 
}: AISuggestionsProps) => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadSuggestions = () => {
    setIsLoading(true);
    // Simulate AI processing delay
    setTimeout(() => {
      const newSuggestions = generateAISuggestions(category, existingItems, 3);
      setSuggestions(newSuggestions);
      setIsLoading(false);
    }, 500);
  };

  useEffect(() => {
    if (isVisible) {
      loadSuggestions();
    }
  }, [category, existingItems, isVisible]);

  const handleSelectSuggestion = (suggestion: Suggestion) => {
    onSelectSuggestion(suggestion.text);
    // Remove the selected suggestion from the list
    setSuggestions(prev => prev.filter(s => s.id !== suggestion.id));
  };

  const getSectionTitle = () => {
    const titles = {
      products: 'Product Ideas',
      painRelievers: 'Pain Reliever Ideas',
      gainCreators: 'Gain Creator Ideas',
      customerJobs: 'Customer Job Ideas',
      customerPains: 'Customer Pain Ideas',
      customerGains: 'Customer Gain Ideas'
    };
    return titles[category];
  };

  if (!isVisible || (!isLoading && suggestions.length === 0)) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="mt-4"
    >
              <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <h4 className="font-medium text-blue-700">{getSectionTitle()}</h4>
            <div className="px-2 py-1 bg-blue-100 rounded-full">
              <span className="text-xs font-medium text-blue-600">AI Powered</span>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={loadSuggestions}
            disabled={isLoading}
            className="h-8 w-8 p-0 hover:bg-blue-100"
          >
            <RefreshCw className={`w-3 h-3 ${isLoading ? 'animate-spin' : ''}`} />
          </Button>
        </div>

        <AnimatePresence mode="popLayout">
          {isLoading ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-2"
            >
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-8 bg-blue-100 rounded-lg animate-pulse"></div>
              ))}
            </motion.div>
          ) : (
            <div className="space-y-2">
              {suggestions.map((suggestion, index) => (
                <motion.div
                  key={suggestion.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-3 p-2 bg-white rounded-lg hover:bg-blue-50 transition-colors group">
                    <Lightbulb className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    <p className="text-sm flex-1 text-slate-700 group-hover:text-slate-900">
                      {suggestion.text}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="text-xs text-blue-600 font-medium">
                        {Math.round(suggestion.confidence * 100)}%
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleSelectSuggestion(suggestion)}
                        className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-100"
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>

        {!isLoading && suggestions.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-4 text-sm text-slate-500"
          >
            <Lightbulb className="w-8 h-8 text-slate-300 mx-auto mb-2" />
            No more suggestions available. Great work building your canvas!
          </motion.div>
        )}
      </Card>
    </motion.div>
  );
};