"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

interface AppProviderProps extends ThemeProviderProps {
  children: React.ReactNode;
}

export function Providers({ children, ...props }: AppProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
