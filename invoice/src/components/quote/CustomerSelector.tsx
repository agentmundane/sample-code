import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Search, Building2, User, Mail } from 'lucide-react';
import { Customer } from '@/types/quote';

import { sampleCustomers } from '@/data/sampleData';

interface CustomerSelectorProps {
  selectedCustomer: Customer | null;
  onSelectCustomer: (customer: Customer | null) => void;
}

export const CustomerSelector: React.FC<CustomerSelectorProps> = ({
  selectedCustomer,
  onSelectCustomer
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showCustomers, setShowCustomers] = useState(false);

  const filteredCustomers = sampleCustomers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <Label className="text-base font-semibold">Select Customer</Label>
      
      {selectedCustomer ? (
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-primary" />
                  <span className="font-medium">{selectedCustomer.name}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Building2 className="h-4 w-4" />
                  <span>{selectedCustomer.companyName}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>{selectedCustomer.email}</span>
                </div>
                {selectedCustomer.advancedPricing && (
                  <div className="text-sm text-primary font-medium">
                    ✓ Advanced Customer Pricing ({selectedCustomer.discountRate}% discount)
                  </div>
                )}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onSelectCustomer(null)}
              >
                Change
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search customers by name, company, or email..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setShowCustomers(true);
              }}
              onFocus={() => setShowCustomers(true)}
              className="pl-10"
            />
          </div>
          
          {showCustomers && (
            <Card className="border shadow-soft">
              <CardContent className="p-0">
                <div className="max-h-60 overflow-y-auto">
                  {filteredCustomers.length > 0 ? (
                    filteredCustomers.map((customer) => (
                      <div
                        key={customer.id}
                        className="p-4 hover:bg-muted/50 cursor-pointer border-b last:border-b-0"
                        onClick={() => {
                          onSelectCustomer(customer);
                          setShowCustomers(false);
                          setSearchTerm('');
                        }}
                      >
                        <div className="space-y-1">
                          <div className="font-medium">{customer.name}</div>
                          <div className="text-sm text-muted-foreground">{customer.companyName}</div>
                          <div className="text-sm text-muted-foreground">{customer.email}</div>
                          {customer.advancedPricing && (
                            <div className="text-xs text-primary">Advanced Pricing Available</div>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-4 text-center text-muted-foreground">
                      No customers found matching "{searchTerm}"
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  );
};