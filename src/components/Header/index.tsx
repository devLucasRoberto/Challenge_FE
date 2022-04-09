import { Container, Typography, useMediaQuery } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useContext } from 'react'
import { SidebarDrawerContext } from '../../contexts/SidebarDrawerContext'

export function Header() {
  const { setIsDrawerOpen } = useContext(SidebarDrawerContext)
  const sidebarMobile = useMediaQuery('(min-width:900px)')

  return (
    <Container
      maxWidth={false}
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: '3.75rem',
        bgcolor: 'primary.light'
      }}
    >
      {!sidebarMobile && (
        <MenuIcon
          onClick={() => setIsDrawerOpen(true)}
          sx={{ cursor: 'pointer' }}
        />
      )}

      <Typography
        sx={{
          width: '100%',
          textAlign: 'center',
          color: 'secondary.main',
          fontWeight: 'bold',
          fontSize: '2.18rem'
        }}
      >
        New App
      </Typography>
    </Container>
  )
}
