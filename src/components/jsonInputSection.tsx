'use client';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Wand2 } from 'lucide-react';
import { Code2 } from 'lucide-react';
import { useConvertTypeContext } from './convertProvider';

export default function JsonInputSection() {
  const { jsonInput, setJsonInput, setError, handleConvert, handleFormat, error } = useConvertTypeContext();
  return (
    <Card className="backdrop-blur-sm bg-card/50 border-2 transition-all hover:border-primary/20">
      <CardHeader className="space-y-1 sm:space-y-1.5 pb-3 sm:pb-6">
        <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
          <span className="flex size-7 sm:size-8 items-center justify-center rounded-md bg-primary/10 text-primary text-sm sm:text-base">
            1
          </span>
          JSON Input
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm">
          Paste or type your JSON data below
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 sm:space-y-4">
        <Textarea
          value={jsonInput}
          onChange={(e) => {
            setJsonInput(e.target.value);
            setError('');
          }}
          placeholder='{"name": "John", "age": 30, "isActive": true}'
          className="h-[250px] sm:h-[350px] lg:h-[400px] font-mono text-xs sm:text-sm resize-none overflow-y-auto"
          aria-label="JSON input"
        />
        <div className="flex flex-col sm:flex-row gap-2">
          <Button
            onClick={handleConvert}
            className="w-full sm:flex-1 gap-2"
            size="lg"
          >
            <Wand2 className="size-4" />
            Convert to Type
          </Button>
          <Button
            onClick={handleFormat}
            variant="outline"
            className="w-full sm:w-auto gap-2"
            size="lg"
          >
            <Code2 className="size-4" />
            Format JSON
          </Button>
        </div>
        {error && (
          <div className="rounded-lg bg-destructive/10 border border-destructive/20 p-3 sm:p-4">
            <p className="text-xs sm:text-sm text-destructive font-medium wrap-break-word">
              {error}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
