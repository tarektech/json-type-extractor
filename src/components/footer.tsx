import React from 'react';
import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t mt-8 sm:mt-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
          {/* Main Title */}
          <div className="text-center">
            <h3 className="font-semibold text-sm sm:text-base mb-1">
              Type Extractor
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              JSON to TypeScript Converter
            </p>
          </div>

          {/* GitHub Link */}
          <a
            href="https://github.com/tarektech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Visit GitHub profile"
          >
            <Github className="h-5 w-5" />
            <span>@tarektech</span>
          </a>

          {/* Copyright and Rights */}
          <div className="text-center space-y-1">
            <p className="text-xs sm:text-sm text-muted-foreground">
              © {new Date().getFullYear()} tarektech. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/80">
              Open source under MIT License
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
