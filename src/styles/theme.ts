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
      primary: '#EEEEF2',
      secondary: '#797D9A'
    }
  },
  typography: {
    fontFamily: 'Roboto'
  }
})
