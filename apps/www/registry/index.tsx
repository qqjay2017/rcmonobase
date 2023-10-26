import React from 'react'

export const Index: Record<string, any> = {
  'saveFormBtn-demo': {
    name: 'saveFormBtn-demo',
    type: 'components:example',
    registryDependencies: [],
    component: React.lazy(() => import('@/example/saveFormBtn/demo')),
    files: ['example/saveFormBtn/demo.tsx'],
  },
}
