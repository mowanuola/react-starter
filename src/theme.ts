import { createTheme } from '@mui/material/styles'
import tw, { theme as tailwindTheme } from 'twin.macro'

const theme = createTheme({
  spacing: 2,
  typography: {
    fontFamily: 'HK Grotesk',
  },
  palette: {
    primary: {
      main: tailwindTheme`colors.primary`,
      contrastText: tailwindTheme`colors.white`,
    },
    error: {
      main: tailwindTheme`colors.error`,
      contrastText: tailwindTheme`colors.white`,
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableTouchRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        size: 'large',
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          fontWeight: 700,
          textTransform: 'none',
        },
        containedPrimary: {
          ...tw`bg-primary`,
          '&.Mui-disabled:disabled': {
            backgroundColor: tailwindTheme`colors.grey`,
            color: tailwindTheme`colors.white`,
          },
        },
        outlinedPrimary: {
          borderColor: tailwindTheme`colors.grey`,
          color: tailwindTheme`colors.grey`,
          '&:hover': {
            backgroundColor: tailwindTheme`colors.grey`,
            borderColor: tailwindTheme`colors.grey`,
            color: tailwindTheme`colors.white`,
          },
        },
        sizeLarge: {
          height: '3.25rem',
          ...tw`px-8 text-base`,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: tailwindTheme`backgroundColor.light`,
          borderColor: tailwindTheme`borderColor.transparent`,
          caretColor: tailwindTheme`colors.primary`,
          borderWidth: 1,
          '&:hover': {
            borderColor: tailwindTheme`colors.primary` + '!important',
          },
          '&.Mui-focused': {
            borderWidth: '1px' + '!important',
            borderColor: tailwindTheme`colors.primary` + '!important',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: tailwindTheme`colors[dark-grey]`,
          position: 'relative',
          transform: 'none',
          '&:hover': {
            color: tailwindTheme`colors[dark-grey]` + '!important',
          },
          '&.Mui-focused': {
            color: tailwindTheme`colors[dark-grey]` + '!important',
          },
        },
      },
    },
  },
})

export default theme
