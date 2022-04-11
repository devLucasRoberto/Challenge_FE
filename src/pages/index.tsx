import { Container, Typography } from '@mui/material'

export function Index() {
  return (
    <Container sx={{ mb: '2.5rem' }}>
      <Typography
        fontSize="1.87rem"
        mt="2.5rem"
        variant="h1"
        fontWeight="500"
        color="text.secondary"
      >
        Home
      </Typography>
    </Container>
  )
}
