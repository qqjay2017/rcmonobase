import * as React from 'react'
import { ButtonProps } from '../ui/button'

interface SaveFormBtnProps extends ButtonProps {
  a: '112c' | 'dfsd'
  color?: string
  /**
   * Is this the principal call to action on the page?
   */
  primary: boolean
  primary1?: boolean
}
export const SaveFormBtn: React.FC<SaveFormBtnProps> = ({ a, color, primary, ...rest }: SaveFormBtnProps) => {
  console.log(a, color, primary)

  return <span>123</span>
}
