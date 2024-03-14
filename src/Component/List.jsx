import React from 'react'

const List = ({className,text}) => {
  return (
    <li type="none" className={`${className} text-[#546179] text-[16px] font-normal font-Poppins tracking-[0.26px] leading-[40px] cursor-pointer`}>{text}</li>
  )
}

export default List