import { Button, type ButtonProps } from '../ui/button'

type SaveFormBtnProps = {
  a: '112c' | 'dfsd'
} & ButtonProps
export const SaveFormBtn = ({ a, ...rest }: SaveFormBtnProps) => {
  return <Button {...rest}>label</Button>
}
