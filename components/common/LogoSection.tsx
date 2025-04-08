import { Box, Typography, Fade, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import favicon from '../../public/favicon.png';
import theme from '@/theme';

export const LogoSection = () => {
  const [showLogo, setShowLogo] = useState(false);
  const { t } = useTranslation();

  const isMobile = useMediaQuery('(max-width:700px)');
  const isTablet = useMediaQuery('(min-width:701px) and (max-width:900px)');

  useEffect(() => {
    setShowLogo(true);
  }, []);

  if (isMobile) {
    return null;
  }

  const fontSize = isTablet ? 48 : 64;

  return (
    <Box
      maxWidth={479}
      width="100%"
      display="flex"
      alignItems="start"
      flexDirection="column"
      justifyContent="center"
      mr={6}
    >
      <Fade in={showLogo} timeout={1500}>
        <Box>
          <Image src={favicon} alt="Logo" width={35} height={50} />
        </Box>
      </Fade>
      <Typography
        variant="h1"
        component="p"
        fontSize={fontSize}
        fontWeight={400}
        my={5}
      >
        {t('slogan.take')}{' '}
        <Typography
          component="span"
          bgcolor={theme.palette.primary.main}
          borderRadius={'8px'}
          color="white"
          fontSize={fontSize}
          fontWeight={400}
          px={1}
        >
          {t('slogan.reality')}
        </Typography>
        <br />
        {t('slogan.toTheNext')}
        <br />
        {t('slogan.level')}
      </Typography>
    </Box>
  );
};
