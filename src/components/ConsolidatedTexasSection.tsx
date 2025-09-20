import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InfoCard, InfoGrid } from "@/components/ui/InfoCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Droplets, Shield, Home, CheckCircle, Info } from "lucide-react";

export const ConsolidatedTexasSection: React.FC = () => {
  const windHailInfo = [
    {
      title: "Roof Age Matters",
      description: "Carriers may switch to ACV for roofs 10+ years old",
      impact: "High"
    },
    {
      title: "Impact-Resistant Discounts",
      description: "Class 4 shingles can provide significant premium savings",
      impact: "Medium"
    },
    {
      title: "Deductible Strategy",
      description: "Consider your financial comfort level and roof condition",
      impact: "High"
    },
    {
      title: "Claims Frequency",
      description: "Multiple hail claims can affect renewability",
      impact: "High"
    }
  ];

  const waterDamageInfo = [
    {
      title: "Gradual Leaks",
      description: "Not covered - must be sudden and accidental",
      covered: false
    },
    {
      title: "Burst Pipes",
      description: "Covered damage, pipe repair may not be",
      covered: true
    },
    {
      title: "Flood Damage",
      description: "Excluded - requires separate flood policy",
      covered: false
    },
    {
      title: "Appliance Overflow",
      description: "Usually covered if sudden and accidental",
      covered: true
    }
  ];

  const extendedCoverages = [
    {
      title: "Service Line Coverage",
      description: "Covers water/sewer lines from street to home",
      icon: <Home className="h-4 w-4" />
    },
    {
      title: "Equipment Breakdown",
      description: "HVAC, appliances, electrical systems",
      icon: <Shield className="h-4 w-4" />
    },
    {
      title: "Identity Theft",
      description: "Covers expenses to restore your identity",
      icon: <CheckCircle className="h-4 w-4" />
    },
    {
      title: "Cyber Liability",
      description: "Protection for cyber attacks and data breaches",
      icon: <AlertTriangle className="h-4 w-4" />
    }
  ];

  const getImpactBadge = (impact: string) => {
    switch (impact) {
      case "High":
        return <Badge variant="destructive">{impact}</Badge>;
      case "Medium":
        return <Badge variant="default">{impact}</Badge>;
      default:
        return <Badge variant="secondary">{impact}</Badge>;
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Texas Insurance Essentials for Fulshear Homes"
            subtitle="Wind, water, and weather-specific coverage considerations"
            variant="centered"
          />
          
          <Tabs defaultValue="wind-hail" className="mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="wind-hail">Wind/Hail Strategy</TabsTrigger>
              <TabsTrigger value="water">Water Damage</TabsTrigger>
              <TabsTrigger value="extended">Enhanced Coverage</TabsTrigger>
            </TabsList>
            
            <TabsContent value="wind-hail" className="space-y-6">
              <InfoCard
                title="Wind & Hail Coverage Strategy"
                description="Critical decisions for Texas homeowners"
                icon={<AlertTriangle className="h-5 w-5 text-destructive" />}
                variant="primary"
              >
                <div className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Texas experiences frequent severe weather. Your deductible choice affects both your premium and out-of-pocket risk when storms hit.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-success/10 p-4 rounded-lg border border-success/20">
                      <h5 className="font-semibold text-success mb-2">1% Deductible Strategy</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Lower out-of-pocket risk per claim</li>
                        <li>• Higher annual premium investment</li>
                        <li>• Best for older roofs or high storm exposure</li>
                        <li>• More predictable budgeting</li>
                      </ul>
                    </div>
                    
                    <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/20">
                      <h5 className="font-semibold text-destructive mb-2">2% Deductible Strategy</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Higher out-of-pocket risk per claim</li>
                        <li>• Lower annual premium costs</li>
                        <li>• Popular choice for newer roofs</li>
                        <li>• Requires larger emergency fund</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </InfoCard>

              <div>
                <h4 className="font-semibold mb-4">Key Factors for Your Decision</h4>
                <InfoGrid columns={2}>
                  {windHailInfo.map((item, index) => (
                    <div key={index} className="bg-card p-4 rounded-lg border shadow-sm">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-medium">{item.title}</h5>
                        {getImpactBadge(item.impact)}
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </InfoGrid>
              </div>
            </TabsContent>
            
            <TabsContent value="water" className="space-y-6">
              <InfoCard
                title="Water Damage Coverage Guide"
                description="What's covered vs. what requires additional protection"
                icon={<Droplets className="h-5 w-5 text-info" />}
                variant="secondary"
              >
                <div className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Understanding water damage coverage helps prevent costly surprises. Not all water damage is created equal in insurance terms.
                  </p>
                  
                  <div className="space-y-3">
                    {waterDamageInfo.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div>
                          <h5 className="font-medium">{item.title}</h5>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                        <Badge variant={item.covered ? "default" : "destructive"}>
                          {item.covered ? "Covered" : "Excluded"}
                        </Badge>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-info/10 p-4 rounded-lg border border-info/20">
                    <div className="flex items-start gap-2">
                      <Info className="h-5 w-5 text-info mt-0.5" />
                      <div>
                        <h5 className="font-medium text-info mb-1">Fort Bend County Flood Risk</h5>
                        <p className="text-sm text-muted-foreground">
                          Even "low-risk" areas can flood. Consider flood insurance through NFIP or private carriers. 
                          Harvey 2017 showed that flood risk extends beyond traditional flood zones.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </InfoCard>
            </TabsContent>
            
            <TabsContent value="extended" className="space-y-6">
              <InfoCard
                title="Enhanced Protection Options"
                description="Additional coverages for comprehensive protection"
                icon={<Shield className="h-5 w-5 text-accent" />}
                variant="accent"
              >
                <div className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    Modern homes have exposures that basic policies may not fully address. Consider these enhancements for complete protection.
                  </p>
                  
                  <InfoGrid columns={2}>
                    {extendedCoverages.map((coverage, index) => (
                      <div key={index} className="bg-muted p-4 rounded-lg">
                        <div className="flex items-start gap-3">
                          <div className="bg-accent/10 p-2 rounded-lg text-accent">
                            {coverage.icon}
                          </div>
                          <div>
                            <h5 className="font-medium mb-1">{coverage.title}</h5>
                            <p className="text-sm text-muted-foreground">{coverage.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </InfoGrid>
                </div>
              </InfoCard>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};