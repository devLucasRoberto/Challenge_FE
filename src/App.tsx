import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import { QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { SidebarDrawerProvider } from './contexts/SidebarDrawerContext'
import { Index } from './pages'
import { Tasks } from './pages/tasks'
import { queryClient } from './services/queryClient'
import { theme } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <SidebarDrawerProvider>
            <Header />

            <Box display="flex">
              <Sidebar />

              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="tasks" element={<Tasks />} />
              </Routes>
            </Box>

            <CssBaseline />
          </SidebarDrawerProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
