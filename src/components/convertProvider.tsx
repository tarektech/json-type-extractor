'use client';
import React, { createContext, useContext, ReactNode } from 'react';
import { useConvertType } from '@/hooks/useConvertType';

type ConvertTypeContextType = ReturnType<typeof useConvertType>;

const ConvertTypeContext = createContext<ConvertTypeContextType | undefined>(undefined);

export function ConvertTypeProvider({ children }: { children: ReactNode }) {
  const value = useConvertType();
  return (
    <ConvertTypeContext.Provider value={value}>
      {children}
    </ConvertTypeContext.Provider>
  );
}

export function useConvertTypeContext() {
  const context = useContext(ConvertTypeContext);
  if (!context) {
    throw new Error('useConvertTypeContext must be used within ConvertTypeProvider');
  }
  return context;
}