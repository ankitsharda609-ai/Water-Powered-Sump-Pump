// Import React to provide the 'React' namespace for React.ReactNode
import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}