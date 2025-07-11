'use client';

import React from 'react';
import '../styles/shiny-text.css';


export default function ShinyText({ text, disabled = false, speed = 3, className = '' }) {
  return (
    <span
      className={`shiny-text ${disabled ? 'opacity-50' : ''} ${className}`}
      style={{
        '--shine-speed': `${speed}s`,
      }}
    >
      {text}
    </span>
  );
}
