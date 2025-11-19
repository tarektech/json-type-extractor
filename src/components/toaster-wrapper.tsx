'use client';

import { Toaster } from 'sonner';
import { useTheme } from 'next-themes';

export default function ToasterWrapper() {
  const { theme } = useTheme();

  return (
    <Toaster 
      richColors 
      position="bottom-right" 
      theme={theme as 'light' | 'dark' | 'system'}
    />
  );
}





