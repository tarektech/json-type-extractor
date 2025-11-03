'use client';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Button } from './ui/button';
import { Copy, Check, Code2 } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  oneDark,
  oneLight,
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useConvertTypeContext } from './convertProvider';
import { useTheme } from 'next-themes';

export default function JsonOutputSection() {
  const { typeOutput, copied, handleCopy } = useConvertTypeContext();
  const { theme } = useTheme();
  return (
    <Card className="backdrop-blur-sm bg-card/50 border-2 transition-all hover:border-primary/20">
      <CardHeader className="space-y-1 sm:space-y-1.5 pb-3 sm:pb-6">
        <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
          <span className="flex size-7 sm:size-8 items-center justify-center rounded-md bg-primary/10 text-primary text-sm sm:text-base">
            2
          </span>
          TypeScript Output
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm">
          Your generated TypeScript type definition
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 sm:space-y-4">
        <div className="relative min-h-[250px] sm:min-h-[350px] lg:min-h-[400px] rounded-lg border bg-muted/50 | h-[250px] sm:h-[350px] lg:h-[400px] font-mono text-xs sm:text-sm resize-none overflow-y-auto">
          {typeOutput ? (
            <>
              <div className="absolute top-2 right-2 z-10">
                <Button
                  onClick={handleCopy}
                  size="sm"
                  variant="secondary"
                  className="gap-1.5 sm:gap-2 shadow-sm text-xs sm:text-sm"
                >
                  {copied ? (
                    <>
                      <Check className="size-3 sm:size-4" />
                      <span className="hidden xs:inline">Copied!</span>
                      <span className="xs:hidden">✓</span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-3 sm:size-4" />
                      <span className="hidden xs:inline">Copy</span>
                    </>
                  )}
                </Button>
              </div>
              <SyntaxHighlighter
                language="typescript"
                style={theme === 'dark' ? oneDark : oneLight}
                customStyle={{
                  margin: 0,
                  padding: '0.75rem',
                  paddingTop: '3rem',
                  background: 'transparent',
                  fontSize: window.innerWidth < 640 ? '0.7rem' : '0.875rem',
                  minHeight: '250px',
                }}
                showLineNumbers
                wrapLines
                wrapLongLines
              >
                {typeOutput}
              </SyntaxHighlighter>
            </>
          ) : (
            <div className="flex items-center justify-center h-[250px] sm:h-[350px] lg:h-[400px] text-muted-foreground px-4">
              <div className="text-center space-y-2">
                <Code2 className="size-10 sm:size-12 mx-auto opacity-20" />
                <p className="text-xs sm:text-sm">
                  Your TypeScript type will appear here
                </p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
