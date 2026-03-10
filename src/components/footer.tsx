"use client";

import React from "react";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-8 sm:mt-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
          <div className="text-center">
            <h3 className="font-semibold text-sm sm:text-base mb-1">
              Type Extractor
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              JSON to TypeScript Converter
            </p>
          </div>

          <div className="flex items-center gap-8">
            <Link
              href="https://github.com/tarektech/json-type-extractor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors relative"
              aria-label="Visit GitHub profile"
            >
              <Github className="h-5 w-5 relative z-10" aria-hidden="true" />
              <span className="relative z-10">@tarektech</span>
            </Link>

            <Link
              href="https://www.linkedin.com/in/tarektech/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Visit LinkedIn profile"
            >
              <Linkedin className="h-5 w-5" aria-hidden="true" />
              <span>LinkedIn</span>
            </Link>
          </div>

          <div className="text-center">
            <p className="text-xs sm:text-sm text-muted-foreground">
              © {new Date().getFullYear()} tarektech. All rights reserved.
            </p>
            <p className="mt-1 text-xs text-muted-foreground/80">
              JSON conversion runs client-side in the browser.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
