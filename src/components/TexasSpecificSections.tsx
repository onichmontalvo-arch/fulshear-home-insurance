import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, Shield, Home, Droplets, Zap, AlertTriangle, CheckCircle, DollarSign, FileText, Users } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { InfoCard, InfoGrid } from "@/components/ui/InfoCard";

// Wind/Hail Calculator Component
const WindHailCalculator: React.FC = () => {
  const [dwellingAmount, setDwellingAmount] = useState(550000);
  const onePercent = dwellingAmount * 0.01;
  const twoPercent = dwellingAmount * 0.02;
  const difference = twoPercent - onePercent;
  return <Card className="shadow-medium">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          Wind/Hail Deductible Calculator
        </CardTitle>
        <CardDescription>
          See the real cost difference on your home value
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Your Dwelling Coverage Amount: ${dwellingAmount.toLocaleString()}
            </label>
            <input type="range" min="200000" max="1000000" step="25000" value={dwellingAmount} onChange={e => setDwellingAmount(Number(e.target.value))} className="w-full" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold text-secondary">1% Deductible</h4>
              <p className="text-2xl font-bold text-secondary">${onePercent.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Out of pocket per claim</p>
            </div>
            
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold text-destructive">2% Deductible</h4>
              <p className="text-2xl font-bold text-destructive">${twoPercent.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Out of pocket per claim</p>
            </div>
          </div>
          
          <div className="bg-gradient-accent p-4 rounded-lg text-accent-foreground">
            <h4 className="font-semibold">Difference: ${difference.toLocaleString()}</h4>
            <p className="text-sm opacity-90">
              Higher % = lower premium but more risk. Consider your roof age and risk tolerance.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>;
};

// Texas Coverage Options Component
export const TexasCoverageOptions: React.FC = () => {
  return <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Texas-Specific Coverage Add-Ons for Fulshear Homes
          </h2>
          
          <Tabs defaultValue="wind-hail" className="mb-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="wind-hail">Wind/Hail</TabsTrigger>
              <TabsTrigger value="water">Water Damage</TabsTrigger>
              <TabsTrigger value="extended">Extended Coverage</TabsTrigger>
              <TabsTrigger value="calculator">Calculator</TabsTrigger>
            </TabsList>
            
            <TabsContent value="wind-hail" className="space-y-6">
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                    Wind & Hail Protection in Texas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Texas experiences frequent hail storms and high winds. Understanding your deductible structure is crucial for financial planning.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-success">1% Deductible Option</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Lower out-of-pocket per claim</li>
                        <li>• Higher annual premium</li>
                        <li>• Good for older roofs or high exposure</li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-destructive">2% Deductible Option</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Higher out-of-pocket per claim</li>
                        <li>• Lower annual premium</li>
                        <li>• Popular for newer roofs</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="calculator">
              <WindHailCalculator />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>;
};

// Local Pricing Factors Component
export const LocalPricingFactors: React.FC = () => {
  const pricingFactors = [{
    factor: "Roof Age & Materials",
    impact: "High",
    description: "Impact-resistant shingles = discounts. Age affects RCV/ACV."
  }, {
    factor: "Distance to Fire Station",
    impact: "Medium",
    description: "Protection class affects rates. Rural areas cost more."
  }, {
    factor: "Home Age & Construction",
    impact: "High",
    description: "Newer homes, masonry construction = lower rates."
  }, {
    factor: "Claims History",
    impact: "High",
    description: "Prior claims stay on record 3-7 years typically."
  }, {
    factor: "Credit-Based Insurance Score",
    impact: "High",
    description: "Where allowed by law, affects pricing significantly."
  }, {
    factor: "Security & Smart Devices",
    impact: "Medium",
    description: "Monitored security, smart water shutoffs = discounts."
  }, {
    factor: "Pool/Spa",
    impact: "Medium",
    description: "Increases liability exposure, may require higher limits."
  }, {
    factor: "Short-Term Rental Use",
    impact: "High",
    description: "Airbnb/VRBO changes risk profile significantly."
  }];
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High":
        return "destructive";
      case "Medium":
        return "default";
      default:
        return "secondary";
    }
  };
  return (
    <section className="py-12">
      <SectionHeader 
        title="Local Pricing Factors in Fulshear" 
        subtitle="What affects your homeowners insurance rates in our area"
        variant="centered"
      />
      <InfoGrid columns={2}>
        {pricingFactors.map((factor, index) => (
          <InfoCard 
            key={index}
            title={factor.factor}
            variant="primary"
          >
            <div className="space-y-2">
              <Badge variant={getImpactColor(factor.impact)} className="mb-2">
                {factor.impact} Impact
              </Badge>
              <p className="text-sm">{factor.description}</p>
            </div>
          </InfoCard>
        ))}
      </InfoGrid>
    </section>
  );
};

// Discounts Component
export const InsuranceDiscounts: React.FC = () => {
  const discounts = [{
    category: "Multi-Policy Bundle",
    description: "Home + Auto (+ Umbrella) - typically 5-25% savings",
    icon: <Shield className="h-5 w-5" />
  }, {
    category: "New/Impact-Resistant Roof",
    description: "Recent roof or Class 4 shingles - varies by carrier",
    icon: <Home className="h-5 w-5" />
  }, {
    category: "Security & Smart Home",
    description: "Monitored security, smart water shutoff devices",
    icon: <Zap className="h-5 w-5" />
  }, {
    category: "Claims-Free/Responsible Payer",
    description: "No recent claims, good payment history",
    icon: <CheckCircle className="h-5 w-5" />
  }, {
    category: "New Home/Recent Renovation",
    description: "Newer construction, major updates",
    icon: <Badge className="h-5 w-5" />
  }, {
    category: "Annual Discount Checkup",
    description: "Life changes = new discounts. We review annually.",
    icon: <FileText className="h-5 w-5" />
  }];
  
  return (
    <section className="py-12">
      <SectionHeader 
        title="Available Discounts for Fulshear Homeowners" 
        subtitle="Take advantage of these money-saving opportunities"
        variant="centered"
      />
      <InfoGrid columns={3}>
        {discounts.map((discount, index) => (
          <InfoCard 
            key={index}
            title={discount.category}
            icon={discount.icon}
            variant="secondary"
          >
            <p className="text-sm">{discount.description}</p>
          </InfoCard>
        ))}
      </InfoGrid>
    </section>
  );
};
export default {
  TexasCoverageOptions,
  LocalPricingFactors,
  InsuranceDiscounts
};