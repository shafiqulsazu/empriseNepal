import React from 'react'

const Badge = ({className,text}) => {
  return (
    <h3 className={`${className} text-[18px] text-Badge_Color font-Poppins font-medium py-[10px] px-[6px] bg-Badge_Bg w-[56px] rounded-[16px] text-center`}>{text}</h3>
  )
}

export default Badge