import { Link as LinkUI, Stack } from '@mui/material'
import { Link } from 'react-router-dom'

export function NavLink() {
  return (
    <Stack spacing={2} fontSize="1rem">
      <Link
        to="/"
        style={{
          textDecoration: 'none'
        }}
      >
        <LinkUI
          color="text.primary"
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
          color="text.primary"
          underline="none"
          sx={{ cursor: 'pointer', ':hover': { color: 'secondary.main' } }}
        >
          Tasks
        </LinkUI>
      </Link>
    </Stack>
  )
}
