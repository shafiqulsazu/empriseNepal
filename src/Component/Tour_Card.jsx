import React from 'react'
import Flex from './Flex'
import Image from './Image'
import Common_txt_Two from './Common_txt_Two'
import Commontxt from './Commontxt'
import Common_TxT_Three from './Common_TxT_Three'

const Tour_Card = ({imgSrc,text_one,text_two,text_three,text_four,href}) => {
    return (
        <Flex className={`mt-[64px]`}>
            <div className="w-[512px] h-[670px]">
                <Image src={imgSrc} className={`w-[100%] h-[100%]`} />
            </div>

            <div className="ml-[32px] mt-[39px]">
                <Common_txt_Two text={text_one} className="text-hover" />
                <Commontxt text={text_two} className={`font-medium w-[270px]`} />

                <Flex className={`mt-[96px] mb-[172px]`}>
                    <div className='w-[342px] grid gap-[16px]'>
                        <Common_txt_Two text={`About`} className="text-black" />
                        <Common_TxT_Three text={text_three} />
                    </div>

                    <div className='w-[342px] grid gap-[16px]'>
                        <Common_txt_Two text={`Journey`} className="text-black" />
                        <Common_TxT_Three text={text_four} />
                    </div>
                </Flex>

                <div className="w-[306px] justify-between">
                    <a href={href} className='text-black text-[18px] font-normal font-Poppins'>Facebook</a>
                    <a href={href} className='text-black text-[18px] font-normal font-Poppins mx-[32px]'>Instagram</a>
                    <a href={href} className='text-black text-[18px] font-normal font-Poppins'>Twitter</a>
                </div>

            </div>
        </Flex>
    )
}

export default Tour_Card