'use client';
import { Box } from '@mui/material';
import '../../lib/i18n';
import { LanguageSwitcher, LogoSection } from '@/components/common';
import { RegisterForm } from '@/components/register';

export default function Register() {
  return (
    <Box
      display="flex"
      width="100%"
      alignItems="center"
      justifyContent="center"
    >
      <LanguageSwitcher />
      <LogoSection />
      <RegisterForm />
    </Box>
  );
}
