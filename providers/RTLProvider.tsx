'use client';
import { ReactNode, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import theme from '@/theme';

interface RTLProviderProps {
  children: ReactNode;
}

const RTLProvider = ({ children }: RTLProviderProps) => {
  const { i18n } = useTranslation();
  const [direction, setDirection] = useState<'ltr' | 'rtl'>('ltr');

  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [rtlPlugin],
  });

  const cacheLtr = createCache({
    key: 'mui',
  });

  useEffect(() => {
    const dir = i18n.language === 'he' ? 'rtl' : 'ltr';
    setDirection(dir);
    document.dir = dir;
  }, [i18n.language]);

  const rtlTheme = createTheme({
    ...theme,
    direction: direction,
  });

  return (
    <CacheProvider value={direction === 'rtl' ? cacheRtl : cacheLtr}>
      <ThemeProvider theme={rtlTheme}>{children}</ThemeProvider>
    </CacheProvider>
  );
};

export default RTLProvider;
