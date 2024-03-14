import React from 'react'
import Container from './Container'
import Commontxt from './Commontxt'
import Common_txt_Two from './Common_txt_Two'
import Travle from './Travle'
import Mountain from '../assets/Mountain.png'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import Left from './Icon/Left'
import Right from './Icon/Right'
import { data } from '../Context/data'
import { Link } from 'react-router-dom'

const Trending = () => {

  const item = data;

  // Slider Part
  const settings = {
    className: "center",
    // infinite: true,
    // centerPadding: "60px",
    speed: 500,
    slidesToShow: 3,
    swipeToSlide: true,
    prevArrow: <Left />,
    nextArrow: <Right />,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };
  // Slider Part

  
  return (
    <Container className={`mt-[136px]`}>
      <Commontxt text={`Trending 2021`} />
      <Common_txt_Two text="Sost Brilliant reasons Entrada should be your one-stop-shop!" />

      <Slider {...settings}>
        {
          item.map((val) => {
            return (
              <Link to={`/singleProduct/${val.id}`}>
                <Travle
                  className={`pb-[136px] pt-[64px]`}
                  imgSrc={val.thumbnail}
                  travle_head={val.title}
                  travle_Price={val.price}
                  Badge_text={val.badge} />
              </Link>
            )
          })
        }
      </Slider>

    </Container>
  )
}

export default Trending