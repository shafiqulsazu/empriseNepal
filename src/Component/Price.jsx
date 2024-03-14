import React from 'react'
import FormatePrice from '../layout/FormatePrice'

const Price = ({ className, text }) => {
  return (
    <h3 className={`${className} text-Color font-bold font-Poppins`}>
      <FormatePrice formate={text} />
    </h3>
  )
}

export default Price