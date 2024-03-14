import React from 'react'
import Image from './Image'
import Badge from './Badge'
import Common_Txt_Four from './Common_Txt_Four'
import Price from './Price'
import { HiShare } from "react-icons/hi2";
import Travle_Head from './Travle_Head'


const Seller_Card = ({ className,imgSrc,Badge_txt,title,sell_price,Sell_title,text}) => {

    return (
        <div className={`${className} w-[512px] h-[478px] rounded-t-[32px] relative`}>

            <Image src={imgSrc} className={`W-[512px] h-[346px]`} />

            <Badge text={Badge_txt} className={`absolute top-[32px] left-[424px]`} />

            <Common_Txt_Four text={title} className="absolute top-[215px] left-[32px]" />

            <Price text={sell_price} className={`border-b-[2px] border-white text-[32px] text-white absolute top-[266px] left-[32px]`} />

            <button className='bg-white w-[60px] h-[60px] absolute top-[266px] right-[180px] rounded-[50%]'>
                <HiShare className='text-[30px] translate-x-[40%] ' />
            </button>

            <button className='bg-hover hover:bg-transparent border-hover border-[1px]  hover:border-white text-white py-[10px] px-[36px] absolute top-[270px] right-[32px] rounded-[24px]'>
                <Common_Txt_Four text="Explore" />
            </button>

            <Travle_Head text={Sell_title} className={`font-500 tracking-[0.38px] text-center mt-[32px] mb-[16px]`} />
            <p className='text-[#99A3AD] font-Poppins font-normal text-[16px] tracking-[0.5px] text-center px-[52px]'>{text}</p>
        </div>
    )
}

export default Seller_Card