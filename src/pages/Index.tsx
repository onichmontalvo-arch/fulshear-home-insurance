import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Phone, MessageSquare, FileText, Shield, CheckCircle, DollarSign, Home, Users, Zap, Award, Clock, Star, MapPin } from "lucide-react";
import heroImage from "@/assets/fulshear-hero.jpg";
import { LocalPricingFactors, InsuranceDiscounts } from "@/components/TexasSpecificSections";
import { FAQSection } from "@/components/FAQSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { ConsolidatedCoverageSection } from "@/components/ConsolidatedCoverageSection";
import { ConsolidatedTexasSection } from "@/components/ConsolidatedTexasSection";
import { CTASection } from "@/components/ui/CTASection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import LiabilityCoverageCalculator from "@/components/LiabilityCoverageCalculator";

// Business Data
const BUSINESS_DATA = {
  name: "Fulshear Insurance Quotes",
  phone: "(346) 450-8384",
  phoneTel: "+13464508384",
  city: "Fulshear, TX",
  county: "Fort Bend County",
  neighborhoods: ["Cross Creek Ranch", "Fulbrook", "Weston Lakes", "Jordan Ranch", "Polo Ranch"],
  priceNote: "$847",
  savingsRange: "$200–$800",
  freebieTitle: "Wind/Hail 1% vs 2% — What It Really Costs on a $550,000 Home"
};

// Sticky Mobile CTA Component
const StickyMobileCTA: React.FC = () => {
  return <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t shadow-strong p-4 md:hidden">
      <div className="flex gap-2">
        <Button variant="call" size="sm" className="flex-1" onClick={() => window.location.href = `tel:${BUSINESS_DATA.phoneTel}`}>
          <Phone className="h-4 w-4" />
          Call
        </Button>
        <Button variant="hero" size="sm" className="flex-1" onClick={() => document.getElementById('compare-renewal')?.scrollIntoView({
        behavior: 'smooth'
      })}>
          <MessageSquare className="h-4 w-4" />
          Text/Compare
        </Button>
      </div>
      <p className="text-xs text-center text-muted-foreground mt-1">Compare My Renewal — Call • Text • Start</p>
    </div>;
};

// Interactive Dwelling Calculator Component
const InteractiveDwellingCalculator: React.FC = () => {
  const [dwellingAmount, setDwellingAmount] = useState([500000]);
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };
  const calculateDeductible = (percentage: number) => {
    return dwellingAmount[0] * (percentage / 100);
  };
  return <div className="bg-muted p-4 rounded-lg">
      <h4 className="font-semibold mb-3">Interactive Deductible Calculator</h4>
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <Label htmlFor="dwelling-slider" className="text-sm font-medium">
            Dwelling Coverage Amount
          </Label>
          <span className="text-lg font-bold text-primary">
            {formatCurrency(dwellingAmount[0])}
          </span>
        </div>
        <Slider id="dwelling-slider" min={200000} max={1000000} step={25000} value={dwellingAmount} onValueChange={setDwellingAmount} className="w-full" />
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>$200K</span>
          <span>$1M</span>
        </div>
      </div>
      
      <div className="space-y-3">
        <h5 className="font-medium text-sm">Your Wind/Hail Deductible Options:</h5>
        <div className="grid grid-cols-1 gap-3">
          <div className="flex justify-between items-center p-3 bg-card rounded">
            <div>
              <span className="font-medium">1% Deductible</span>
              <p className="text-xs text-muted-foreground">Lower out-of-pocket, higher premium</p>
            </div>
            <span className="font-bold text-success">
              {formatCurrency(calculateDeductible(1))}
            </span>
          </div>
          
          <div className="flex justify-between items-center p-3 bg-card rounded">
            <div>
              <span className="font-medium">2% Deductible</span>
              <p className="text-xs text-muted-foreground">Balanced option, most popular</p>
            </div>
            <span className="font-bold text-warning">
              {formatCurrency(calculateDeductible(2))}
            </span>
          </div>
          
          <div className="flex justify-between items-center p-3 bg-card rounded">
            <div>
              <span className="font-medium">5% Deductible</span>
              <p className="text-xs text-muted-foreground">Higher out-of-pocket, lower premium</p>
            </div>
            <span className="font-bold text-destructive">
              {formatCurrency(calculateDeductible(5))}
            </span>
          </div>
        </div>
      </div>
    </div>;
};

// Hero Section Component
const HeroSection: React.FC = () => {
  return <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: `linear-gradient(135deg, rgba(46, 126, 237, 0.9), rgba(34, 197, 94, 0.8)), url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Homeowners Insurance in {BUSINESS_DATA.city}
          </h1>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-300">
              If you're paying more than {BUSINESS_DATA.priceNote} for home insurance in Fulshear, you may be paying too much.
            </h2>
            
            <p className="text-lg md:text-xl mb-6 opacity-95">
              Text or upload your renewal and we'll beat it or explain exactly why not—with the right wind/hail, liability, and discount setup for your address.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
              <Button variant="hero" size="xl" onClick={() => window.location.href = `tel:${BUSINESS_DATA.phoneTel}`} className="min-w-48">
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
              
              
              
              <Button variant="cta" size="xl" className="min-w-48" onClick={() => document.getElementById('compare-renewal')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                <FileText className="h-5 w-5" />
                Start Online Quote
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                A-rated carriers
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                5-star local reviews
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                Independent, not captive
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

// Compare Renewal Form Component
const CompareRenewalForm: React.FC = () => {
  const [formData, setFormData] = useState({
    address: '',
    currentCarrier: '',
    renewalDate: '',
    windHailDeductible: '',
    liabilityLimit: '',
    phone: '',
    consentToText: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consentToText) {
      toast.error("Please consent to text messaging to proceed");
      return;
    }
    setIsSubmitted(true);
    toast.success("Got it — we're on it. A local agent is reviewing your renewal now.");
  };
  if (isSubmitted) {
    return <Card className="w-full max-w-2xl mx-auto shadow-medium">
        <CardContent className="p-8 text-center">
          <CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2 text-success">Got it — we're on it!</h3>
          <p className="text-lg text-muted-foreground">
            A local agent is reviewing your renewal now. If it's after hours, we'll text you a time for tomorrow.
          </p>
        </CardContent>
      </Card>;
  }
  return <Card className="w-full max-w-2xl mx-auto shadow-medium">
      <CardHeader>
        <CardTitle className="text-2xl">Compare My Renewal (Fast)</CardTitle>
        <CardDescription className="text-base">
          Show us your current setup. We'll hunt every discount, fix costly gaps, and tell you straight if you're already in a great spot.
        </CardDescription>
      </CardHeader>
      
    </Card>;
};

// Value Hook Component
const ValueHook: React.FC = () => {
  return <Card className="max-w-2xl mx-auto shadow-medium border-l-4 border-l-accent">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="bg-gradient-accent p-3 rounded-full">
            <DollarSign className="h-6 w-6 text-accent-foreground" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">
              Homes like yours in Fulshear saved {BUSINESS_DATA.savingsRange} last year
            </h3>
            <p className="text-muted-foreground mb-4">
              Typical wins: updated roof info, right-sized wind/hail deductibles, and unlocked discounts you actually qualify for.
            </p>
            
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Free Mini-Report:</h4>
              <p className="text-sm font-medium text-primary">{BUSINESS_DATA.freebieTitle}</p>
              <p className="text-xs text-muted-foreground mt-1">
                Delivered by email/text after your request
              </p>
            </div>
            
            <p className="text-xs text-muted-foreground mt-3">
              Examples are illustrations; savings vary by carrier and risk.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>;
};

// Coverage Table Component  
const CoverageTable: React.FC = () => {
  const [annualPremium, setAnnualPremium] = useState('');
  return null;
};

// Main Index Component
const Index: React.FC = () => {
  return <div className="min-h-screen">
      {/* SEO Meta Tags in Head */}
      <title>Homeowners Insurance in Fulshear, TX | Same-Day Quotes & Bundle - {BUSINESS_DATA.name}</title>
      
      <StickyMobileCTA />
      
      <HeroSection />
      
      <section id="compare-renewal" className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            <CompareRenewalForm />
            <ValueHook />
          </div>
        </div>
      </section>
      
      <CoverageTable />
      
      {/* ADDED: Embedded Form Section */}
      
      
      {/* Consolidated Texas Coverage and Requirements */}
      <ConsolidatedTexasSection />
      <ConsolidatedCoverageSection />
      
      {/* Local Pricing Factors */}
      <LocalPricingFactors />
      
      {/* Discounts Section */}
      <InsuranceDiscounts />
      
      {/* Claims Process Section */}
      
      
      {/* Neighborhoods Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Neighborhoods We Serve</h2>
              <p className="text-lg text-muted-foreground">
                Local expertise throughout {BUSINESS_DATA.county}
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
              {BUSINESS_DATA.neighborhoods.map(neighborhood => <Card key={neighborhood} className="shadow-medium hover:shadow-strong transition-smooth cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="bg-gradient-primary p-3 rounded-full w-fit mx-auto mb-3">
                      <MapPin className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-sm">{neighborhood}</h4>
                    <p className="text-xs text-muted-foreground mt-1">Insurance Quotes</p>
                  </CardContent>
                </Card>)}
            </div>
            
            <div className="text-center bg-card p-6 rounded-lg shadow-medium">
              <h3 className="text-xl font-bold mb-2">Greater Fort Bend County Coverage</h3>
              <p className="text-muted-foreground mb-4">
                Local agents who understand your specific area risks, builder quality, and claims history
              </p>
              <div className="text-sm text-muted-foreground">
                <p><strong>Service Area:</strong> Fulshear, Richmond, Rosenberg, Sugar Land, Katy, Cinco Ranch</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ADDED: Enhanced SEO Content Sections */}
      
      {/* Comprehensive Coverage Analysis Section */}
      <section id="coverage-breakdown" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Complete Coverage Analysis for Fulshear Homes (HO-3/HO-5 Policies)
            </h2>
            
            <div className="prose prose-lg max-w-none mb-12 text-center">
              <p className="text-muted-foreground">
                Texas homeowners policies follow standard structures but require local expertise to set appropriate limits. 
                Understanding each coverage section helps ensure proper protection without overpaying for unnecessary limits.
              </p>
            </div>
            
            <div className="space-y-8">
              <Card className="shadow-strong">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Home className="h-6 w-6 text-primary" />
                    Coverage A — Dwelling Protection
                  </CardTitle>
                  <CardDescription>The foundation of your homeowners policy</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">What's Covered</h4>
                      <p className="text-muted-foreground mb-4">
                        Your home's structure including walls, roof, built-in appliances, permanently installed fixtures, 
                        and attached structures like covered patios or attached garages.
                      </p>
                      
                      <h4 className="font-semibold mb-3 text-primary">Fulshear-Specific Considerations</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Current replacement costs: $180-$250 per sq ft</li>
                        <li>• Premium finishes add 25-50% to base costs</li>
                        <li>• Covered outdoor living spaces are popular here</li>
                        <li>• Roof pitch and materials affect calculations</li>
                        <li>• Masonry percentages impact wind resistance credits</li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted p-6 rounded-lg">
                      <h4 className="font-semibold mb-3">Setting the Right Limit</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        We calculate replacement cost using current Fulshear construction standards, accounting for your home's 
                        specific features, architectural details, and quality of finishes.
                      </p>
                      
                      <div className="space-y-3">
                        <div className="bg-card p-3 rounded">
                          <div className="font-medium text-success text-sm">Replacement Cost (RCV)</div>
                          <div className="text-xs text-muted-foreground">Pays to rebuild regardless of age - preferred option</div>
                        </div>
                        
                        <div className="bg-card p-3 rounded">
                          <div className="font-medium text-warning text-sm">Extended Replacement Cost</div>
                          <div className="text-xs text-muted-foreground">Adds 25-50% buffer for cost overruns</div>
                        </div>
                        
                        <div className="bg-card p-3 rounded">
                          <div className="font-medium text-accent text-sm">Ordinance & Law</div>
                          <div className="text-xs text-muted-foreground">Covers upgrades required by current codes</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-strong">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Shield className="h-6 w-6 text-secondary" />
                    Coverage B — Other Structures
                  </CardTitle>
                  <CardDescription>Detached buildings and landscape features</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-secondary">Common Fulshear Structures</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• <strong>Detached garages:</strong> Often 2-3 car capacity ($30K-60K+)</li>
                        <li>• <strong>Pool houses/cabanas:</strong> Popular luxury amenity ($20K-100K+)</li>
                        <li>• <strong>Pergolas/gazebos:</strong> Outdoor entertainment spaces ($5K-25K)</li>
                        <li>• <strong>Storage sheds:</strong> Various sizes and quality ($2K-15K)</li>
                        <li>• <strong>Fencing:</strong> Property perimeter protection ($10K-40K+)</li>
                        <li>• <strong>Retaining walls:</strong> Drainage and landscaping ($5K-30K)</li>
                        <li>• <strong>Driveways/walkways:</strong> Concrete/stone installations</li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted p-6 rounded-lg">
                      <h4 className="font-semibold mb-3">Coverage Strategy</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Standard policies provide 10% of Coverage A for other structures. Many Fulshear properties 
                        exceed this with extensive outdoor improvements.
                      </p>
                      
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between p-2 bg-card rounded">
                          <span>$500K dwelling × 10%:</span>
                          <span className="font-medium">$50K default</span>
                        </div>
                        <div className="flex justify-between p-2 bg-card rounded">
                          <span>Typical upgrade needed:</span>
                          <span className="font-medium text-warning">$75K-$125K</span>
                        </div>
                      </div>
                      
                      <p className="text-xs text-muted-foreground mt-3">
                        We inventory your structures and recommend appropriate limits based on replacement costs.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-strong">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Users className="h-6 w-6 text-accent" />
                    Coverage C — Personal Property
                  </CardTitle>
                  <CardDescription>Your belongings and personal possessions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-accent">What's Protected</h4>
                      <p className="text-muted-foreground text-sm mb-4">
                        Furniture, clothing, electronics, appliances, tools, sporting goods, and other personal belongings 
                        both inside your home and temporarily away from home.
                      </p>
                      
                      <h4 className="font-semibold mb-3 text-accent">Special Limits to Know</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Jewelry, watches, furs: Often $1,000-$2,500 limit</li>
                        <li>• Firearms and sporting equipment: $2,500 typical</li>
                        <li>• Computer equipment: $5,000-$10,000 usually</li>
                        <li>• Art, antiques, collectibles: Low sub-limits</li>
                        <li>• Cash and precious metals: Very limited</li>
                        <li>• Business equipment: Often excluded</li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted p-6 rounded-lg">
                      <h4 className="font-semibold mb-3">Replacement Cost vs ACV</h4>
                      <div className="space-y-3">
                        <div className="bg-card p-3 rounded">
                          <div className="font-medium text-success text-sm">Replacement Cost</div>
                          <div className="text-xs text-muted-foreground">Buys new equivalent item - recommended</div>
                        </div>
                        
                        <div className="bg-card p-3 rounded">
                          <div className="font-medium text-warning text-sm">Actual Cash Value</div>
                          <div className="text-xs text-muted-foreground">Pays depreciated value - avoid if possible</div>
                        </div>
                      </div>
                      
                      <h4 className="font-semibold mb-2 mt-4">Scheduling High-Value Items</h4>
                      <p className="text-xs text-muted-foreground">
                        Items over sub-limits should be individually listed with appraisals for full protection.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-strong">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Clock className="h-6 w-6 text-green-500" />
                    Coverage D — Loss of Use (Additional Living Expenses)
                  </CardTitle>
                  <CardDescription>Temporary housing during repairs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-green-600">When It Applies</h4>
                      <p className="text-muted-foreground text-sm mb-4">
                        Pays additional costs when your home is uninhabitable due to covered damage. 
                        Covers the difference between your normal living expenses and temporary housing costs.
                      </p>
                      
                      <h4 className="font-semibold mb-3 text-green-600">Covered Expenses</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Hotel or rental home costs</li>
                        <li>• Restaurant meals (vs. home cooking)</li>
                        <li>• Laundry and dry cleaning</li>
                        <li>• Additional transportation</li>
                        <li>• Storage of undamaged belongings</li>
                        <li>• Pet boarding if necessary</li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted p-6 rounded-lg">
                      <h4 className="font-semibold mb-3">Local Cost Considerations</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Fulshear/Katy area temporary housing costs vary significantly. Quality comparable 
                        to your home affects displacement costs.
                      </p>
                      
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between p-2 bg-card rounded">
                          <span>Extended stay hotels:</span>
                          <span className="font-medium">$100-200/night</span>
                        </div>
                        <div className="flex justify-between p-2 bg-card rounded">
                          <span>Short-term rentals:</span>
                          <span className="font-medium">$200-500/night</span>
                        </div>
                        <div className="flex justify-between p-2 bg-card rounded">
                          <span>Luxury temp housing:</span>
                          <span className="font-medium">$300-800/night</span>
                        </div>
                      </div>
                      
                      <p className="text-xs text-muted-foreground mt-3">
                        Typical policies provide 20-30% of Coverage A. We help determine appropriate limits.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-strong">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <DollarSign className="h-6 w-6 text-orange-500" />
                    Personal Liability & Medical Payments
                  </CardTitle>
                  <CardDescription>Protection against lawsuits and injury claims</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-orange-600">Liability Coverage</h4>
                      <p className="text-muted-foreground text-sm mb-4">
                        Protects you if someone is injured on your property or if you accidentally damage another's property. 
                        Covers legal defense costs even if you're not ultimately liable.
                      </p>
                      
                      <h4 className="font-semibold mb-3 text-orange-600">Common Limit Options</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• $100,000: Minimum, rarely adequate</li>
                        <li>• $300,000: Common starting point</li>
                        <li>• $500,000: Better protection level</li>
                        <li>• $1,000,000: Recommended for most</li>
                      </ul>
                      
                      <h4 className="font-semibold mb-3 text-orange-600">Medical Payments</h4>
                      <p className="text-xs text-muted-foreground">
                        Pays medical expenses for guests injured on your property regardless of fault. 
                        Typical limits: $1,000-$5,000 per person.
                      </p>
                    </div>
                    
                    <div className="bg-muted p-6 rounded-lg">
                      <h4 className="font-semibold mb-3">Fulshear Risk Factors</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• <strong>Pools/hot tubs:</strong> Drowning liability exposure</li>
                        <li>• <strong>Trampolines:</strong> Injury risk to children</li>
                        <li>• <strong>Large properties:</strong> More visitor exposure</li>
                        <li>• <strong>Teen drivers:</strong> Higher liability needs</li>
                        <li>• <strong>Home businesses:</strong> Additional exposures</li>
                        <li>• <strong>Short-term rentals:</strong> Commercial activity</li>
                      </ul>
                      
                      <div className="mt-4 p-3 bg-card rounded">
                        <h5 className="font-semibold text-sm text-primary mb-1">Umbrella Policy Recommendation</h5>
                        <p className="text-xs text-muted-foreground">
                          $1M+ umbrella policies provide additional liability protection and broader coverage 
                          for relatively low cost ($200-400 annually).
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-12 bg-gradient-hero p-8 rounded-lg text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Complete Coverage Review Service</h3>
              <p className="mb-6 opacity-90">
                Our comprehensive analysis ensures every coverage section is properly sized for your specific property, 
                lifestyle, and risk profile. No guesswork—just proper protection.
              </p>
              <Button asChild variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
                <a href={`tel:${BUSINESS_DATA.phoneTel}`}>Click to Call</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* Calculators Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="Interactive Coverage Calculators"
              subtitle="Use our tools to explore different coverage scenarios"
              variant="centered"
            />
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Dwelling & Wind/Hail Calculator</h3>
                <InteractiveDwellingCalculator />
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Liability Coverage Calculator</h3>
                <LiabilityCoverageCalculator />
              </div>
            </div>
            
            <div className="mt-8">
              <CTASection
                title="Get Personalized Calculations"
                description="Our local agents will review your specific property and provide detailed coverage recommendations."
                variant="card"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Claims Process Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Texas Deductibles & Roof Coverage Strategy for Fulshear Homes
            </h2>
            
            <div className="prose prose-lg max-w-none mb-12 text-center">
              <p className="text-muted-foreground">
                Texas insurance presents unique deductible structures and roof coverage considerations. 
                Understanding these options helps balance premium costs against out-of-pocket exposure during claims.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <Card className="shadow-strong">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <DollarSign className="h-6 w-6 text-primary" />
                    Wind/Hail Percentage Deductibles Explained
                  </CardTitle>
                  <CardDescription>Understanding Texas percentage deductible structure</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <p className="text-muted-foreground mb-4">
                        Unlike traditional fixed-dollar deductibles, Texas wind/hail deductibles calculate as 
                        a percentage of your Coverage A (dwelling) limit. This shifts with your coverage amount.
                      </p>
                      
                      <InteractiveDwellingCalculator />
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Strategic Decision Factors</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• <strong>Roof age:</strong> Newer roofs (0-10 years) may justify 2% deductible</li>
                        <li>• <strong>Financial capacity:</strong> Can you handle $15K+ out-of-pocket?</li>
                        <li>• <strong>Premium savings:</strong> Higher % typically saves 15-30% annually</li>
                        <li>• <strong>Claim frequency:</strong> Consider local hail patterns and exposure</li>
                        <li>• <strong>Risk tolerance:</strong> Balance savings vs. potential large expense</li>
                      </ul>
                    </div>
                    
                    <div className="bg-card p-4 rounded-lg">
                      <h5 className="font-semibold text-sm text-accent mb-2">Expert Recommendation Process</h5>
                      <p className="text-xs text-muted-foreground">
                        We analyze your specific roof condition, local exposure patterns, and financial preferences 
                        to recommend optimal deductible levels. No one-size-fits-all approach.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-strong">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Home className="h-6 w-6 text-secondary" />
                    Roof Coverage Valuation Methods
                  </CardTitle>
                  <CardDescription>RCV vs ACV and roof schedule implications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-success">Replacement Cost Value (RCV) - Preferred</h4>
                      <p className="text-muted-foreground text-sm mb-3">
                        Pays full cost to replace roof with like kind and quality materials regardless of age. 
                        Newer roofs typically receive RCV automatically, but older roofs may require endorsements.
                      </p>
                      
                      <div className="bg-success/10 p-3 rounded-lg">
                        <h5 className="font-medium text-sm mb-1">RCV Advantages</h5>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Full replacement cost without depreciation</li>
                          <li>• No age-based penalties during claims</li>
                          <li>• Protects your investment completely</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-warning">Actual Cash Value (ACV) - Avoid When Possible</h4>
                      <p className="text-muted-foreground text-sm mb-3">
                        Pays replacement cost minus depreciation based on age and condition. 
                        Many carriers automatically apply ACV to roofs 10-15+ years old.
                      </p>
                      
                      <div className="bg-warning/10 p-3 rounded-lg">
                        <h5 className="font-medium text-sm mb-1">ACV Example Impact</h5>
                        <div className="text-xs space-y-1">
                          <div className="flex justify-between">
                            <span>Replacement cost:</span>
                            <span>$25,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span>15-year roof depreciation:</span>
                            <span className="text-destructive">-$12,500</span>
                          </div>
                          <div className="flex justify-between font-medium">
                            <span>ACV payout:</span>
                            <span>$12,500</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-accent">Roof Surface/Damage Schedules</h4>
                      <p className="text-muted-foreground text-sm mb-3">
                        Some Texas carriers use graduated depreciation schedules that transition from RCV 
                        to increasing ACV percentages as roofs age.
                      </p>
                      
                      <div className="bg-muted p-3 rounded-lg">
                        <h5 className="font-medium text-sm mb-2">Typical Schedule Example</h5>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div>Years 1-10: 100% RCV</div>
                          <div>Years 11-15: 75% RCV</div>
                          <div>Years 16-20: 50% RCV</div>
                          <div>Years 21+: ACV only</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-card p-4 rounded-lg">
                      <h5 className="font-semibold text-sm text-secondary mb-2">RCV Buy-Back Options</h5>
                      <p className="text-xs text-muted-foreground">
                        When carriers apply ACV or schedules, we explore RCV endorsement options to 
                        restore full replacement cost coverage for additional premium.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            
          </div>
        </div>
      </section>
      
      
      
      {/* Claims Help Section */}
      <section id="claims-help" className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Home Insurance Claims & Storm Help Guide for Fulshear Homeowners</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Response Steps</h3>
                <div className="space-y-3">
                  {["Document damage (photos/video)", "Mitigate further loss (tarp/stop leak)", "Report your claim—we'll coordinate next steps", "Track expenses for reimbursement"].map((step, index) => <div key={index} className="flex items-center gap-3 p-3 bg-card rounded-lg shadow-soft">
                      <div className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </div>
                      <span className="text-sm">{step}</span>
                    </div>)}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Downloadable Resources</h3>
                <div className="space-y-3">
                  <Card className="shadow-soft">
                    <CardContent className="p-4 flex items-center gap-3">
                      <FileText className="h-8 w-8 text-primary" />
                      <div>
                        <h4 className="font-semibold">Hail & Hurricane Season Checklist</h4>
                        <p className="text-xs text-muted-foreground">PDF preparation guide</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="shadow-soft">
                    <CardContent className="p-4 flex items-center gap-3">
                      <FileText className="h-8 w-8 text-secondary" />
                      <div>
                        <h4 className="font-semibold">Home Inventory Spreadsheet</h4>
                        <p className="text-xs text-muted-foreground">Track your belongings</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-card p-6 rounded-lg shadow-medium">
              <p className="text-muted-foreground leading-relaxed">
                When storms hit Fulshear, start with safety: check for hazards, shut off utilities if needed, and avoid downed lines. Document everything—clear, time-stamped photos and videos of roof, gutters, windows, fence, and any interior water damage—then make only temporary repairs (tarp, board-up) to prevent further loss and save all receipts. Notify your insurer promptly with your policy number and a concise damage summary, ask about your deductible and any wind/hail or hurricane endorsements, and confirm whether Additional Living Expenses (ALE) apply if you can't stay at home. Meet the adjuster on-site with your contractor's written estimate, keep a claim journal (dates, names, decisions), and get multiple bids from reputable, insured pros—be cautious of door-to-door offers. Remember: standard home policies typically exclude flood; if water rose from the ground, that's an NFIP flood claim. After larger events, monitor Fort Bend County emergency updates for debris pickup and permits, and consult the Texas Department of Insurance for guidance if you hit a snag.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <FAQSection />
      
      <TestimonialsSection />
      
      <FinalCTASection />
      
    </div>;
};
export default Index;