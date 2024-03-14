import React from 'react'

const Label = ({text,htmlFor,className}) => {
  return (
    <label htmlFor={htmlFor} className={`${className} text-[16px] text-lable_Color font-Poppins font-medium`}>{text}</label>
  )
}

export default Label