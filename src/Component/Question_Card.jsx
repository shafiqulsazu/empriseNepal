import React from 'react'
import Image from './Image'
import Common_txt_Two from './Common_txt_Two'

const Question_Card = ({text,imgSrc,text_one,text_two,text_three,className}) => {
    return (
        <div className={`${className} w-[648px] h-[560px] bg-hover rounded-[12px] px-[141px] text-center relative`}>
            <Image src={imgSrc} className={`top-[72px] left-[272px] absolute`}/>
            <p className='pt-[232px] text-white font-medium font-Poppins text-[32px]'>{text}</p>

            <Common_txt_Two text={text_one}
            className={`text-[#BCF0EC] pt-[24px] pb-[48px]`}/>
            
            <Common_txt_Two text={text_two}
            className={`text-white font-medium pb-[8px]`}/>

            <Common_txt_Two text={text_three}
            className={`text-white font-medium`}/>

        </div>
    )
}

export default Question_Card