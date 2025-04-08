'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#2055FF',
    },
    background: {
      default: '#2055FF',
      paper: '#ffffff',
    },
    text: {
      primary: '#2055FF',
      secondary: '#101828',
    },
  },
  typography: {
    fontFamily: 'Inter',
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#2055FF',
          textDecoration: 'none',
          padding: '6px 8px',
          fontSize: '14px',
          fontWeight: 500,

          '&:hover': {
            backgroundColor: '#2055ff14',
            borderRadius: '8px',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            height: '48px',
            borderRadius: '8px',
            color: '#101828',
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#101828',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#2055FF',
              borderWidth: '2px',
            },
            '&.Mui-error': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#d32f2f',
              },
              '& .MuiInputLabel-root': {
                color: '#d32f2f',
              },
              '& .MuiInputBase-input': {
                color: '#d32f2f',
              },
            },
            '& .MuiInputBase-input': {
              padding: '12px 14px',
              height: '24px',
              boxSizing: 'border-box',
            },
            '& .MuiInputBase-input::placeholder': {
              color: 'rgb(102, 112, 133)',
              opacity: 1,
            },
          },
          '& .MuiInputLabel-root': {
            color: 'rgb(102, 112, 133)',
            transform: 'translate(14px, 14px) scale(1)',
          },
          '& .MuiInputLabel-shrink': {
            transform: 'translate(14px, -6px) scale(0.75)',
          },
          '& .MuiFormLabel-root.Mui-focused': {
            color: '#2055FF',
          },
          '& .MuiFormLabel-root.Mui-error': {
            color: '#d32f2f',
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 600,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        sizeLarge: {
          height: '56px',
          padding: '12.5px 14px',
        },
        containedPrimary: {
          backgroundColor: '#2055FF',
        },
      },
    },

    MuiButtonBase: {
      styleOverrides: {
        root: {
          '&.MuiIconButton-root': {
            '&[aria-label="toggle password visibility"]': {
              '& .MuiTouchRipple-child': {
                borderRadius: '8px',
              },
            },
          },
        },
      },
    },
  },
});

export default theme;
