import { Container, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

export function Header() {
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
      <MenuIcon />
      <Typography
        sx={{
          width: '100%',
          textAlign: 'center',
          color: 'secondary.main',
          fontWeight: 'bold',
          fontSize: '35px'
        }}
      >
        New App
      </Typography>
    </Container>
  )
}
