import React from 'react'
import Container from './Container'
import Commontxt from './Commontxt'
import Common_txt_Two from './Common_txt_Two'
import Question_Card from './Question_Card'
import Photo8 from '../assets/Photo8.png'
import Photo9 from '../assets/Photo9.png'

const Question = () => {
    return (
        <div className='mb-[136px]'>
            <Container className={`text-center`}>
                <Commontxt text="Still have a question?" className={`text-black tracking-[0.64px]`} />
                <Common_txt_Two text="The Brilliant reasons Entrada should be your one-stop-shop!" className={`tracking-[0.38px] pt-[16px] pb-[72px]`} />

                <div className="w-[1328px] flex justify-between mx-auto">
                    <Question_Card
                        imgSrc={Photo8}
                        text={`For Sales`}
                        text_one={`The Brilliant reasons Entrada beyour one-stop-shop!`}
                        text_two={`sales@entrada.com`}
                        text_three={`+977(985) 456-32-12`} />

                    <Question_Card
                        className={`bg-Color`}
                        imgSrc={Photo9}
                        text={`Help & Support`}
                        text_one={`The Brilliant reasons Entrada beyour one-stop-shop!`}
                        text_two={`help@entrada.com`}
                        text_three={`+977(985) 456-32-12`} />
                </div>
            </Container>
        </div>
    )
}

export default Question