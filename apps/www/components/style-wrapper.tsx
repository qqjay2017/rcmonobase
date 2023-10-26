'use client'

import * as React from 'react'

interface StyleWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  styleName?: any
}

export function StyleWrapper({ children }: StyleWrapperProps) {
  return <>{children}</>
}
