import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      light: '#1F2029',
      main: '#181B23'
    },
    secondary: {
      main: '#805AD5'
    },
    background: {
      default: '#181B23'
    },
    text: {
      primary: '#181B23',
      secondary: '#EEEEF2'
    },
    error: {
      main: '#c62828'
    },
    success: {
      main: '#2e7d32'
    },
    info: {
      main: '#805AD5'
    }
  },
  typography: {
    fontFamily: 'Roboto'
  }
})
