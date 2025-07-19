import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { QuoteLineItem } from '@/types/quote';
import { Trash2, Edit3, Check, X, Package } from 'lucide-react';

interface LineItemCardProps {
  item: QuoteLineItem;
  index: number;
  onUpdate: (updates: Partial<QuoteLineItem>) => void;
  onRemove: () => void;
}

export const LineItemCard: React.FC<LineItemCardProps> = ({
  item,
  index,
  onUpdate,
  onRemove
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editQuantity, setEditQuantity] = useState(item.quantity);
  const [editUnitPrice, setEditUnitPrice] = useState(item.unitPrice);
  const [editDiscountValue, setEditDiscountValue] = useState(item.discount.value);

  const handleSaveEdit = () => {
    const lineTotal = editUnitPrice * editQuantity;
    let newSubtotal = lineTotal;
    
    if (item.discount.type === 'percentage') {
      newSubtotal = lineTotal * (1 - editDiscountValue / 100);
    } else {
      newSubtotal = Math.max(0, lineTotal - editDiscountValue);
    }

    onUpdate({
      quantity: editQuantity,
      unitPrice: editUnitPrice,
      discount: {
        ...item.discount,
        value: editDiscountValue
      },
      subtotal: newSubtotal
    });
    
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditQuantity(item.quantity);
    setEditUnitPrice(item.unitPrice);
    setEditDiscountValue(item.discount.value);
    setIsEditing(false);
  };

  const getProductTypeColor = (type: string) => {
    switch (type) {
      case 'service':
        return 'bg-brand-orange/10 text-brand-orange border-brand-orange/20';
      case 'consulting':
        return 'bg-brand-navy/10 text-brand-navy border-brand-navy/20';
      case 'platform':
        return 'bg-brand-purple/10 text-brand-purple border-brand-purple/20';
      default:
        return 'bg-brand-coral/10 text-brand-coral border-brand-coral/20';
    }
  };

  return (
    <Card className="shadow-soft border border-border/50 hover:shadow-medium transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1 space-y-3">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-muted-foreground">
                    #{index + 1}
                  </span>
                  <Package className="h-4 w-4 text-muted-foreground" />
                  <h3 className="font-semibold">{item.product.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{item.product.description}</p>
                <Badge 
                  variant="outline" 
                  className={getProductTypeColor(item.product.type)}
                >
                  {item.product.type.replace('-', ' ')}
                </Badge>
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <Edit3 className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onRemove}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Details */}
            {isEditing ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="space-y-1">
                  <label className="text-xs font-medium">Quantity</label>
                  <Input
                    type="number"
                    min="1"
                    value={editQuantity.toString()}
                    onChange={(e) => setEditQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium">Unit Price</label>
                  <Input
                    type="number"
                    value={editUnitPrice.toString()}
                    onChange={(e) => setEditUnitPrice(parseFloat(e.target.value) || 0)}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium">
                    Discount {item.discount.type === 'percentage' ? '(%)' : '(£)'}
                  </label>
                  <Input
                    type="number"
                    value={editDiscountValue.toString()}
                    onChange={(e) => setEditDiscountValue(parseFloat(e.target.value) || 0)}
                  />
                </div>
                <div className="md:col-span-3 flex gap-2 pt-2">
                  <Button size="sm" onClick={handleSaveEdit} className="gap-1">
                    <Check className="h-3 w-3" />
                    Save
                  </Button>
                  <Button size="sm" variant="outline" onClick={handleCancelEdit} className="gap-1">
                    <X className="h-3 w-3" />
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Quantity:</span>
                  <div className="font-medium">{item.quantity}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Unit Price:</span>
                  <div className="font-medium">£{item.unitPrice.toLocaleString()}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Discount:</span>
                  <div className="font-medium">
                    {item.discount.value > 0 
                      ? `${item.discount.type === 'percentage' ? `${item.discount.value}%` : `£${item.discount.value}`}`
                      : 'None'
                    }
                  </div>
                </div>
                <div>
                  <span className="text-muted-foreground">Subtotal:</span>
                  <div className="font-semibold text-lg text-primary">
                    £{item.subtotal.toLocaleString()}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};