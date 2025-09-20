import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageSquare, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const BUSINESS_DATA = {
  phone: "(346) 450-8384",
  phoneTel: "+13464508384"
};

interface CTASectionProps {
  title: string;
  description: string;
  variant?: 'default' | 'card' | 'inline';
  showSecondaryAction?: boolean;
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  variant = 'default',
  showSecondaryAction = true,
  className
}) => {
  const scrollToForm = () => {
    document.getElementById('compare-renewal')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  if (variant === 'card') {
    return (
      <Card className={cn("shadow-medium", className)}>
        <CardContent className="p-8 text-center">
          <h3 className="text-xl font-bold mb-4">{title}</h3>
          <p className="text-muted-foreground mb-6">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={() => window.location.href = `tel:${BUSINESS_DATA.phoneTel}`}
            >
              <Phone className="h-5 w-5" />
              Call {BUSINESS_DATA.phone}
            </Button>
            {showSecondaryAction && (
              <Button variant="cta" size="lg" onClick={scrollToForm}>
                <FileText className="h-5 w-5" />
                Get Quote Online
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (variant === 'inline') {
    return (
      <div className={cn("text-center py-8", className)}>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button 
            variant="call" 
            onClick={() => window.location.href = `tel:${BUSINESS_DATA.phoneTel}`}
          >
            <Phone className="h-4 w-4" />
            Call Now
          </Button>
          {showSecondaryAction && (
            <Button variant="outline" onClick={scrollToForm}>
              <MessageSquare className="h-4 w-4" />
              Text Quote
            </Button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("text-center", className)}>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          variant="hero" 
          size="lg" 
          onClick={() => window.location.href = `tel:${BUSINESS_DATA.phoneTel}`}
        >
          <Phone className="h-5 w-5" />
          Call {BUSINESS_DATA.phone}
        </Button>
        {showSecondaryAction && (
          <Button variant="cta" size="lg" onClick={scrollToForm}>
            <FileText className="h-5 w-5" />
            Get Quote Online
          </Button>
        )}
      </div>
    </div>
  );
};