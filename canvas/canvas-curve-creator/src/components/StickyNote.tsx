import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { X, Edit3, Check, GripVertical } from 'lucide-react';

interface StickyNoteProps {
  id: string;
  text: string;
  onUpdate: (newText: string) => void;
  onDelete: () => void;
  compact?: boolean;
  color?: 'yellow' | 'blue' | 'green' | 'pink' | 'purple' | 'orange';
}

export const StickyNote = ({ 
  id,
  text, 
  onUpdate, 
  onDelete, 
  compact = false, 
  color = 'yellow'
}: StickyNoteProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);
  
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const handleSave = () => {
    onUpdate(editText.trim());
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(text);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  const getColorClasses = () => {
    const colors = {
      yellow: 'bg-gradient-to-br from-yellow-100 to-yellow-200 border-yellow-300 shadow-yellow-100/50',
      blue: 'bg-gradient-to-br from-blue-100 to-blue-200 border-blue-300 shadow-blue-100/50',
      green: 'bg-gradient-to-br from-green-100 to-green-200 border-green-300 shadow-green-100/50',
      pink: 'bg-gradient-to-br from-pink-100 to-pink-200 border-pink-300 shadow-pink-100/50',
      purple: 'bg-gradient-to-br from-purple-100 to-purple-200 border-purple-300 shadow-purple-100/50',
      orange: 'bg-gradient-to-br from-orange-100 to-orange-200 border-orange-300 shadow-orange-100/50'
    };
    return colors[color];
  };


  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <motion.div 
      ref={setNodeRef}
      style={style}
      layout
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -20 }}
      whileHover={{ 
        scale: isDragging ? 1 : 1.02, 
        boxShadow: isDragging ? "none" : "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: isDragging ? 1 : 0.98 }}
      className={`${getColorClasses()} border-2 rounded-lg sm:rounded-xl p-3 sm:p-4 group ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} ${
        compact ? 'min-h-[60px] sm:min-h-[70px]' : 'min-h-[80px] sm:min-h-[90px]'
      } relative overflow-hidden`}>
      {isEditing ? (
        <div className="space-y-2">
          {compact ? (
            <Input
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={handleKeyDown}
              className="text-sm"
              autoFocus
            />
          ) : (
            <Textarea
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={handleKeyDown}
              className="text-sm resize-none"
              rows={2}
              autoFocus
            />
          )}
          <div className="flex gap-1">
            <Button size="sm" variant="outline" onClick={handleSave} className="h-6 px-2">
              <Check className="w-3 h-3" />
            </Button>
            <Button size="sm" variant="outline" onClick={handleCancel} className="h-6 px-2">
              <X className="w-3 h-3" />
            </Button>
          </div>
        </div>
      ) : (
        <>
          {/* Subtle paper texture overlay */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"4\" height=\"4\" viewBox=\"0 0 4 4\"%3E%3Cpath fill=\"%23000\" fill-opacity=\"0.05\" d=\"M1 3h1v1H1V3zm2-2h1v1H3V1z\"%3E%3C/path%3E%3C/svg%3E')"
          }}></div>
          
          <div className="relative flex items-start justify-between gap-3">
            {/* Drag handle */}
            <div 
              {...attributes}
              {...listeners}
              className="opacity-0 group-hover:opacity-60 transition-opacity cursor-grab active:cursor-grabbing"
            >
              <GripVertical className="w-4 h-4 text-gray-600 mt-1" />
            </div>
            
            <div className="flex-1">
              <p 
                className="text-sm cursor-pointer leading-relaxed text-gray-800 font-medium"
                onClick={() => setIsEditing(true)}
              >
                {text}
              </p>
            </div>
            
            <div className="flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setIsEditing(true)}
                className="h-7 w-7 p-0 hover:bg-white/50"
              >
                <Edit3 className="w-3 h-3" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={onDelete}
                className="h-7 w-7 p-0 text-red-500 hover:text-red-600 hover:bg-red-50"
              >
                <X className="w-3 h-3" />
              </Button>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};