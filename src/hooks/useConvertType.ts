'use client';
import { useState } from 'react';
import { convertJsonToType } from '@/lib/jsonToType';
import { formatJson } from '@/lib/jsonToType';

export const useConvertType = () => {
  const [jsonInput, setJsonInput] = useState('');
  const [typeOutput, setTypeOutput] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleConvert = () => {
    if (!jsonInput.trim()) {
      setError('Please enter some JSON data');
      setTypeOutput('');
      return;
    }

    const result = convertJsonToType(jsonInput, 'RootType');

    if (result.success && result.typeDefinition) {
      setTypeOutput(result.typeDefinition);
      setError('');
    } else {
      setError(result.error || 'Conversion failed');
      setTypeOutput('');
    }
  };

  const handleFormat = () => {
    if (!jsonInput.trim()) {
      setError('Please enter some JSON data to format');
      return;
    }

    try {
      const formatted = formatJson(jsonInput);
      setJsonInput(formatted);
      setError('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to format JSON');
    }
  };

  const handleCopy = async () => {
    if (!typeOutput) return;

    try {
      await navigator.clipboard.writeText(typeOutput);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return {
    jsonInput,
    typeOutput,
    error,
    copied,
    handleConvert,
    handleFormat,
    handleCopy,
    setJsonInput,
    setTypeOutput,
    setError,
    setCopied,
  };
};
