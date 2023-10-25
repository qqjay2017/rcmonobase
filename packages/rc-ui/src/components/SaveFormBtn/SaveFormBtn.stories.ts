import type { Meta, StoryObj } from '@storybook/react'

import { SaveFormBtn } from './SaveFormBtn'

const meta = {
  title: 'Example/SaveFormBtn',
  component: SaveFormBtn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // a: {
    //   control: 'select',
    // },
  },
} satisfies Meta<typeof SaveFormBtn>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    a: '112c',
    variant: 'link',
    // variant: 'default',
    //   primary: true,
    //   label: 'Button',
  },
}
