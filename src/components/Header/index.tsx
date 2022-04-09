import { Container, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useContext } from 'react'
import { SidebarDrawerContext } from '../../contexts/SidebarDrawerContext'

export function Header() {
  const { setIsDrawerOpen } = useContext(SidebarDrawerContext)

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
      <MenuIcon
        onClick={() => setIsDrawerOpen(true)}
        sx={{ cursor: 'pointer' }}
      />
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
