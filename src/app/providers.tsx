'use client';
import { useState } from 'react';
import { useGluedEmotionCache } from '../lib/emotionNextjsGlue';
import { CacheProvider } from '@emotion/react';
import { MantineProvider,ColorSchemeProvider,ColorScheme } from '@mantine/core';
import { SessionProvider } from "next-auth/react";

type Props = {
    children?: React.ReactNode;
  };

export function EmotionProvider({ children }: { children: JSX.Element }) {
  const cache = useGluedEmotionCache();
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <CacheProvider value={cache}>
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}> 
      <MantineProvider withGlobalStyles withNormalizeCSS emotionCache={cache}>
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
    </CacheProvider>
  );
}

export const NextAuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};
