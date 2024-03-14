import React from 'react'
import Image from './Image'
import Flex from './Flex'
import Common_TxT_Three from './Common_TxT_Three'
import { CiHeart } from "react-icons/ci";
import Travle_Head from './Travle_Head'
import Common_txt_Two from './Common_txt_Two'
import { BsStopwatch } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import Price from './Price'
import Badge from './Badge';



const Travle = ({ imgSrc, travle_Price, travle_head,className,company,category }) => {
    return (
        <div className={className}>
            <div className='w-[512px] pb-[32px] pt-[16px] px-[16px]  travel relative'>
                <Image src={imgSrc} className={`w-[100%] h-[256px] mb-[32px] rounded-[20px]`} />

                <Badge text={`30%`} className="absolute top-[32px] left-[418px]"/>

                <Flex className={`items-center justify-between`}>
                    <div className="">
                        <Travle_Head text={travle_head} />
                        <Common_TxT_Three text={company} className={`mt-[8px] mb-[28px]`} />
                    </div>

                    <button>
                        <CiHeart className='text-[40px]' />
                    </button>
                </Flex>

                <Flex className={`items-center justify-between`}>
                    <div>
                        <Common_txt_Two text={category} className={"text-[14px]"} />
                        <Price text={travle_Price} className={`text-[32px]`} />
                        <Common_txt_Two text={`*Price varies`} className={"text-[14px]"} />
                    </div>

                    {/* Reating Part  */}
                    <div>
                        Reating
                    </div>
                    {/* Reating Part  */}
                </Flex>

                <Flex className={`mt-[40px]`}>
                    <div>
                        <Flex className={`items-center`}>
                            <BsStopwatch className='text-[25px] text-hover mr-[8px]' />
                            <Common_txt_Two text={`7 Days`} />
                        </Flex>

                        <Flex className={`items-center`}>
                            <TiTick className='text-[25px] text-hover mr-[8px]' />
                            <Common_txt_Two text={`Free Cancellation`} />
                        </Flex>
                    </div>

                    <Flex className={`items-center mt-[32px] ml-[24px]`}>
                        <TiTick className='text-[25px] text-hover mr-[8px]' />
                        <Common_txt_Two text={`New on Entrada`} />
                    </Flex>
                </Flex>
            </div>
        </div>
    )
}

export default Travle