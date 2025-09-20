import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Cross Creek Ranch",
    rating: 5,
    text: "When the hailstorm hit last spring, I was so grateful for the coverage guidance I received. The 1% wind/hail deductible saved me thousands, and the claims process was smooth.",
    savings: "$3,200"
  },
  {
    name: "Mike Rodriguez", 
    location: "Fulshear Creek",
    rating: 5,
    text: "Switching to the recommended multi-policy bundle saved us over $800 annually. The local expertise about Fulshear-specific risks was invaluable.",
    savings: "$800"
  },
  {
    name: "Jennifer Chen",
    location: "Weston Lakes",
    rating: 5,
    text: "The liability coverage calculator helped us realize we were underinsured. Now we have proper umbrella coverage for our family's assets and peace of mind.",
    savings: "Protected $2M"
  },
  {
    name: "David Thompson",
    location: "Firethorne",
    rating: 5,
    text: "The detailed explanation of Texas wind/hail deductibles helped us make an informed choice. Great local knowledge and honest advice.",
    savings: "$1,500"
  }
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="What Fulshear Homeowners Say" 
          subtitle="Real stories from your neighbors about their insurance experiences"
          variant="centered"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-medium">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                
                <Quote className="h-6 w-6 text-muted-foreground mb-3" />
                <p className="text-sm mb-4 italic">"{testimonial.text}"</p>
                
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  Saved: {testimonial.savings}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};