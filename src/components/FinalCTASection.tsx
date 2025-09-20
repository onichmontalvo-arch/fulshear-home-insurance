import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Clock, CheckCircle } from "lucide-react";

const BUSINESS_DATA = {
  phone: "(346) 450-8384",
  phoneTel: "+13464508384"
};

export const FinalCTASection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto shadow-large border-0 bg-white/95 backdrop-blur">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Protect Your Fulshear Home?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get your free quote and consultation today. Our local experts are standing by to help you find the perfect coverage for your home and budget.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-semibold">Free Consultation</h3>
                <p className="text-sm text-muted-foreground">No obligation quote</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-semibold">Quick & Easy</h3>
                <p className="text-sm text-muted-foreground">Most quotes in 15 minutes</p>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle className="h-8 w-8 text-primary mb-2" />
                <h3 className="font-semibold">Local Expertise</h3>
                <p className="text-sm text-muted-foreground">Fulshear area specialists</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <Button 
                variant="hero" 
                size="xl" 
                className="w-full md:w-auto md:px-12"
                onClick={() => window.location.href = `tel:${BUSINESS_DATA.phoneTel}`}
              >
                <Phone className="h-5 w-5 mr-2" />
                Call {BUSINESS_DATA.phone} for Free Quote
              </Button>
              
              <p className="text-sm text-muted-foreground">
                Available Monday-Friday 8 AM - 6 PM | Saturday 9 AM - 2 PM
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};