import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { FiPlusCircle } from "react-icons/fi";
import Common_txt_Two from './Common_txt_Two';
import Commontxt from './Commontxt';
import Image from './Image';
import Photo10 from '../assets/Photo10.png'
import List from './List';
import { FaArrowRightLong } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import Input from './Input';



const Footer = () => {
    return (
        <div>
            <Container className={`pt-[136px]`}>
                <Flex className="items-center">
                    <FiPlusCircle className='text-[45px] pr-[16px]' />
                    <p className="font-bold text-[24px] text-Color font-Poppins">QUICK LINKS"</p>
                    <Common_txt_Two text="Explore more categories" className={`tracking-[0.38px] pl-[69px]  pr-[577px]`} />
                    <p className="font-normal text-[24px] text-Color font-Poppins">0123-456-324-54 | hello@entrada.com"</p>
                </Flex>

                {/* =============== Geting Tuch Part Start============= */}

                <Flex className={`justify-between mt-[63px] mb-[48px]`}>
                    <div className="">
                        <Common_txt_Two text={`Get in touch`} className={`text-hover`} />
                        <Commontxt text={`Adventures Calling You Guys!`} className={`w-[388px] font-normal`} />
                    </div>
                    <Flex>
                        <Image src={Photo10} className={`w-[80px] h-[80px] mr-[24px]`} />
                        <div className="">
                            <Common_txt_Two text={`Our Offices`} className={`font-medium text-black`} />
                            <Common_txt_Two text={`Nepal, USA, India`} className={`font-medium text-black`} />
                        </div>
                    </Flex>
                </Flex>

                {/* =============== Geting Tuch Part Start============= */}

                {/* =============== List Part Start============= */}
                <Flex className={`justify-between`}>
                    <Flex className={`w-[646px] justify-between`}>
                        <div className="service">
                            <p className='text-Color text-[24px] font-medium font-Poppins'>Service</p>
                            <List text={`Budget Tours`} />
                            <List text={`Expert Insight`} />
                            <List text={`Independent`} />
                            <List text={`Luxury Tours`} />
                            <List text={`Safety Tips`} />
                            <List text={`Tips n Tricks`} />
                        </div>

                        <div className="Adventures">
                            <p className='text-Color text-[24px] font-medium font-Poppins'>Adventures</p>
                            <List text={`Beach Activity`} />
                            <List text={`Bungee Jump`} />
                            <List text={`City Tour`} />
                            <List text={`Hiking Trips`} />
                            <List text={`Jungle Safari`} />
                            <List text={`Night City Walk`} />
                        </div>

                        <div className="Australia">
                            <p className='text-Color text-[24px] font-medium font-Poppins'>Adventures</p>
                            <List text={`USA`} />
                            <List text={`Australia`} />
                            <List text={`South Africa`} />
                            <List text={`West Indies`} />
                            <List text={`New Zealandi`} />
                            <List text={`Srilanka`} />
                        </div>
                    </Flex>

                    <div className="w-[648px]">
                        <p className='text-Color text-[24px] font-medium font-Poppins'>Get In Touch</p>
                        <Flex className={`items-center`}>
                            <Commontxt text={`Let’s Talk`} />
                            <FaArrowRightLong className='text-[40px] ml-[24px]' />
                        </Flex>

                        <div className='flex mt-[40px]'>
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
                    </div>
                </Flex>
                {/* =============== List Part End============= */}


                {/* =============== Privacy Policy Part Star============= */}
                <Flex className={`items-center justify-between`}>

                    <Common_txt_Two text={`Privacy Policy`} className={`font-semibold text-black py-[80px] `} />

                    <div className="text-black text-[24px] font-normal font-Poppins tracking-[0.38px]">
                        <a href="">Linkedin /</a>
                        <a href="" className='mx-[10px]'>Facebook /</a>
                        <a href="">Instagram</a>
                    </div>
                </Flex>
                {/* =============== Privacy Policy Part End============= */}

            </Container>
        </div>
    )
}

export default Footer