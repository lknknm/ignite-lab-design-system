import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    asChild?: boolean;
}

export function Button({ children, asChild, className, ...props }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp 
            className={clsx(
                'py-3 px-4 bg-lime-400 rounded font-semibold text-gray-900 text-sm w-full transiton-colors hover:bg-lime-300 focus:ring-2 ring-white',
                className,
            )}
            {...props}
        >
         {children} 
        </Comp>
    )
}