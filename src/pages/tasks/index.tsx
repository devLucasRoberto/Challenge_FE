import {
  Typography,
  Container,
  Button,
  CircularProgress,
  Alert,
  AlertTitle
} from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
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
  const [error, setError] = useState<String>()

  useEffect(() => {
    setLoading(true)
    api
      .get('tasks')
      .then(response => setTask(response.data))
      .catch(error => setError(error.message))
    setLoading(false)
  }, [refresh])

  function handleRefresh() {
    setRefresh(refresh + 1)
  }

  const data = task.map(task => {
    return {
      id: task.id,
      task: task.text,
      status: task.completed ? 'Completed' : 'Not completed'
    }
  })

  const columns = [
    {
      title: 'Id',
      field: 'id',
      headerName: 'Id'
    },
    {
      title: 'Task',
      field: 'task',
      headerName: 'Task',
      editable: true,
      width: 400
    },
    {
      title: 'Status',
      field: 'status',
      headerName: 'Status',
      editable: true,
      width: 130
    }
  ]

  return (
    <Container sx={{ mb: '2.5rem' }}>
      <Typography
        fontSize="1.87rem"
        mt="2.5rem"
        variant="h1"
        fontWeight="500"
        color="text.secondary"
      >
        Task List
      </Typography>

      {error && (
        <Alert
          severity="error"
          sx={{
            bgcolor: 'error.main',
            color: 'text.secondary',
            mt: '2.5rem'
          }}
        >
          <AlertTitle>Error</AlertTitle>
          <strong>Tasks API</strong> - {error}
        </Alert>
      )}

      <DataGrid
        rows={data}
        columns={columns}
        components={{ Toolbar: GridToolbar }}
        pageSize={25}
        rowsPerPageOptions={[25]}
        checkboxSelection
        sx={{
          bgcolor: '#383A59',
          color: 'white',
          height: '43.75rem',
          width: '100%',
          mt: '2.5rem',
          mb: '1.25rem',
          borderColor: 'white',
          '& .MuiDataGrid-cell:hover': {
            color: 'secondary.main'
          }
        }}
      />

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
