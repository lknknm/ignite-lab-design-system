import { Heading, HeadingProps } from './Heading'
import { Meta, StoryObj } from '@storybook/react'

// Global configuration for all variations
export default {
    title: 'Components/Heading',
    component: Heading,
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
} as Meta<HeadingProps>

// Config for different size variations
export const Default: StoryObj<HeadingProps> = {
    args: {
        size: 'md'
    }
}

export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg'
    }
}

// Config for custom component
export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Placeholder H1 header.</h1>
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