import { Stack, Typography } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'

export function NavLink() {
  const location = useLocation()
  const { pathname } = location

  return (
    <Stack spacing={2} fontSize="1rem" mt="1rem">
      <Link
        to="/"
        style={{
          textDecoration: 'none'
        }}
      >
        <Typography
          color={pathname === '/' ? 'secondary.main' : 'text.secondary'}
          sx={{
            ':hover': { color: 'secondary.main' }
          }}
        >
          Home
        </Typography>
      </Link>
      <Link
        to="/tasks"
        style={{
          textDecoration: 'none'
        }}
      >
        <Typography
          color={pathname === '/tasks' ? 'secondary.main' : 'text.secondary'}
          sx={{
            ':hover': { color: 'secondary.main' }
          }}
        >
          Tasks
        </Typography>
      </Link>
    </Stack>
  )
}
