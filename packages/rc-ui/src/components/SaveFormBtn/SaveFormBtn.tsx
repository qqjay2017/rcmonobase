import { type ButtonProps } from '../ui/button'
import React from 'react'
export interface SaveFormBtnProps extends ButtonProps {
  a: '112c' | 'dfsd'
  color?: string
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean
}
export function SaveFormBtn({ a, color, ...rest }: SaveFormBtnProps) {
  console.log(a, color)
  return <div>123</div>
}
