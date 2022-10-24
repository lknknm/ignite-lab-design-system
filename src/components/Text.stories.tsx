import { Text, TextProps } from './Text'
import { Meta, StoryObj } from '@storybook/react'

// Global configuration for all variations
export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Lorem ipsum.',
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
} as Meta<TextProps>

// Config for different size variations
export const Default: StoryObj<TextProps> = {
    args: {
        size: 'md'
    }
}

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
}

// Config for custom component
export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Placeholder paragraph.</p>
        )
    },
    // Removes children element on the control panel from the UI
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        }
    }
}