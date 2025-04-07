'use client';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'he' : 'en';
    i18n.changeLanguage(newLang);
    document.dir = newLang === 'he' ? 'rtl' : 'ltr';
  };

  return (
    <Button
      onClick={toggleLanguage}
      variant="outlined"
      color="primary"
      size="small"
      sx={{ position: 'absolute', top: 16, right: 16 }}
    >
      {i18n.language === 'en' ? 'עברית' : 'English'}
    </Button>
  );
};

export default LanguageSwitcher;
