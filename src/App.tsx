import { CssBaseline, ThemeProvider, Typography } from '@mui/material'
import { Header } from './components/Header'
import { theme } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />

      <Typography variant="h1" component="div">
        Index
      </Typography>

      <CssBaseline />
    </ThemeProvider>
  )
}

export default App
