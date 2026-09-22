'use client';

import React from 'react';

interface ContentRendererProps {
  html: string;
  className?: string;
}

export default function ContentRenderer({ html, className = '' }: ContentRendererProps) {
  // Enhance external links to open in a new tab safely
  const enhancedHtml = html
    .replace(/<a\s+href="http([^"]*)"/gi, '<a href="http$1" target="_blank" rel="noopener noreferrer"')
    .replace(/<a\s+href="https([^"]*)"/gi, '<a href="https$1" target="_blank" rel="noopener noreferrer"');

  return (
    <div
      className={`sheet-prose max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: enhancedHtml }}
    />
  );
}
