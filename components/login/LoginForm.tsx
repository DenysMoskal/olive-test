import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import theme from '@/theme';
import { loginSchema, FormData } from '@/components/login/types';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [eyeColor, setEyeColor] = useState('black');
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
    setEyeColor(theme.palette.primary.main);

    setTimeout(() => {
      setEyeColor('black');
    }, 300);
  };

  return (
    <Box maxWidth="451px" width="100%">
      <Typography
        variant="h2"
        component="p"
        fontSize={32}
        fontWeight={600}
        mb={5}
      >
        {t('login.welcome')}
        <br />
        {t('login.loginToContinue')}
      </Typography>

      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label={t('login.emailAddress')}
              variant="outlined"
              size="small"
              fullWidth
              error={!!errors.email}
              helperText={errors.email?.message}
              sx={{ mb: 3 }}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label={t('login.password')}
              variant="outlined"
              size="small"
              fullWidth
              type={showPassword ? 'text' : 'password'}
              error={!!errors.password}
              helperText={errors.password?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                      sx={{
                        transition: 'color 0.3s ease',
                        borderRadius: '8px',
                        '&:hover': {
                          backgroundColor: 'rgba(32, 85, 255, 0.08)',
                        },
                      }}
                    >
                      {showPassword ? (
                        <RemoveRedEyeOutlinedIcon
                          sx={{
                            color: eyeColor,
                            transition: 'color 0.3s ease',
                          }}
                        />
                      ) : (
                        <VisibilityOffOutlinedIcon
                          sx={{
                            color: eyeColor,
                            transition: 'color 0.3s ease',
                          }}
                        />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />

        <Button
          variant="contained"
          size="large"
          fullWidth
          type="submit"
          sx={{ mt: 2, mb: 2 }}
        >
          {t('login.loginButton')}
        </Button>
      </Box>

      <Box display="flex" justifyContent="space-between" mt={1}>
        <Link href="/forgot-password" underline="none">
          {t('login.forgotPassword')}
        </Link>
        <Link href="/signup" underline="none">
          {t('login.createAccount')}
        </Link>
      </Box>
    </Box>
  );
};
