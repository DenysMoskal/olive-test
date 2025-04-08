import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Link,
  CircularProgress,
} from '@mui/material';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import theme from '@/theme';
import { registerSchema, RegisterFormData } from './types';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [eyeColor, setEyeColor] = useState('black');
  const { t } = useTranslation();
  const router = useRouter();

  const { registerUser, isLoading, isError, errorMessage } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    const success = await registerUser(data);

    if (success) {
      router.push('/login');
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
    setEyeColor(theme.palette.primary.main);

    setTimeout(() => {
      setEyeColor('black');
    }, 300);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
    setEyeColor(theme.palette.primary.main);

    setTimeout(() => {
      setEyeColor('black');
    }, 300);
  };

  return (
    <Box maxWidth="451px" width="100%">
      <Typography
        variant="h2"
        component="h1"
        fontSize={32}
        fontWeight={600}
        mb={4}
      >
        {t('register.title')}
      </Typography>

      <Link
        href="/login"
        underline="none"
        sx={{ display: 'inline-flex', alignItems: 'center', mb: 3 }}
      >
        <ArrowBackIcon
          sx={{
            color: theme.palette.primary.main,
            mx: 1,
            width: 32,
            height: 32,
          }}
        />
      </Link>

      {isError && errorMessage && (
        <Typography color="error" mb={2}>
          {errorMessage}
        </Typography>
      )}

      <Box component="form" onSubmit={handleSubmit(onSubmit)} px={1}>
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label={t('register.firstName')}
              variant="outlined"
              size="small"
              fullWidth
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
              sx={{ mb: 1.5 }}
              disabled={isLoading}
            />
          )}
        />

        <Controller
          name="lastName"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label={t('register.lastName')}
              variant="outlined"
              size="small"
              fullWidth
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
              sx={{ mb: 1.5 }}
              disabled={isLoading}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label={t('register.email')}
              variant="outlined"
              size="small"
              fullWidth
              error={!!errors.email}
              helperText={errors.email?.message}
              sx={{ mb: 1.5 }}
              disabled={isLoading}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label={t('register.password')}
              variant="outlined"
              size="small"
              fullWidth
              type={showPassword ? 'text' : 'password'}
              error={!!errors.password}
              helperText={
                errors.password?.message || t('register.passwordRequirements')
              }
              sx={{
                mb: 1.5,
                '& .MuiFormHelperText-root': {
                  color: '#667085',
                },
              }}
              disabled={isLoading}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                      disabled={isLoading}
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

        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label={t('register.confirmPassword')}
              variant="outlined"
              size="small"
              fullWidth
              type={showConfirmPassword ? 'text' : 'password'}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
              sx={{ mb: 1.5 }}
              disabled={isLoading}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle confirm password visibility"
                      onClick={handleClickShowConfirmPassword}
                      edge="end"
                      disabled={isLoading}
                      sx={{
                        transition: 'color 0.3s ease',
                        borderRadius: '8px',
                        '&:hover': {
                          backgroundColor: 'rgba(32, 85, 255, 0.08)',
                        },
                      }}
                    >
                      {showConfirmPassword ? (
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
          disabled={isLoading}
          sx={{ mt: 2 }}
        >
          {isLoading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            t('register.nextButton')
          )}
        </Button>
      </Box>
    </Box>
  );
}
