import React from 'react'
import { MdOutlineChevronLeft } from "react-icons/md";

const Left = (props) => {
  const { onClick } = props
  return (
    <button className='absolute right-[70px] top-[-100px]'>
      <div className='Left rounded-[50%] hover:bg-hover border-[2px] border-black hover:border-none h-[62px] w-[62px] group relative' onClick={onClick}>
        <MdOutlineChevronLeft className='group-hover:text-white text-[35px] absolute top-[52%] translate-y-[-50%] left-[50%] translate-x-[-55%]' />
      </div>
    </button>
  )
}

export default Left