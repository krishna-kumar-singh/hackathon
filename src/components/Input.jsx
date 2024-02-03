import React, { useId } from 'react';

const Input = React.forwardRef(function Input({
    label,
    type = 'text',
    className = '',
    eye='',
    ...props
}, ref) {
    const id = useId();

    return (
        <div className='w-full'>
            {label && <label
                className='inline-block mb-1 pl-1'
                htmlFor={id}>
                {label}
            </label>}
            <div className='flex justify-center items-center'>
            <input
                type={type}  
                className={`px-3 py-2 mr-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-300 w-full ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
            {eye }
            </div>
        </div>
    );
});

export default Input;
