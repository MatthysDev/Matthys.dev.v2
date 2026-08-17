import type { Meta, StoryObj } from '@storybook/react'
import PhoneShowcase from './index'

const meta: Meta<typeof PhoneShowcase> = {
    title: 'Components/PhoneShowcase',
    component: PhoneShowcase,
    parameters: { layout: 'centered', backgrounds: { default: 'dark' } },
}
export default meta

type Story = StoryObj<typeof PhoneShowcase>

export const Default: Story = {}
