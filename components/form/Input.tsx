'use client';

import Image from 'next/image';
import React, { ForwardedRef, forwardRef, MutableRefObject } from 'react';

type InputProps = {
    type?: string;
    id?: string;
    placeholder?: string;
    required?: boolean;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    buttonIcon?: string;
    onButtonClick?: () => void;
    className?: string;
    buttonClassName?: string;
    name?: string;
};

const Input = forwardRef(({
    type = 'text',
    id = 'input',
    name,
    placeholder = 'Enter text',
    required = false,
    value,
    onChange,
    buttonIcon = '/icons/arrow-up.svg',
    onButtonClick,
    className = '',
    buttonClassName = ''
}: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <div>
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white" htmlFor={id}>
                {placeholder}
            </label>
            <div className="relative">
                <input
                    type={type}
                    id={id}
                    className={`block w-full px-3 py-5 text-sm text-gray-900 border border-gray-300 rounded-2xl focus:ring-blue-500 focus:border-blue-500 bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}
                    placeholder={placeholder}
                    required={required}
                    value={value}
                    onChange={onChange}
                    name={name}
                    ref={ref}
                />
                <button
                    type="button"
                    className={`text-white absolute end-2.5 bottom-2.5 bg-[#555658] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-3 ${buttonClassName}`}
                    onClick={onButtonClick}
                >
                    <Image
                        src={buttonIcon}
                        width={20}
                        height={20}
                        alt='Enter'
                    />
                </button>
            </div>
        </div>
    );
});

export default Input;
