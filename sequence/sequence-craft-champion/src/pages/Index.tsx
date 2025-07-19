import { useState } from "react";
import { Header } from "@/components/Header";
import { TierSelector } from "@/components/TierSelector";
import { SequenceDisplay } from "@/components/SequenceDisplay";
import { customerTiers, CustomerTier } from "@/data/sequences";

const Index = () => {
  const [selectedTier, setSelectedTier] = useState<CustomerTier | null>(null);

  const handleTierSelect = (tier: CustomerTier) => {
    setSelectedTier(tier);
  };

  const handleReset = () => {
    setSelectedTier(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <Header />
        
        {!selectedTier ? (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                Select Your Customer Tier
              </h2>
              <p className="text-muted-foreground">
                Choose the tier that best represents your target prospect's value and importance
              </p>
            </div>
            
            <TierSelector
              tiers={customerTiers}
              selectedTier={selectedTier}
              onTierSelect={handleTierSelect}
            />
          </div>
        ) : (
          <div>
            <div className="flex justify-center mb-8">
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-4 py-2 text-acelo-orange hover:text-acelo-orange/80 font-medium transition-all duration-200 hover:bg-acelo-orange/5 rounded-lg border border-transparent hover:border-acelo-orange/20"
              >
                ← Back to Tier Selection
              </button>
            </div>
            
            <SequenceDisplay selectedTier={selectedTier} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
