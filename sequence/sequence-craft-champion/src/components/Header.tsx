export const Header = () => {
  return (
    <header className="text-center mb-12">
      <div className="inline-flex items-center gap-4 mb-6">
        <div className="w-16 h-16 flex items-center justify-center">
          <img 
            src="/agentmundanenotexttransparent.png" 
            alt="AgentMundane Logo" 
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-4xl font-heading font-bold text-acelo-navy">
          Sales Sequence Generator
        </h1>
      </div>
      
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        Generate tailored outreach sequences for different customer tiers. 
        <br />
        <span className="font-medium text-acelo-navy">Strategic. Practical. Empowering.</span>
      </p>
      
      <div className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
        <span>Powered by</span>
        <span className="font-heading font-semibold text-acelo-orange">AgentMundane</span>
      </div>
    </header>
  );
};