import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';
import { palette } from '../../utils/palette'

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    link: 'https://google.com',
    isExternal: false,
    text: 'Primary Button',
    color: 'bg-purple-300',
    className: '',
    neonColor: palette.purple300,
  },
};
