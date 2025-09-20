import React from 'react';
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  variant?: 'default' | 'centered' | 'accent';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  variant = 'default',
  className
}) => {
  const getVariantStyles = (variant: string) => {
    switch (variant) {
      case 'centered':
        return 'text-center mb-12';
      case 'accent':
        return 'text-center mb-8 border-b border-accent/20 pb-6';
      default:
        return 'mb-8';
    }
  };

  return (
    <div className={cn(getVariantStyles(variant), className)}>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
};