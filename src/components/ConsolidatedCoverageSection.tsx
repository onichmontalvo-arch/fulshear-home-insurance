import React from 'react';
import { Badge } from "@/components/ui/badge";
import { InfoCard, InfoGrid } from "@/components/ui/InfoCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/ui/CTASection";
import { Home, Shield, Users, AlertTriangle, CheckCircle, DollarSign, Zap } from "lucide-react";

export const ConsolidatedCoverageSection: React.FC = () => {
  const coverageTypes = [
    {
      icon: <Home className="h-5 w-5 text-primary" />,
      title: "Dwelling Coverage",
      description: "Rebuild Cost Protection",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground text-sm">
            Your dwelling coverage should reflect today's construction costs, not market value. 
            We use local contractor pricing and building cost databases.
          </p>
          <div className="bg-muted p-3 rounded-lg">
            <h5 className="font-medium text-sm mb-2">Key Considerations:</h5>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Construction materials and labor costs in Fort Bend County</li>
              <li>• Square footage, finishes, and architectural features</li>
              <li>• Replacement cost vs. market value differences</li>
              <li>• Extended/guaranteed replacement cost options</li>
            </ul>
          </div>
          <Badge className="w-full justify-center">Market Value ≠ Rebuild Cost</Badge>
        </div>
      )
    },
    {
      icon: <Shield className="h-5 w-5 text-secondary" />,
      title: "Personal Property",
      description: "Belongings Protection",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground text-sm">
            Choose Replacement Cost Value (RCV) over Actual Cash Value (ACV) for your belongings. 
            Schedule high-value items separately.
          </p>
          <div className="bg-muted p-3 rounded-lg">
            <h5 className="font-medium text-sm mb-2">Coverage Details:</h5>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Standard: 50-70% of dwelling coverage</li>
              <li>• Special limits: jewelry, electronics, cash</li>
              <li>• Schedule valuable items with appraisals</li>
              <li>• On/off premises coverage options</li>
            </ul>
          </div>
          <Badge variant="secondary" className="w-full justify-center">RCV Recommended</Badge>
        </div>
      )
    },
    {
      icon: <Users className="h-5 w-5 text-accent" />,
      title: "Liability & Medical",
      description: "Asset Protection",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground text-sm">
            Protects against lawsuits and medical expenses. Consider umbrella coverage for additional protection 
            if you have significant assets, pools, or teen drivers.
          </p>
          <div className="bg-muted p-3 rounded-lg">
            <h5 className="font-medium text-sm mb-2">Standard Limits:</h5>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Personal Liability: $100K - $500K</li>
              <li>• Medical Payments: $1K - $5K</li>
              <li>• Consider umbrella for $1M+ protection</li>
              <li>• Covers legal defense costs</li>
            </ul>
          </div>
          <Badge variant="secondary" className="w-full justify-center">Asset Protection</Badge>
        </div>
      )
    },
    {
      icon: <AlertTriangle className="h-5 w-5 text-destructive" />,
      title: "Loss of Use",
      description: "Living Expenses",
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground text-sm">
            Covers additional living expenses when your home is uninhabitable due to covered damage. 
            Critical for families during extended repairs.
          </p>
          <div className="bg-muted p-3 rounded-lg">
            <h5 className="font-medium text-sm mb-2">Fulshear Considerations:</h5>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Hotel rates: $150-400/night locally</li>
              <li>• Restaurant meals vs. home cooking</li>
              <li>• Storage and moving expenses</li>
              <li>• Temporary housing for pets</li>
            </ul>
          </div>
          <Badge variant="secondary" className="w-full justify-center">20-30% of Dwelling</Badge>
        </div>
      )
    }
  ];

  const texasSpecifics = [
    {
      icon: <Zap className="h-5 w-5 text-warning" />,
      title: "Wind & Hail Protection",
      description: "Essential for Texas homeowners",
      content: (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Percentage deductibles are standard in Texas. Choose based on your financial comfort level and roof condition.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-success/10 p-3 rounded border border-success/20">
              <h6 className="font-medium text-success text-sm">1% Option</h6>
              <p className="text-xs text-muted-foreground">Lower risk, higher premium</p>
            </div>
            <div className="bg-destructive/10 p-3 rounded border border-destructive/20">
              <h6 className="font-medium text-destructive text-sm">2% Option</h6>
              <p className="text-xs text-muted-foreground">Higher risk, lower premium</p>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: <Home className="h-5 w-5 text-info" />,
      title: "Additional Structures",
      description: "Detached garages, pools, fences",
      content: (
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Standard coverage is 10% of dwelling amount. May need increase for expensive workshops or pool equipment.
          </p>
          <div className="bg-muted p-3 rounded-lg">
            <h6 className="font-medium text-sm mb-1">Common Add-Ons:</h6>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Pool equipment and heaters</li>
              <li>• Workshop tools and equipment</li>
              <li>• Fencing and landscaping</li>
              <li>• Generator and outdoor kitchens</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Complete Homeowners Coverage Guide"
            subtitle="Understanding what protects your Fulshear home and family"
            variant="centered"
          />
          
          <div className="space-y-12">
            {/* Main Coverage Types */}
            <div>
              <h3 className="text-xl font-bold mb-6">Essential Coverage Components</h3>
              <InfoGrid columns={2}>
                {coverageTypes.map((coverage, index) => (
                  <InfoCard
                    key={index}
                    title={coverage.title}
                    description={coverage.description}
                    icon={coverage.icon}
                    className="h-full"
                  >
                    {coverage.content}
                  </InfoCard>
                ))}
              </InfoGrid>
            </div>

            {/* Texas-Specific Additions */}
            <div>
              <h3 className="text-xl font-bold mb-6">Texas-Specific Considerations</h3>
              <InfoGrid columns={2}>
                {texasSpecifics.map((item, index) => (
                  <InfoCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                    variant="accent"
                  >
                    {item.content}
                  </InfoCard>
                ))}
              </InfoGrid>
            </div>

            {/* Call to Action */}
            <CTASection
              title="Get Personalized Coverage Recommendations"
              description="Our local agents will review your specific needs and explain coverage options in plain English."
              variant="card"
            />
          </div>
        </div>
      </div>
    </section>
  );
};