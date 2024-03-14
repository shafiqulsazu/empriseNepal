import React from 'react'

const Input = ({ type, placeholder, value, id,className,onChange,name }) => {
    return (
        <div>
            <input
            id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
                required
                autoComplete='off'
                className={`${className} outline-none border-[1px]  w-[197px] font-Poppins text-[#99A3AD] text-[18px] border-none`} />
        </div>
    )
}

export default Input