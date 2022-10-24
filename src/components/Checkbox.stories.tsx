import { Checkbox, CheckboxProps } from './Checkbox'
import { Meta, StoryObj } from '@storybook/react'
import { Text } from './Text'

// Global configuration for all variations
export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {}, 
    argTypes: {},
    decorators: [
        (Story) => {
            return (
                <div className="flex items-center gap-2">
                    {Story()}
                    <Text size="sm">Remeber me for 30 days</Text>
                </div>
            )
        }
    ]
} as Meta<CheckboxProps>

// Config for different size variations
export const Default: StoryObj<CheckboxProps> = {}