import { Box, Drawer } from '@mui/material'
import { useContext } from 'react'
import { SidebarDrawerContext } from '../../contexts/SidebarDrawerContext'
import CloseIcon from '@mui/icons-material/Close'
import { NavLink } from './NavLink'

export function ResponsiveSidebar() {
  const { isDrawerOpen, setIsDrawerOpen } = useContext(SidebarDrawerContext)

  return (
    <Drawer
      anchor="left"
      open={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
    >
      <Box
        p={2}
        width="15.625rem"
        height="3.75rem"
        textAlign="right"
        role="presentation"
        sx={{ bgcolor: 'primary.light' }}
      >
        <CloseIcon
          onClick={() => setIsDrawerOpen(false)}
          sx={{ cursor: 'pointer' }}
        />
      </Box>
      <Box
        p={2}
        width="15.625rem"
        height="100%"
        textAlign="center"
        role="presentation"
        sx={{ bgcolor: 'primary.light' }}
      >
        <NavLink />
      </Box>
    </Drawer>
  )
}
