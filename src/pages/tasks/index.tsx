import {
  Paper,
  Table,
  TableHead,
  TableContainer,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Container,
  Chip,
  Button,
  CircularProgress
} from '@mui/material'

import { useEffect, useState } from 'react'
import { api } from '../../services/api'

type TaskData = {
  id: number
  text: string
  completed: boolean
}

export function Tasks() {
  const [task, setTask] = useState<TaskData[]>([])
  const [loading, setLoading] = useState<Boolean>(false)
  const [refresh, setRefresh] = useState(0)

  useEffect(() => {
    api.get('tasks').then(response => setTask(response.data))
    setLoading(false)
  }, [refresh])

  function handleRefresh() {
    setLoading(true)
    setRefresh(refresh + 1)
  }

  console.log(loading)

  return (
    <Container sx={{ mb: '40px' }}>
      <Typography fontSize="30px" mt="40px" variant="h1" fontWeight="500">
        Task List
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          bgcolor: 'primary.light',
          height: '700px',
          width: '100%',
          mt: '40px',
          mb: '20px'
        }}
      >
        <Table arial-label="tasks table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Task</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {task.map(task => {
              return (
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{task.id}</TableCell>
                  <TableCell>{task.text}</TableCell>

                  <TableCell>
                    {task.completed ? (
                      <Chip label="Completed" color="success" />
                    ) : (
                      <Chip label="Not Completed" color="error" />
                    )}
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {loading ? (
        <CircularProgress size={35} sx={{ color: 'white' }} />
      ) : (
        <Button
          variant="contained"
          size="medium"
          color="info"
          onClick={handleRefresh}
        >
          Refresh
        </Button>
      )}
    </Container>
  )
}
