import { Button, ButtonProps } from './Button'
import { Meta, StoryObj } from '@storybook/react'

// Global configuration for all variations
export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Log In',
        size: 'md',
    }, 
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}