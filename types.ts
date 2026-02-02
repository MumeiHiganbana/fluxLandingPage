// Import React to resolve the missing React namespace for ReactNode
import React from 'react';

export interface Sensor {
  id: string;
  name: string;
  type: string;
  specs: string[];
  image: string;
  brand: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Challenge {
  number: number;
  title: string;
  description: string;
}