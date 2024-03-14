import React, { useEffect, useState } from 'react'
import Header from './Header'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import Container from '../Component/Container';
import Left_Icon from '../Component/Icon/Left_Icon';
import Right_Icon from '../Component/Icon/Right_Icon';
import Input from '../Component/Input';
import axios from 'axios';
import { IoIosSearch } from "react-icons/io";


const Bennar = () => {

    const settings = {
        // dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <Left_Icon />,
        nextArrow: <Right_Icon />,
    };

    // Countries Api
    const [all, setAll] = useState([])

    // If you want use rest api countrise then Fllow this document
    // first use useEffect
    useEffect(() => {
        // then use async function
        async function all() {
            // now use await into your variable for to holding data then use axios.get for to get axios data

            // karon amra jani post diye amra data diye thaki and get diye amara jekono data ke peye thaki. ar amra jehetu axios er theke country rest er data pete cai thats why we use
            let data = await axios.get("https://restcountries.com/v3.1/all");
            setAll(data.data);
        }
        all()
    }, [])

    return (
        <Container className={`relative`}>
            <Slider {...settings} className="relative">
                <Header className={`bg-bennar h-[646px] pl-[136px] pr-[83px] bg-no-repeat bg-center bg-cover bg-rounded-[32px]`} />
                <Header className={`bg-bennar2 h-[646px] pl-[136px] pr-[83px] bg-no-repeat bg-center bg-cover bg-rounded-[32px]`} />
                <Header className={`bg-bennar3 h-[646px] pl-[136px] pr-[83px] bg-no-repeat bg-center bg-cover rounded-[32px]`} />
                <Header className={`bg-bennar4 h-[646px] pl-[136px] pr-[83px] bg-no-repeat bg-center bg-cover rounded-[32px]`} />
                <Header className={`bg-bennar5 h-[646px] pl-[136px] pr-[83px] bg-no-repeat bg-center bg-cover rounded-[32px]`} />
            </Slider>

            <div className="bennar_last_part w-[1328px] py-[40px] bg-white flex px-[72px] justify-between absolute 
            top-[558px] left-[136px]">

                <div className="w-[372x] flex flex-col">
                    <label className='text-[#212529] text-[28px] font-Poppins font-semibold pb-[16px]'>Location</label>
                    <select className=' outline-none border-b-black border-[1px]'>
                        {all.map(item =>
                            <option>{item.region}</option>
                        )}
                    </select>
                </div>

                <div className="">
                    <label className='text-[#212529] text-[28px] font-Poppins font-semibold pb-[16px]'>Activity</label>
                    <Input type={`text`} id={`Activity`} placeholder={`Activity`} />
                </div>


                <div className="">
                    <label className='text-[#212529] text-[28px] font-Poppins font-semibold pb-[16px]'>Date</label>
                    <Input type={`date`} />
                </div>

                <button className='py-[15px] px-[20px] bg-hover hover:bg-transparent border-hover border-[1px] text-white 
                    hover:text-Color transition-[.2s] rounded-[18px] '>
                    <IoIosSearch className='text-center items-center font-Poppins font-normal text-[40px]'/>
                </button>
            </div>
        </Container>
    )
}

export default Bennar