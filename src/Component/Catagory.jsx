import React from 'react'
import Container from './Container'
import Slider from "react-slick";
import Catagory_Card from './Catagory_Card';
import Beach from '../assets/Beach.png'
import Bungee from '../assets/Bungee.png'
import City from '../assets/City.png'
import Backpack from '../assets/Backpack.png'
import Jungle from '../assets/Jungle.png'
import Commontxt from './Commontxt';
import Common_txt_Two from './Common_txt_Two';
import Left from './Icon/Left';
import Right from './Icon/Right';

const Catagory = () => {
    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <Left/>,
        nextArrow: <Right/>,
    };
    return (
        <Container className={`mt-[222px]`}>
            <Commontxt text={`Select Category`}/>
            <Common_txt_Two text="Sost Brilliant reasons Entrada should be your one-stop-shop!"/>
            <Slider {...settings} className="mt-[60px]">
                <Catagory_Card RankTxT="4.9" src_Card={Beach} text_Card="Beach Activity"/>
                <Catagory_Card RankTxT="4.5" src_Card={Bungee} text_Card="Bungee Jump"/>
                <Catagory_Card RankTxT="3.9" src_Card={City} text_Card="City Tours"/>
                <Catagory_Card RankTxT="4.8" src_Card={Backpack} text_Card="Hiking trips"/>
                <Catagory_Card RankTxT="4.9" src_Card={Jungle} text_Card="Jungle"/>
            </Slider>
        </Container>
    )
}

export default Catagory