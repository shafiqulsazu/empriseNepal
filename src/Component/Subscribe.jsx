import React from 'react'
import Image from './Image'
import Photo6 from '../assets/Photo6.png'
import Photo7 from '../assets/Photo7.png'
import Container from './Container'
import Flex from './Flex'
import Common_txt_Two from './Common_txt_Two'
import Commontxt from './Commontxt'
import Input from './Input'
import { HiOutlineMail } from "react-icons/hi";

const Subscribe = () => {
    return (
        <Container className={`mt-[152px] mb-[136px]`}>
            <Flex className={`mb-[136px]`}>
                <Image src={Photo6} />
                <div className='ml-[36px]'>
                    <Common_txt_Two text={`Subscribe For Offers`} className={`text-hover mt-[38px] mb-[8px]`} />
                    <Commontxt text="Adventures Calling You Guys!"
                        className={`font-semibold text-[48px] tracking-[0.77px] w-[466px]`} />
                    <Common_txt_Two text="The Brilliant reasons Entrada should be your one-stop-shop!"
                        className={`w-[460px] pt-[24px] pb-[72px]`} />

                    <div className='flex mb-[48px]'>
                        <div className="relative">
                            <Input
                                type={`email`}
                                placeholder={`Enter your email`}
                                className="w-[456px] h-[88px] py-[30px] pl-[69px] subscribe_input" />
                            <HiOutlineMail className='text-[26px] absolute  top-[50%] left-[24px] translate-y-[-50%] ' />
                        </div>
                        <Input
                            type={`submit`}
                            value={`Send Now!`}
                            className="w-[188px] h-[88px] py-[26px] px-[31px] subscribe_input text-white text-[24px] font-normal tracking-[0.38px] bg-hover" />
                    </div>
                    <Common_txt_Two text="Expect a reply in 2-3 working days" className={`text-[16px]`}/>
                </div>
            </Flex>
            
            <Image src={Photo7} className={`w-[1454px] mx-auto`}/>

        </Container>
    )
}

export default Subscribe