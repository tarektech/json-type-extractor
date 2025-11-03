'use client';
import { Code2 } from 'lucide-react';
import React from 'react';
import { ThemeButton } from './themeButton';


export default function Navbar() {


  return (
    <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto max-w-350 px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="flex size-8 sm:size-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
            <Code2 className="size-5 sm:size-6" />
          </div>
          <div className="min-w-0">
            <h1 className="text-base sm:text-xl font-bold tracking-tight truncate">
              Type Extractor
            </h1>
            <p className="text-[10px] sm:text-xs text-muted-foreground truncate">
              JSON to TypeScript Converter
            </p>
          </div>
        </div>
        <ThemeButton direction="ltr" />
    
      </div>
    </header>
  );
}
