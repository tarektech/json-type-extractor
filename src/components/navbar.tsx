'use client';
import { Code2, Moon, Sun } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { useTheme } from 'next-themes';

export default function Navbar() {
  const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      };
  return (
    <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between gap-2">
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
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full shrink-0"
            aria-label="Toggle theme"
          >
            <Sun className="size-4 sm:size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute size-4 sm:size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>
      </header>
  )
}
