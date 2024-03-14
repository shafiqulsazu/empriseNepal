import React from 'react'
import Common_txt_Two from './Common_txt_Two'
import Image from './Image'
import Rank from './Rank'

const Catagory_Card = ({text_Card,RankTxT,src_Card}) => {
  return (
    <div className='py-[32px] px-[32px]  border-gray-500 border-[2px] rounded-[10px] w-[376px] h-[293px] relative'>
        <Rank text={RankTxT} className={`absolute right-[32px]`}/>
        <Image className={`mt-[55px]`} src={src_Card}/>
        <Common_txt_Two text={text_Card} className="text-[#1D293F] font-medium py-[16px] tracking-[0.38]"/>
        <p className='text-[#99A3AD] font-Poppins font-normal text-[16px]'>196 Activities</p>
    </div>
  )
}

export default Catagory_Card