import * as React from 'react'
import { ConfigContext, ConfigContextType } from './ConfigContext'

// export * from './ConfigContext'
export const ConfigProvider: React.FC<{
  config?: ConfigContextType
  children?: React.ReactNode | React.ReactElement
}> = ({ children, config = {} }) => {
  return (
    <ConfigContext.Consumer>
      {(originalConfig) => <ConfigContext.Provider value={config || originalConfig}>{children}</ConfigContext.Provider>}
    </ConfigContext.Consumer>
  )
}
