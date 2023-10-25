import type { Meta, StoryObj } from '@storybook/react'

import { SaveFormBtn } from '@ljfe/rc-ui'

const meta = {
  title: 'Example/SaveFormBtn',
  component: SaveFormBtn,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SaveFormBtn>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'default',
    //   primary: true,
    //   label: 'Button',
  },
}
