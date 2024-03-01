import type { Meta, StoryObj } from '@storybook/react';

import Card from './Card';
import { palette } from '../../utils/palette'

const meta = {
  title: 'Example/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Card Content',
  },
};
