import React from 'react';
import { Calendar, Hash } from 'lucide-react';

export const QuoteHeader: React.FC = () => {
  const today = new Date().toLocaleDateString();
  const quoteNumber = `QTE-${Date.now().toString().slice(-6)}`;

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 bg-muted/50 rounded-lg">
      <div className="flex items-center gap-2">
        <Hash className="h-4 w-4 text-muted-foreground" />
        <span className="font-medium">Quote #{quoteNumber}</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Calendar className="h-4 w-4" />
        <span>Created: {today}</span>
      </div>
    </div>
  );
};