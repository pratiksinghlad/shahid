import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    navy: {
      50: '#e8edf5',
      100: '#c5d1e8',
      200: '#9fb3d8',
      300: '#7895c8',
      400: '#5b7fbd',
      500: '#3e69b2',
      600: '#2d5294',
      700: '#1e3a6e',
      800: '#152c56',
      900: '#0B1D3A',
      950: '#071428',
    },
    gold: {
      50: '#fdf8ec',
      100: '#f9edcc',
      200: '#f3dba0',
      300: '#edc96f',
      400: '#e6b73e',
      500: '#C9982A',
      600: '#a67d22',
      700: '#83621b',
      800: '#614913',
      900: '#3e2f0c',
    },
    charcoal: {
      50: '#f2f2f3',
      100: '#dadadc',
      200: '#c2c2c5',
      300: '#a9a9ad',
      400: '#919196',
      500: '#6E6E73',
      600: '#58585c',
      700: '#424245',
      800: '#2C2C2F',
      900: '#1A1A1D',
    },
  },
};

const fonts = {
  heading: `'Playfair Display', Georgia, serif`,
  body: `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`,
};

const styles = {
  global: {
    'html, body': {
      bg: 'brand.navy.950',
      color: 'whiteAlpha.900',
      scrollBehavior: 'smooth',
    },
    '::-webkit-scrollbar': {
      width: '6px',
    },
    '::-webkit-scrollbar-track': {
      bg: 'brand.navy.900',
    },
    '::-webkit-scrollbar-thumb': {
      bg: 'brand.gold.600',
      borderRadius: '3px',
    },
  },
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: '600',
      borderRadius: '4px',
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
      fontSize: 'sm',
    },
    variants: {
      gold: {
        bg: 'brand.gold.500',
        color: 'brand.navy.950',
        _hover: {
          bg: 'brand.gold.400',
          transform: 'translateY(-2px)',
          boxShadow: '0 8px 25px rgba(201, 152, 42, 0.35)',
        },
        _active: {
          bg: 'brand.gold.600',
          transform: 'translateY(0)',
        },
        transition: 'all 0.3s ease',
      },
      outline_gold: {
        bg: 'transparent',
        color: 'brand.gold.400',
        border: '2px solid',
        borderColor: 'brand.gold.500',
        _hover: {
          bg: 'brand.gold.500',
          color: 'brand.navy.950',
          transform: 'translateY(-2px)',
          boxShadow: '0 8px 25px rgba(201, 152, 42, 0.2)',
        },
        _active: {
          bg: 'brand.gold.600',
          transform: 'translateY(0)',
        },
        transition: 'all 0.3s ease',
      },
    },
  },
};

const theme = extendTheme({
  colors,
  fonts,
  styles,
  components,
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});

export default theme;
