import React from 'react'
import Common_txt_Two from './Common_txt_Two'
import Flex from './Flex'
import { BsPersonWalking, BsStopwatch } from "react-icons/bs";
import { FaUserGroup } from "react-icons/fa6";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { TiWeatherSnow } from "react-icons/ti";
import Photo12 from '../assets/Photo12.png'

const Duration = () => {
    return (
        <div className="w-[662px] grid grid-cols-3 gap-[25px] ml-[136px] mt-[56px]">

            <div className="">
                <Common_txt_Two className="text-[17px]" text={`Duration`} /> 
                <Flex className={`mt-[27px] items-center`}>
                    <BsStopwatch className='text-[25px] text-hover mr-[8px]' />
                    <span className='text-Color font-semibold text-[16px] font-Poppins'>2 Days</span>
                </Flex>

            </div>

            <div className="">
                <Common_txt_Two className="text-[17px]" text={`Activity`} />
                <Flex className={`mt-[27px] items-center`}>
                    <BsPersonWalking className='text-[25px] text-hover mr-[8px]' />
                    <span className='text-Color font-semibold text-[16px] font-Poppins'>Walking</span>
                </Flex>

            </div>

            <div className="">
                <Common_txt_Two className="text-[17px]" text={`Physical `} />
                <Flex className={`mt-[27px] items-center`}>
                    <img src={Photo12} className='mr-[8px]' alt="" />
                    <span className='text-Color font-semibold text-[16px] font-Poppins'>Strenuous</span>
                </Flex>

            </div>

            <div className="">
                <Common_txt_Two className="text-[17px]" text={`Group Size `} />
                <Flex className={`mt-[27px] items-center`}>
                    <FaUserGroup className='text-[25px] text-hover mr-[8px]' />
                    <span className='text-Color font-semibold text-[16px] font-Poppins'>8</span>
                </Flex>

            </div>

            <div className="">
                <Common_txt_Two className="text-[17px]" text={`Age`} />
                <Flex className={`mt-[27px] items-center`}>
                    <LiaBirthdayCakeSolid className='text-[25px] text-hover mr-[8px]' />
                    <span className='text-Color font-semibold text-[16px] font-Poppins'>7+</span>
                </Flex>

            </div>

            <div className="">
                <Common_txt_Two className="text-[17px]" text={`Season`} />
                <Flex className={`mt-[27px] items-center`}>
                    <TiWeatherSnow className='text-[25px] text-hover mr-[8px]' />
                    <span className='text-Color font-semibold text-[16px] font-Poppins'>Apr-Sep</span>
                </Flex>

            </div>
        </div>
    )
}

export default Duration