import { Box, CssBaseline, ThemeProvider, Typography } from '@mui/material'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { SidebarDrawerProvider } from './contexts/SidebarDrawerContext'
import { theme } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SidebarDrawerProvider>
        <Header />

        <Box display="flex">
          <Sidebar />

          <Typography variant="h1" component="div">
            Index
          </Typography>
        </Box>

        <CssBaseline />
      </SidebarDrawerProvider>
    </ThemeProvider>
  )
}

export default App
