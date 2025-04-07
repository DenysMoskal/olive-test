'use client';
import {
  Typography,
  Container,
  Button,
  TextField,
  Link,
  Box,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import '../lib/i18n';

export default function Home() {
  const { t } = useTranslation();

  return (
    <Container maxWidth="md" sx={{ position: 'relative', pt: 5 }}>
      <LanguageSwitcher />
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="p" gutterBottom>
          {t('mui_test')}
        </Typography>
        <Button variant="contained" color="primary" size="large">
          {t('click_me')}
        </Button>
        <TextField
          id="outlined-basic"
          label={t('outlined')}
          variant="outlined"
          size="small"
          sx={{ mx: 2 }}
        />
        <Link href="#">{t('about')}</Link>
      </Box>
    </Container>
  );
}
