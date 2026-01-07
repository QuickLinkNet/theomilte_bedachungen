export const COLORS = {
  primary: '#0066A1',
  primaryDark: '#005088',
  success: '#22c55e',
  successHover: '#16a34a',
  white: '#ffffff',
  text: {
    primary: '#1f2937',
    secondary: '#6b7280',
    light: '#ffffff',
  },
} as const;

export const BREAKPOINTS = {
  mobile: '0px',
  tablet: '768px',
  desktop: '1024px',
} as const;

export const CONTAINER_WIDTHS = {
  sm: 'max-w-3xl',
  md: 'max-w-4xl',
  lg: 'max-w-5xl',
  xl: 'max-w-6xl',
  full: 'max-w-full',
} as const;
