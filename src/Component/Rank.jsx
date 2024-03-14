import React from 'react'

const Rank = ({className,text}) => {
  return (
    <h3 className={`${className} py-[6px] px-[10px] w-[56px] rounded-[16px] bg-RankBg font-Poppins font-medium text-[20px] text-RankColor `}>{text}</h3>
  )
}

export default Rank