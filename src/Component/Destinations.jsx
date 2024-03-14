import React from 'react'
import Container from './Container'
import Commontxt from './Commontxt'
import Card from './Card'
import Common_txt_Two from './Common_txt_Two'
import Vietnam from '../assets/Vietnam.png'
import old_Rain from '../assets/old_Rain.png'
import Greece from '../assets/Greece.png'
import London from '../assets/London.png'
import Amsterdam from '../assets/Amsterdam.png'
import Paris from '../assets/Paris.png'
import Flex from './Flex'

const Destinations = () => {
    return (
        <Container>
            <Commontxt text="Top Destinations" />
            <Common_txt_Two text="Sost Brilliant reasons Entrada should be your one-stop-shop!" />
            <Flex className={`justify-between mt-[64px]`}>

                <div className='grid gap-[32px]'>

                    <a href={Vietnam} data-lightbox="roadtrip" className='w-[376px] h-[335px]'>
                        <Card imgSrc={Vietnam} RankTxT="4.5" tittle="Waterfall" tittle_class={`top-[251px] left-[32px]`} tittle_class2={`top-[279px] left-[35px]`} />
                    </a>

                    <a href={old_Rain} data-lightbox="roadtrip" className='w-[376px] h-[335px]'>
                        <Card imgSrc={old_Rain} RankTxT="4.2" tittle="Old Rain" tittle_class={`top-[251px] left-[32px]`} tittle_class2={`top-[279px] left-[35px]`} />
                    </a>
                </div>

                <a href={Greece} data-lightbox="roadtrip" className="w-[512px] h-[702px]">
                    <Card imgSrc={Greece} RankTxT="4.7" tittle="Greece" className="w-[512px] h-[702px]" tittle_class={`top-[618px] left-[32px]`} tittle_class2={`top-[646px] left-[35px]`} />
                </a>

                <div className=''>
                    <a href={London} data-lightbox="roadtrip" className={`w-[648px] h-[335px]`}>
                        <Card imgSrc={London} RankTxT="4.9" tittle="London" className={`w-[648px] h-[335px]`} tittle_class={`top-[251px] left-[32px]`} tittle_class2={`top-[279px] left-[35px]`} />
                    </a>

                    <Flex className={` justify-between flex mt-[32px]`}>
                        <a href={Amsterdam} data-lightbox="roadtrip" className={`w-[239px] h-[335px]`}>
                            <Card imgSrc={Amsterdam} RankTxT="4.5" tittle="Amsterdam" className={`w-[239px] h-[335px]`} tittle_class={`top-[251px] left-[32px]`} tittle_class2={`top-[279px] left-[35px]`} />
                        </a>
                        <a href={Paris} data-lightbox="roadtrip" className={`w-[376px] h-[335px]`}>
                            <Card imgSrc={Paris} RankTxT="4.8" tittle="Paris" className={`w-[376px] h-[335px]`} tittle_class={`top-[251px] left-[32px]`} tittle_class2={`top-[279px] left-[35px]`} />
                        </a>
                    </Flex>
                </div>

            </Flex>
        </Container>
    )
}

export default Destinations