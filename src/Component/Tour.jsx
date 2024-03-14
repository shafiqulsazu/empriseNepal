import React from 'react'
import Container from './Container'
import Commontxt from './Commontxt'
import Common_txt_Two from './Common_txt_Two'
import Tour_Card from './Tour_Card'
import Photo4 from '../assets/Photo4.png'
import Photo5 from '../assets/Photo5.png'
import Slider from "react-slick";
import Left from './Icon/Left'
import Right from './Icon/Right'


const Tour = () => {
    var settings = {
        // dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <Left/>,
        nextArrow: <Right/>,
      };
    return (
        <Container className={`mt-[136px]`}>
            <Commontxt text="Tour Guides" />
            <Common_txt_Two text={`Sost Brilliant reasons Entrada should be your one-stop-shop!`} />

            <Slider {...settings}>
                <Tour_Card imgSrc={Photo4} text_one={`Adventure Guru`} text_two={`Martina James Junior`} text_three={`Check Out Daily Deals and Promotion on hotels. Easy & Fast Booking.`}
                    text_four={`Check Out Daily Deals and Promotion on hotels. Easy & Fast Booking.`} />
                <Tour_Card imgSrc={Photo5} text_one={`Adventure Guru`} text_two={`Martina James Junior`} text_three={`Check Out Daily Deals and Promotion on hotels. Easy & Fast Booking.`}
                    text_four={`Check Out Daily Deals and Promotion on hotels. Easy & Fast Booking.`} />
            </Slider>

        </Container>
    )
}

export default Tour