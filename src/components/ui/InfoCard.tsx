import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface InfoCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'accent';
  className?: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  children,
  icon,
  variant = 'default',
  className
}) => {
  const getVariantStyles = (variant: string) => {
    switch (variant) {
      case 'primary':
        return 'border-l-4 border-l-primary';
      case 'secondary':
        return 'border-l-4 border-l-secondary';
      case 'accent':
        return 'border-l-4 border-l-accent';
      default:
        return '';
    }
  };

  return (
    <Card className={cn("shadow-medium", getVariantStyles(variant), className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {icon}
          {title}
        </CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};

interface InfoGridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}

export const InfoGrid: React.FC<InfoGridProps> = ({ 
  children, 
  columns = 3,
  className 
}) => {
  const getGridClass = (cols: number) => {
    switch (cols) {
      case 1: return 'grid-cols-1';
      case 2: return 'md:grid-cols-2';
      case 3: return 'md:grid-cols-2 lg:grid-cols-3';
      case 4: return 'md:grid-cols-2 lg:grid-cols-4';
      default: return 'md:grid-cols-3';
    }
  };

  return (
    <div className={cn("grid gap-6", getGridClass(columns), className)}>
      {children}
    </div>
  );
};