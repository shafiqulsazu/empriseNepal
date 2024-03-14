import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <ul className='flex w-[518px] justify-between'>
      <li className='text-Color text-[20px] font-Poppins font-medium'>Destination</li>
      <li className='text-Color text-[20px] font-Poppins font-medium'>Activities</li>
      <Link to={`/special`}>
        <li className='text-Color text-[20px] font-Poppins font-medium'>Specials</li>
      </Link>
    </ul>
  )
}

export default Menu