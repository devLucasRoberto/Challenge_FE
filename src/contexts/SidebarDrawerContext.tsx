import { createContext, ReactNode, useState } from 'react'

type SidebarDrawerContextData = {
  isDrawerOpen: boolean
  setIsDrawerOpen: (open: boolean) => void
}

interface SidebarDrawerContextProviderProps {
  children: ReactNode
}

export const SidebarDrawerContext = createContext<SidebarDrawerContextData>(
  {} as SidebarDrawerContextData
)

export function SidebarDrawerProvider({
  children
}: SidebarDrawerContextProviderProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <SidebarDrawerContext.Provider value={{ isDrawerOpen, setIsDrawerOpen }}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}
