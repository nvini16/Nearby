export const Colors = {
  primary: '#8ECDF4',
  primaryHover: '#72BCE9',
  primaryActive: '#5FA9D8',
  primarySoft: '#EAF6FD',

  background: '#FFFFFF',
  backgroundSoft: '#F8FBFD',

  surface: '#FFFFFF',
  surfaceBlue: '#F1F9FE',

  textPrimary: '#18313F',
  textSecondary: '#6B8491',
  textMuted: '#91A6B0',

  border: '#DCEAF1',
  divider: '#EAF1F4',

  success: '#5FB98A',
  warning: '#E5B85C',
  error: '#D96C75',
  info: '#72AEE0',
} as const;

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  huge: 40,
  section: 48,
  screen: 64,
} as const;

export const Radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 999,
} as const;

export const Typography = {
  display: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '700',
  },

  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '700',
  },

  subtitle: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
  },

  body: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
  },

  bodyMedium: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
  },

  small: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
  },

  caption: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
  },
} as const;

export const Shadows = {
  sm: {
    shadowColor: '#18313F',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },

  md: {
    shadowColor: '#18313F',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },

  lg: {
    shadowColor: '#18313F',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 6,
  },
} as const;