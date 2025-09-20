import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Shield, DollarSign, AlertTriangle, CheckCircle } from "lucide-react";

const LiabilityCoverageCalculator: React.FC = () => {
  const [homeValue, setHomeValue] = useState([500000]);
  const [otherAssets, setOtherAssets] = useState('');
  const [teenDrivers, setTeenDrivers] = useState(false);
  const [hasPool, setHasPool] = useState(false);
  const [highRiskActivities, setHighRiskActivities] = useState(false);
  const [rentProperty, setRentProperty] = useState(false);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const calculateTotalAssets = () => {
    const otherAssetsValue = parseInt(otherAssets.replace(/[^0-9]/g, '')) || 0;
    return homeValue[0] + otherAssetsValue;
  };

  const getRecommendedCoverage = () => {
    const totalAssets = calculateTotalAssets();
    let baseRecommendation = Math.max(500000, totalAssets);
    
    // Risk multipliers
    if (teenDrivers) baseRecommendation = Math.max(baseRecommendation, 1000000);
    if (hasPool) baseRecommendation = Math.max(baseRecommendation, 1000000);
    if (highRiskActivities) baseRecommendation = Math.max(baseRecommendation, 1500000);
    if (rentProperty) baseRecommendation = Math.max(baseRecommendation, 2000000);
    
    return baseRecommendation;
  };

  const getUmbrellaRecommendation = () => {
    const totalAssets = calculateTotalAssets();
    const recommendedCoverage = getRecommendedCoverage();
    
    if (totalAssets > 500000 || recommendedCoverage > 500000) {
      return Math.max(1000000, Math.ceil(totalAssets / 1000000) * 1000000);
    }
    return 0;
  };

  const getRiskLevel = () => {
    const riskFactors = [teenDrivers, hasPool, highRiskActivities, rentProperty].filter(Boolean).length;
    if (riskFactors >= 3) return { level: 'High', color: 'destructive' };
    if (riskFactors >= 2) return { level: 'Elevated', color: 'warning' };
    if (riskFactors >= 1) return { level: 'Moderate', color: 'secondary' };
    return { level: 'Standard', color: 'success' };
  };

  const risk = getRiskLevel();
  const recommendedCoverage = getRecommendedCoverage();
  const umbrellaRecommendation = getUmbrellaRecommendation();

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-strong">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          Liability Coverage Calculator
        </CardTitle>
        <p className="text-muted-foreground">
          Calculate the right liability limits to protect your assets from lawsuits
        </p>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Asset Input Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <Label htmlFor="home-value" className="text-sm font-medium">
                  Home Value
                </Label>
                <span className="text-lg font-bold text-primary">
                  {formatCurrency(homeValue[0])}
                </span>
              </div>
              <Slider 
                id="home-value" 
                min={200000} 
                max={2000000} 
                step={50000} 
                value={homeValue} 
                onValueChange={setHomeValue} 
                className="w-full" 
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>$200K</span>
                <span>$2M</span>
              </div>
            </div>

            <div>
              <Label htmlFor="other-assets" className="text-sm font-medium mb-2 block">
                Other Assets (savings, investments, vehicles)
              </Label>
              <Input
                id="other-assets"
                type="text"
                placeholder="$0"
                value={otherAssets}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9]/g, '');
                  setOtherAssets(value ? `$${parseInt(value).toLocaleString()}` : '');
                }}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Risk Factors</h4>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="teen-drivers" 
                  checked={teenDrivers}
                  onCheckedChange={(checked) => setTeenDrivers(checked === true)}
                />
                <Label htmlFor="teen-drivers" className="text-sm">Teen drivers in household</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="pool" 
                  checked={hasPool}
                  onCheckedChange={(checked) => setHasPool(checked === true)}
                />
                <Label htmlFor="pool" className="text-sm">Swimming pool or hot tub</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="high-risk" 
                  checked={highRiskActivities}
                  onCheckedChange={(checked) => setHighRiskActivities(checked === true)}
                />
                <Label htmlFor="high-risk" className="text-sm">High-risk activities (trampoline, etc.)</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="rent-property" 
                  checked={rentProperty}
                  onCheckedChange={(checked) => setRentProperty(checked === true)}
                />
                <Label htmlFor="rent-property" className="text-sm">Rent out property (Airbnb/VRBO)</Label>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="border-t pt-8">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Asset Summary */}
            <Card className="shadow-medium">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <DollarSign className="h-5 w-5 text-success" />
                  <h4 className="font-semibold">Total Assets</h4>
                </div>
                <div className="text-2xl font-bold text-success mb-2">
                  {formatCurrency(calculateTotalAssets())}
                </div>
                <p className="text-xs text-muted-foreground">
                  Assets that could be at risk in a lawsuit
                </p>
              </CardContent>
            </Card>

            {/* Risk Assessment */}
            <Card className="shadow-medium">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="h-5 w-5 text-warning" />
                  <h4 className="font-semibold">Risk Level</h4>
                </div>
                <Badge variant={risk.color as any} className="text-lg px-3 py-1 mb-2">
                  {risk.level}
                </Badge>
                <p className="text-xs text-muted-foreground">
                  Based on your risk factors
                </p>
              </CardContent>
            </Card>

            {/* Recommended Coverage */}
            <Card className="shadow-medium">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold">Recommended</h4>
                </div>
                <div className="text-2xl font-bold text-primary mb-2">
                  {formatCurrency(recommendedCoverage)}
                </div>
                <p className="text-xs text-muted-foreground">
                  Homeowners liability limit
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Umbrella Recommendation */}
        {umbrellaRecommendation > 0 && (
          <div className="bg-gradient-hero p-6 rounded-lg text-white">
            <h4 className="text-xl font-bold mb-3">Umbrella Policy Recommended</h4>
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <p className="mb-4 opacity-90">
                  With {formatCurrency(calculateTotalAssets())} in assets, an umbrella policy provides additional protection beyond your homeowners liability limits.
                </p>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-2xl font-bold">
                      {formatCurrency(umbrellaRecommendation)}
                    </div>
                    <div className="text-sm opacity-75">Recommended umbrella coverage</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold">~$200-400</div>
                    <div className="text-sm opacity-75">Annual cost estimate</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Umbrella Benefits:</h5>
                <ul className="text-sm space-y-1 opacity-90">
                  <li>• Extra liability protection</li>
                  <li>• Broader coverage than home/auto</li>
                  <li>• Worldwide protection</li>
                  <li>• Legal defense costs</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Action Section */}
        <div className="text-center border-t pt-8">
          <h4 className="text-xl font-bold mb-4">Get Your Personalized Quote</h4>
          <p className="text-muted-foreground mb-6">
            Our local agents will review your specific situation and provide exact coverage recommendations and pricing.
          </p>
          <Button variant="hero" size="lg" onClick={() => document.getElementById('compare-renewal')?.scrollIntoView({ behavior: 'smooth' })}>
            <Shield className="h-5 w-5" />
            Get My Liability Quote
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LiabilityCoverageCalculator;