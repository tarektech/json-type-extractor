'use client';

import React from 'react';
import { Github } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';

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
          <Link
            href="https://github.com/tarektech/json-type-extractor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors relative"
            aria-label="Visit GitHub profile"
          >
            <motion.div
              className="absolute -inset-3 rounded-lg p-[2px]"
              animate={{
                background: [
                  'linear-gradient(90deg, rgba(147, 51, 234, 0.5), rgba(59, 130, 246, 0.5))',
                  'linear-gradient(180deg, rgba(59, 130, 246, 0.5), rgba(14, 165, 233, 0.5))',
                  'linear-gradient(270deg, rgba(14, 165, 233, 0.5), rgba(6, 182, 212, 0.5))',
                  'linear-gradient(360deg, rgba(6, 182, 212, 0.5), rgba(20, 184, 166, 0.5))',
                  'linear-gradient(90deg, rgba(20, 184, 166, 0.5), rgba(147, 51, 234, 0.5))',
                  'linear-gradient(90deg, rgba(147, 51, 234, 0.5), rgba(59, 130, 246, 0.5))',
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <div className="absolute inset-[2px] rounded-lg bg-background" />
            </motion.div>
            <Github className="h-5 w-5 relative z-10" />
            <span className="relative z-10">@tarektech</span>
          </Link>

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
