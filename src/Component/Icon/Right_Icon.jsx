import React from 'react'
import { BsArrowRightCircle } from "react-icons/bs";


const Right_Icon = (props) => {
    const { onClick } = props;
    return (
        <div className="text-[50px] text-white absolute top-[452px] left-[190px]" onClick={onClick}> <BsArrowRightCircle /> </div>
    )
}

export default Right_Icon