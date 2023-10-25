import { Button, type ButtonProps } from '../ui/button'

interface SaveFormBtnProps extends ButtonProps {}
export function SaveFormBtn(props: SaveFormBtnProps) {
  return (
    <Button variant={'outline'} className="gap-2" {...props}>
      Save11222
    </Button>
  )
}
