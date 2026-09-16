import { themes, type AppTheme } from 'glamui-react'

// Surface/background/text colors pulled from daisyui's built-in "emerald"
// and "forest" themes (oklch values converted to hex); brand colors use the
// logo gold instead of daisyui's or glamui's default palette.

const emeraldColors: AppTheme['colors'] = {
  ...themes.light.colors,
  brand: {
    primary: '#FFC62E', // Logo/Gold
    secondary: '#E5A900', // Logo/Gold Dark
    primaryAlpha: 'rgba(255, 198, 46, 0.25)',
  },
  text: {
    ...themes.light.colors.text,
    primary: '#333c4d', // emerald --color-base-content
  },
  border: {
    ...themes.light.colors.border,
    default: '#d1d1d1', // emerald --color-base-300
    subtle: '#e8e8e8', // emerald --color-base-200
    focus: '#FFC62E',
  },
  background: {
    ...themes.light.colors.background,
    page: '#ffffff', // emerald --color-base-100
    subtle: '#e8e8e8',
    muted: '#d1d1d1',
  },
  surface: {
    ...themes.light.colors.surface,
    default: '#ffffff',
    subtle: '#e8e8e8',
    hover: '#d1d1d1',
    muted: '#d1d1d1',
    elevated: '#ffffff',
  },
}

const darkColors: AppTheme['colors'] = {
  ...themes.dark.colors,
  brand: {
    primary: '#FFC62E', // Logo/Gold
    secondary: '#E5A900', // Logo/Gold Dark
    primaryAlpha: 'rgba(255, 198, 46, 0.25)',
  },
  text: {
    ...themes.dark.colors.text,
    primary: '#ecf9ff', // dark --color-base-content
  },
  border: {
    ...themes.dark.colors.border,
    default: '#09090b', // dark --color-neutral
    subtle: '#191e24', // dark --color-base-200
    focus: '#FFC62E',
  },
  background: {
    ...themes.dark.colors.background,
    page: '#1d232a', // dark --color-base-100
    subtle: '#191e24', // dark --color-base-200
    muted: '#15191e', // dark --color-base-300
  },
  surface: {
    ...themes.dark.colors.surface,
    default: '#191e24',
    subtle: '#191e24',
    hover: '#15191e',
    muted: '#09090b',
    elevated: '#09090b', // dark --color-neutral
    canvas: '#000000',
  },
}

export const glamuiEmeraldTheme: AppTheme = {
  ...themes.light,
  colors: emeraldColors,
}

export const glamuiDarkTheme: AppTheme = {
  ...themes.dark,
  colors: darkColors,
}

export const daisyThemeToGlamuiTheme = {
  emerald: glamuiEmeraldTheme,
  dark: glamuiDarkTheme,
} as const

export type DaisyThemeName = keyof typeof daisyThemeToGlamuiTheme
