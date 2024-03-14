import React from 'react'
import { BsArrowLeftCircle } from "react-icons/bs";

const Left_Icon = (props) => {
    const { onClick } = props;
  return (
    <div className="text-[50px] text-white absolute z-10 top-[452px] left-[134px]" onClick={onClick}> <BsArrowLeftCircle  /> </div>
  )
}

export default Left_Icon