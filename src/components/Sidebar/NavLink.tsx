import { Link as LinkUI, Stack } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'

export function NavLink() {
  const location = useLocation()
  const { pathname } = location

  console.log(pathname)
  return (
    <Stack spacing={2} fontSize="1rem" mt="1rem">
      <Link
        to="/"
        style={{
          textDecoration: 'none'
        }}
      >
        <LinkUI
          color={pathname === '/' ? 'secondary.main' : 'text.primary'}
          sx={{
            cursor: 'pointer',
            textDecoration: 'none',
            ':hover': { color: 'secondary.main' }
          }}
        >
          Home
        </LinkUI>
      </Link>
      <Link
        to="/tasks"
        style={{
          textDecoration: 'none'
        }}
      >
        <LinkUI
          color={pathname === '/tasks' ? 'secondary.main' : 'text.primary'}
          underline="none"
          sx={{ cursor: 'pointer', ':hover': { color: 'secondary.main' } }}
        >
          Tasks
        </LinkUI>
      </Link>
    </Stack>
  )
}
