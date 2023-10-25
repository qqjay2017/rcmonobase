import { createContext } from 'react'

export type ConfigContextType = {
  version?: number
}

export const ConfigContext = createContext<ConfigContextType | null>(null)
