import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp 
            className={clsx(
                'py-4 px-3 bg-lime-400 rounded font-semibold text-gray-900 text-sm w-full transiton-colors hover:bg-lime-300 focus:ring-2 ring-white',
            )}
        >
         {children} 
        </Comp>
    )
}