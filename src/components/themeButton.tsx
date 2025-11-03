import React from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

import {
  ThemeToggler,
  type ThemeSelection,
  type Resolved,
  type Direction,
} from '@/components/animate-ui/primitives/effects/theme-toggler';

interface ThemeTogglerDemoProps {
  direction: Direction;
}

export const ThemeButton = ({ direction }: ThemeTogglerDemoProps) => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Prevent hydration mismatch by only rendering after mount
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="cursor-pointer hover:text-primary transition-colors w-[24px] h-[24px]">
        {/* Placeholder to maintain layout */}
      </button>
    );
  }

  return (
    <ThemeToggler
      theme={theme as ThemeSelection}
      resolvedTheme={resolvedTheme as Resolved}
      setTheme={setTheme}
      direction={direction}
    >
      {({ effective, toggleTheme }) => {
        const nextTheme = effective === 'dark' ? 'light' : 'dark';

        return (
          <button
            className="cursor-pointer hover:text-primary transition-colors"
            onClick={() => toggleTheme(nextTheme)}
          >
            {effective === 'dark' ? <Moon /> : <Sun />}
          </button>
        );
      }}
    </ThemeToggler>
  );
};
