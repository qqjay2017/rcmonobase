import { useState } from 'react'

export function useSize() {
  const [first] = useState(1)
  return first
}
