import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { QuoteLineItem, Product, Customer } from '@/types/quote';
import { Search, Package, Plus } from 'lucide-react';

import { sampleProducts } from '@/data/sampleData';

interface AddLineItemDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddItem: (item: QuoteLineItem) => void;
  selectedCustomer?: Customer;
}

export const AddLineItemDialog: React.FC<AddLineItemDialogProps> = ({
  open,
  onOpenChange,
  onAddItem,
  selectedCustomer
}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [customPrice, setCustomPrice] = useState<number | null>(null);
  const [discountType, setDiscountType] = useState<'percentage' | 'fixed'>('percentage');
  const [discountValue, setDiscountValue] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  // Auto-apply customer discount when customer with advanced pricing is selected
  useEffect(() => {
    if (selectedCustomer?.advancedPricing && discountType === 'percentage') {
      setDiscountValue(prev => Math.max(prev, selectedCustomer.discountRate || 0));
    }
  }, [selectedCustomer, discountType]);

  const filteredProducts = sampleProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const calculateSubtotal = () => {
    if (!selectedProduct) return 0;
    
    const unitPrice = customPrice !== null ? customPrice : selectedProduct.basePrice;
    const lineTotal = unitPrice * quantity;
    
    // Apply customer-specific discount first if available
    let totalDiscount = discountValue;
    if (selectedCustomer?.advancedPricing && discountType === 'percentage') {
      totalDiscount = Math.max(discountValue, selectedCustomer.discountRate || 0);
    }
    
    if (discountType === 'percentage') {
      return lineTotal * (1 - totalDiscount / 100);
    } else {
      return Math.max(0, lineTotal - totalDiscount);
    }
  };

  const handleAddItem = () => {
    if (!selectedProduct) return;

    const unitPrice = customPrice !== null ? customPrice : selectedProduct.basePrice;
    
    // Calculate actual discount to apply
    let actualDiscount = discountValue;
    if (selectedCustomer?.advancedPricing && discountType === 'percentage') {
      actualDiscount = Math.max(discountValue, selectedCustomer.discountRate || 0);
    }
    
    const newItem: QuoteLineItem = {
      id: `item-${Date.now()}`,
      product: selectedProduct,
      quantity,
      unitPrice,
      discount: {
        type: discountType,
        value: actualDiscount
      },
      subtotal: calculateSubtotal()
    };

    onAddItem(newItem);
    
    // Reset form
    setSelectedProduct(null);
    setQuantity(1);
    setCustomPrice(null);
    setDiscountValue(0);
    setSearchTerm('');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Add Quote Item
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Product Selection */}
          <div className="space-y-3">
            <Label>Select Product/Service</Label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="grid gap-2 max-h-40 overflow-y-auto border rounded-md">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`p-3 cursor-pointer transition-colors ${
                    selectedProduct?.id === product.id 
                      ? 'bg-primary/10 border-primary' 
                      : 'hover:bg-muted/50'
                  }`}
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="font-medium">{product.name}</div>
                      <div className="text-sm text-muted-foreground">{product.description}</div>
                      <div className="text-xs bg-muted px-2 py-1 rounded w-fit">
                        {product.type.replace('-', ' ')}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">£{product.basePrice.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">{product.currency}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {selectedProduct && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Quantity */}
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity</Label>
                <Input
                  id="quantity"
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                />
              </div>

              {/* Custom Price */}
              <div className="space-y-2">
                <Label htmlFor="custom-price">Unit Price (Optional)</Label>
                <Input
                  id="custom-price"
                  type="number"
                  placeholder={`Default: £${selectedProduct.basePrice}`}
                  value={customPrice || ''}
                  onChange={(e) => setCustomPrice(e.target.value ? parseFloat(e.target.value) : null)}
                />
              </div>

              {/* Advanced Pricing Notice */}
              {selectedCustomer?.advancedPricing && (
                <div className="md:col-span-2 p-3 bg-primary/5 border border-primary/20 rounded-md">
                  <div className="text-sm text-primary font-medium">
                    ✓ Advanced Customer Pricing Active
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {selectedCustomer.discountRate}% discount will be automatically applied
                  </div>
                </div>
              )}

              {/* Discount Type */}
              <div className="space-y-2">
                <Label>Discount Type</Label>
                <Select value={discountType} onValueChange={(value: 'percentage' | 'fixed') => setDiscountType(value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="percentage">Percentage (%)</SelectItem>
                    <SelectItem value="fixed">Fixed Amount (£)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Discount Value */}
              <div className="space-y-2">
                <Label htmlFor="discount">
                  Discount {discountType === 'percentage' ? '(%)' : '(£)'}
                </Label>
                <Input
                  id="discount"
                  type="number"
                  min="0"
                  value={discountValue}
                  onChange={(e) => setDiscountValue(parseFloat(e.target.value) || 0)}
                />
              </div>
            </div>
          )}

          {/* Summary */}
          {selectedProduct && (
            <div className="p-4 bg-muted/50 rounded-lg space-y-2">
              <div className="flex justify-between text-sm">
                <span>Product:</span>
                <span className="font-medium">{selectedProduct.name}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Quantity:</span>
                <span>{quantity}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Unit Price:</span>
                <span>£{(customPrice || selectedProduct.basePrice).toLocaleString()}</span>
              </div>
              {discountValue > 0 && (
                <div className="flex justify-between text-sm text-primary">
                  <span>Discount:</span>
                  <span>
                    -{discountType === 'percentage' ? `${discountValue}%` : `£${discountValue}`}
                  </span>
                </div>
              )}
              <div className="flex justify-between font-semibold pt-2 border-t">
                <span>Subtotal:</span>
                <span>£{calculateSubtotal().toLocaleString()}</span>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button 
              onClick={handleAddItem}
              disabled={!selectedProduct}
              className="gap-2"
            >
              <Package className="h-4 w-4" />
              Add Item
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};