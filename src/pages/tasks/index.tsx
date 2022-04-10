import {
  Paper,
  Table,
  TableHead,
  TableContainer,
  TableRow,
  TableCell,
  TableBody
} from '@mui/material'

export function Tasks() {
  return (
    <TableContainer component={Paper} sx={{ bgcolor: 'primary.main' }}>
      <Table arial-label="tasks table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Task</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell>1</TableCell>
            <TableCell>task 1</TableCell>
            <TableCell>true</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
