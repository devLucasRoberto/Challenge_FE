import { Box, Typography, useMediaQuery } from '@mui/material'
import { ResponsiveSidebar } from './ResponsiveSidebar'

export function Sidebar() {
  const sidebarMobile = '(min-width:900px)'

  if (sidebarMobile) {
    return (
      <Box
        height="calc(100vh - 3.75rem)"
        width="15.625rem"
        bgcolor="primary.light"
        textAlign="center"
      >
        <Typography component="a">Sidebar</Typography>
      </Box>
    )
  }

  return (
    <>
      <ResponsiveSidebar />
    </>
  )
}
