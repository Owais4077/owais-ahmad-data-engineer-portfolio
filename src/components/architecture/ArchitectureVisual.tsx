'use client';

import React from 'react';
import { DataSourcesVisual } from './DataSourcesVisual';
import { IngestionVisual } from './IngestionVisual';
import { BronzeVisual } from './BronzeVisual';
import { SilverVisual } from './SilverVisual';
import { GoldVisual } from './GoldVisual';
import { AnalyticsVisual } from './AnalyticsVisual';

interface ArchitectureVisualProps {
  step: string;
  className?: string;
}

export const ArchitectureVisual: React.FC<ArchitectureVisualProps> = ({ step, className = '' }) => {
  switch (step) {
    case '01':
      return <DataSourcesVisual className={className} />;
    case '02':
      return <IngestionVisual className={className} />;
    case '03':
      return <BronzeVisual className={className} />;
    case '04':
      return <SilverVisual className={className} />;
    case '05':
      return <GoldVisual className={className} />;
    case '06':
      return <AnalyticsVisual className={className} />;
    default:
      return <DataSourcesVisual className={className} />;
  }
};

