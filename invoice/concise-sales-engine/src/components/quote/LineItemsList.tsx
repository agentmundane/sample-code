import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Plus, Trash2, Package, Edit3 } from 'lucide-react';
import { QuoteLineItem, Customer } from '@/types/quote';
import { AddLineItemDialog } from './AddLineItemDialog';
import { LineItemCard } from './LineItemCard';

interface LineItemsListProps {
  items: QuoteLineItem[];
  onAddItem: (item: QuoteLineItem) => void;
  onUpdateItem: (id: string, item: Partial<QuoteLineItem>) => void;
  onRemoveItem: (id: string) => void;
  selectedCustomer?: Customer;
}

export const LineItemsList: React.FC<LineItemsListProps> = ({
  items,
  onAddItem,
  onUpdateItem,
  onRemoveItem,
  selectedCustomer
}) => {
  const [showAddDialog, setShowAddDialog] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label className="text-base font-semibold">Quote Items</Label>
        <Button 
          onClick={() => setShowAddDialog(true)}
          size="sm"
          className="gap-2"
        >
          <Plus className="h-4 w-4" />
          Add Item
        </Button>
      </div>

      {items.length === 0 ? (
        <Card className="border-dashed border-2 border-muted-foreground/25">
          <CardContent className="flex flex-col items-center justify-center py-12 px-6">
            <Package className="h-12 w-12 text-muted-foreground/50 mb-4" />
            <h3 className="font-medium text-lg mb-2">No items added yet</h3>
            <p className="text-muted-foreground text-center mb-4">
              Start building your quote by adding products or services
            </p>
            <Button onClick={() => setShowAddDialog(true)} className="gap-2">
              <Plus className="h-4 w-4" />
              Add First Item
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {items.map((item, index) => (
            <LineItemCard
              key={item.id}
              item={item}
              index={index}
              onUpdate={(updates) => onUpdateItem(item.id, updates)}
              onRemove={() => onRemoveItem(item.id)}
            />
          ))}
        </div>
      )}

      <AddLineItemDialog
        open={showAddDialog}
        onOpenChange={setShowAddDialog}
        onAddItem={onAddItem}
        selectedCustomer={selectedCustomer}
      />
    </div>
  );
};