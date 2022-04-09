import { Box, useMediaQuery } from '@mui/material'
import { NavLink } from './NavLink'
import { ResponsiveSidebar } from './ResponsiveSidebar'

export function Sidebar() {
  const sidebarMobile = useMediaQuery('(min-width:900px)')

  if (sidebarMobile) {
    return (
      <Box
        height="calc(100vh - 3.75rem)"
        width="15.625rem"
        bgcolor="primary.light"
        textAlign="center"
      >
        <NavLink />
      </Box>
    )
  }

  return (
    <>
      <ResponsiveSidebar />
    </>
  )
}
