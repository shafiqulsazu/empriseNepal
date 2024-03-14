import React from 'react'
import Container from '../Component/Container'
import Common_txt_Two from '../Component/Common_txt_Two'
import Commontxt from '../Component/Commontxt'
import Flex from '../Component/Flex'
import First_icon from '../Component/Icon/First_icon'

const Header = ({className}) => {
    return (
        <Container className={className}>
            <Common_txt_Two text={`--The Himalayan Mountain Ranges`} className={`text-white pt-[108px]`} />
            <Commontxt text={`Nepal Country`} className={`text-[129px] tracking-[-2.56px] text-white mt-[8px]`} />
            <Flex className={`justify-between mt-[40px]`}>
                <Common_txt_Two text={`-02° C  Very Cold`} className={`text-white`} />
                <Flex>
                    <First_icon/>
                    <div className='ml-[24px]'>
                        <Common_txt_Two text={`We Accept Payment Through All Cards & Banking`} className={`text-white w-[350px]`} />
                        <a href="" className='text-white text-[24px] font-normal font-Poppins mt-[8px]'><u>Book Now!</u></a>
                    </div>
                </Flex>
            </Flex>
        </Container>
    )
}

export default Header