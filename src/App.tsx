import { CssBaseline, ThemeProvider, Typography } from '@mui/material'
import { theme } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1" component="div">
        challenge
      </Typography>

      <CssBaseline />
    </ThemeProvider>
  )
}

export default App
