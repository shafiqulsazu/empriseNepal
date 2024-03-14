import React from 'react'
import { MdOutlineChevronRight } from "react-icons/md";


const Right = (props) => {
  const { onClick } = props
  return (
    <button className='absolute top-[-100px] right-0'>
      <div className='Left rounded-[50%] hover:bg-hover border-[2px] border-black hover:border-none h-[62px] w-[62px] group relative' onClick={onClick}>
        <MdOutlineChevronRight className='group-hover:text-white text-[35px] absolute top-[52%] translate-y-[-50%] left-[50%] translate-x-[-50%]' />
      </div>
    </button>
  )
}

export default Right