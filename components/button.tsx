import { cn } from '@/lib/utils';
import React, { forwardRef, MouseEventHandler, ReactNode } from 'react';

export interface ButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children: ReactNode;
    className?: string;
    variant?: 'primary' | 'secondary' | 'outline';
}

const baseStyles = 'w-full p-4 rounded-2xl';
const variantStyles = {
    primary: 'bg-primary text-black',
    secondary: 'bg-white text-black',
    outline: 'bg-transparent border border-white text-white',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ onClick, children, className, variant = 'primary', ...props }, ref) => (
        <button
            type='button'
            ref={ref}
            onClick={onClick}
            {...props}
            aria-label={typeof children === 'string' ? children : 'Button'}
            className={cn(baseStyles, variantStyles[variant], className)}
        >
            {children}
        </button>
    )
);

export default Button;