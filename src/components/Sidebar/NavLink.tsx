import { Link, Stack } from '@mui/material'

export function NavLink() {
  return (
    <Stack spacing={2} fontSize="1rem">
      <Link
        color="text.primary"
        underline="none"
        sx={{ cursor: 'pointer', ':hover': { color: 'secondary.main' } }}
      >
        Home
      </Link>
      <Link
        color="text.primary"
        underline="none"
        sx={{ cursor: 'pointer', ':hover': { color: 'secondary.main' } }}
      >
        Tasks
      </Link>
    </Stack>
  )
}
