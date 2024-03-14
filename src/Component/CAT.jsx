import React from 'react'
import Container from './Container'
import Common_Txt_Four from './Common_Txt_Four'

const CAT = () => {
  return (
    <Container className='bg-Contain bg-no-repeat bg-center bg-cover h-[508px] mt-[137px] relative'>
        <Common_Txt_Four text={`Tour the World from Your Couch with #ExperienceLive!`} className={`text-[52px] pl-[258px] pr-[262px] pt-[72px] text-center`}/> 
        <p className='text-[32px] font-Poppins text-[#BCF0EC] text-center tracking-[0.38px] mt-[28px]'>To kickstart your digital adventures with Entrada</p>

        <button className='bg-white hover:bg-transparent hover:border-gray-500 border-[2px] text-hover hover:text-white py-[22px] px-[36px] rounded-[40px] font-Poppins font-semibold
        tex-[24px] transition-[.5s] top-[372px] right-[706px] absolute'>Check All</button>
        
    </Container>
  )
}

export default CAT