import { Box, Container, Typography } from '@mui/material'

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

      <Box color="text.secondary" mt="2.5rem">
        <Typography component="h1" fontSize="1.5rem" mb="1rem">
          Backend:
        </Typography>

        <Typography mb="1.5rem">github.com/MarceloFonseca/tasks-api</Typography>

        <Typography component="h2" fontSize="1.3rem" mb="1rem">
          Usage instructions
        </Typography>

        <Typography width="100%">
          1. Go to app dir and run npm install
          <br />
          <br />
          2. Launch API using: “PORT=3008 NEW_TASK_PERIOD=60000 npm start”,
          where:
          <br />
          <br />
          &#8226; PORT: App port, default 8080
          <br />
          &#8226; NEW_TASK_PERIOD: Period on which a new task is added to the
          list (in milliseconds), default: 60000
          <br />
          <br />
          3. You can access the API using: http://localhost:3008/api/tasks/
          <br />
          <br />
          4. I'm using port 3008 but if you want to use default port or other
          you need to go the folder src/services/api.ts in Challenge_FE and
          change baseURL <br />
        </Typography>
      </Box>
    </Container>
  )
}
