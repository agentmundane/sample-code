import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Check, X } from 'lucide-react';
import { StickyNote } from '@/components/StickyNote';

interface CanvasSectionProps {
  title: string;
  description: string;
  items: string[];
  onUpdate: (items: string[]) => void;
  placeholder: string;
  compact?: boolean;
  noteColor?: 'yellow' | 'blue' | 'green' | 'pink' | 'purple' | 'orange';
}

export const CanvasSection = ({ 
  title, 
  description, 
  items, 
  onUpdate, 
  placeholder,
  compact = false,
  noteColor = 'yellow'
}: CanvasSectionProps) => {
  const [newItem, setNewItem] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleAddItem = () => {
    if (newItem.trim()) {
      onUpdate([...items, newItem.trim()]);
      setNewItem('');
      setIsAdding(false);
    }
  };

  const handleUpdateItem = (index: number, newText: string) => {
    const updatedItems = [...items];
    updatedItems[index] = newText;
    onUpdate(updatedItems);
  };

  const handleDeleteItem = (index: number) => {
    const updatedItems = items.filter((_, i) => i !== index);
    onUpdate(updatedItems);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddItem();
    } else if (e.key === 'Escape') {
      setNewItem('');
      setIsAdding(false);
    }
  };

  const handleDragEnd = (event: { active: { id: string }; over: { id: string } | null }) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = items.findIndex((_, index) => index.toString() === active.id);
      const newIndex = items.findIndex((_, index) => index.toString() === over.id);
      
      if (oldIndex !== -1 && newIndex !== -1) {
        onUpdate(arrayMove(items, oldIndex, newIndex));
      }
    }
  };


  return (
    <div className="space-y-3">
      {title && (
        <div>
          <h3 className={`font-semibold text-foreground ${compact ? 'text-sm' : 'text-base'}`}>
            {title}
          </h3>
          {!compact && description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
        </div>
      )}
      
      <div className="space-y-2">
        <DndContext 
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={items.map((_, index) => index.toString())} strategy={verticalListSortingStrategy}>
            <AnimatePresence mode="popLayout">
              {items.map((item, index) => (
                <StickyNote
                  key={index}
                  id={index.toString()}
                  text={item}
                  onUpdate={(newText) => handleUpdateItem(index, newText)}
                  onDelete={() => handleDeleteItem(index)}
                  compact={compact}
                  color={noteColor}
                />
              ))}
            </AnimatePresence>
          </SortableContext>
        </DndContext>
        
        <AnimatePresence mode="wait">
          {isAdding ? (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white/50 backdrop-blur-sm border-2 border-dashed border-gray-300 rounded-lg sm:rounded-xl p-3 sm:p-4"
            >
              <Input
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                className="text-xs sm:text-sm mb-2 sm:mb-3 border-none bg-white/80"
                autoFocus
              />
              <div className="flex gap-1 sm:gap-2">
                <Button 
                  size="sm" 
                  onClick={handleAddItem} 
                  disabled={!newItem.trim()}
                  className="flex-1"
                >
                  <Check className="w-4 h-4 mr-2" />
                  Add
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={() => {
                    setNewItem('');
                    setIsAdding(false);
                  }}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsAdding(true)}
                className="w-full gap-1 sm:gap-2 border-2 border-dashed border-gray-300 hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 py-4 sm:py-6 text-xs sm:text-sm"
              >
                <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                Add {title ? title.split(' ')[0] : 'Item'}
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};