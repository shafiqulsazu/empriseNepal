import React from 'react'
import Image from './Image'
import Travle_Head from './Travle_Head'
import Common_TxT_Three from './Common_TxT_Three'
import Rank from './Rank'

const Card = ({ imgSrc, className,RankTxT,tittle_class,tittle, tittle_class2 }) => {


    return (
        <div className={`${className} w-[376px] h-[335px] relative`}>
            <Image src={imgSrc} className={`w-[100%] h-[100%]`}/>
            <Rank text={RankTxT} className="absolute top-[32px] left-[32px]"/>
            <Travle_Head text={tittle} className={`${tittle_class} text-white absolute leading-[20px]`} />
            <Common_TxT_Three text="Waterfall" className={`${tittle_class2} text-white absolute`}/>
        </div>
    )
}

export default Card