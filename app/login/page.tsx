'use client';
import { Box } from '@mui/material';
import '../../lib/i18n';
import { LanguageSwitcher, LogoSection } from '@/components/common';
import { LoginForm } from '@/components/login';

export default function Login() {
  return (
    <Box
      display="flex"
      width="100%"
      alignItems="center"
      justifyContent="center"
    >
      <LanguageSwitcher />
      <LogoSection />
      <LoginForm />
    </Box>
  );
}
