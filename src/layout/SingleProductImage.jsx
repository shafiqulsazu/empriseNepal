import React from 'react'

const SingleProductImage = ({ imgSrc, alt, className }) => {
  return (
    <div className='w-[240px] h-[152px]'>
      <img src={imgSrc} alt={alt} className={`${className} w-[100%] h-[100%] rounded-[8px]`} />
    </div>
  )
}

export default SingleProductImage