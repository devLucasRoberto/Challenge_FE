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

  return (
    <Container sx={{ mb: '2.5rem' }}>
      <Typography fontSize="1.87rem" mt="2.5rem" variant="h1" fontWeight="500">
        Task List
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          bgcolor: 'primary.light',
          height: '43.75rem',
          width: '100%',
          mt: '2.5rem',
          mb: '1.25rem'
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
