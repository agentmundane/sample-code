import { Card, CardContent } from "@/components/ui/card";
import { CustomerTier } from "@/data/sequences";

interface TierSelectorProps {
  tiers: CustomerTier[];
  selectedTier: CustomerTier | null;
  onTierSelect: (tier: CustomerTier) => void;
}

export const TierSelector = ({ tiers, selectedTier, onTierSelect }: TierSelectorProps) => {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      {tiers.map((tier) => (
        <Card
          key={tier.id}
          className={`tier-card ${
            selectedTier?.id === tier.id ? 'selected' : ''
          }`}
          onClick={() => onTierSelect(tier)}
        >
          <CardContent className="p-6 text-center">
            <div className="text-4xl mb-4">{tier.icon}</div>
            <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
              {tier.name}
            </h3>
            <p className="text-muted-foreground mb-4 text-sm">
              {tier.description}
            </p>
            <div className="space-y-1 text-xs text-muted-foreground">
              <div className="flex justify-center items-center gap-2">
                <span className="font-medium">Duration:</span>
                <span>{tier.duration}</span>
              </div>
              <div className="flex justify-center items-center gap-2">
                <span className="font-medium">Focus:</span>
                <span className="text-center">{tier.focus}</span>
              </div>
            </div>
            {selectedTier?.id === tier.id && (
              <div className="mt-4 px-3 py-1 bg-acelo-orange text-white rounded-full text-xs font-medium shadow-sm">
                Selected
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};