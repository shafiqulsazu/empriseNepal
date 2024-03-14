import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Common_TxT_Three from '../../Component/Common_TxT_Three';
import Common_txt_Two from '../../Component/Common_txt_Two';
import Commontxt from '../../Component/Commontxt';
import Container from '../../Component/Container';
import Flex from '../../Component/Flex';
import NoteIcon from '../../Component/Icon/NoteIcon';
import List from '../../Component/List';
import Price from '../../Component/Price';
import ProductContext from '../../Context/ProductContext';
import Label from '../../Component/Label';
import Input from '../../Component/Input';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import Duration from '../../Component/Duration';
import SingleProductImage from '../SingleProductImage';
import Details_MainImg from '../Details_MainImg';
import AddToCart from '../AddToCart';
import Accordion from '../../Accordion';





const Product_details = () => {
    const API = "https://api.pujakaitem.com/api/products"

    const { get_Single_Products, singleProduct, Fourimage } = useContext(ProductContext)
    // console.log(Fourimage)
    const { id } = useParams();

    // console.log(singleProduct)

    const {
        // id: aaa,
        name,
        company,
        price,
        // colors,
        description,
        category,
        featured,
        stock,
        reviews,
        stars,
        image = [{ url: "" }],
        //  If i use map for image. It won't work. If you want it to work. tahole eta ke state er vitor store koro 
    } = singleProduct

    let a = image

    useEffect(() => {
        get_Single_Products(`${API}?id=${id}`)
    }, [])

    // const [state, setstate] = useState(singleProduct)

    return (
        <Container>
            {/* For Image */}
            <Flex className={`justify-between mb-[50px]`}>
                <div className={`grid gap-[16px]`}>
                    {
                        image.map((val) => {
                            return (
                                <SingleProductImage key={val.id} imgSrc={val.url} alt={val.filename} />
                            )
                        })
                    }
                </div>
                <Details_MainImg imgSrc={a[0].url} />
            </Flex>
            {/* For Image */}

            {/* <Details_MainImg imags={image} /> */}


            <div className=""></div>

            {/* Details data */}
            <Flex className={`justify-between`}>

                {/* One */}
                <div className="">
                    <Commontxt text={name} className={`text-[36px]`} />
                    <Flex>
                        <h3 className='mr-[5px]'>Rating</h3>
                        <h3 className='font-semibold text-[16px] font-Poppins'>{reviews} Reviews</h3>
                    </Flex>
                    <hr className='mt-[10px]' />

                    {/* List Part */}
                    <div className="w-[785px] flex justify-between mt-[46px]">
                        <List className={`hover:text-hover`} text={`Overview`} />
                        <List className={`hover:text-hover`} text={`Itinerary`} />
                        <List className={`hover:text-hover`} text={`Inclusions`} />
                        <List className={`hover:text-hover`} text={`Reviews`} />
                        <List className={`hover:text-hover`} text={`FAQ`} />
                        <List className={`hover:text-hover`} text={`Essential Info`} />
                    </div>
                    {/* List Part */}

                    {/* Description */}
                    <div className="w-[798px]  mt-[63px]">
                        <div className="flex justify-between">
                            <NoteIcon />
                            <Common_TxT_Three text={description} className={`text-Color w-[648px] `} />
                        </div>
                        <Duration />
                    </div>
                    {/* Description */}

                    {/* Accordion */}
                    <div className="ml-[136px] mt-[90px]">
                        <Accordion number={`1`}Days={`Day 1`}/>
                        <Accordion number={`2`}Days={`Day 2`}/>
                        <Accordion number={`3`}Days={`Day 3`}/>
                        <Accordion number={`4`}Days={`Day 4`}/>
                        <Accordion number={`5`}Days={`Day 5`}/>
                        <Accordion number={`6`}Days={`Day 6`}/>
                    </div>
                    {/* Accordion */}
                </div>

                {/* One */}

                <div className="w-[376px] pt-[16px] pl-[24px]">

                    <del className='text-red-500 font-bold'>
                        <Price text={price + 8500000} className={`text-red-500 text-[14px]`} />
                    </del>

                    <div className="flex items-center justify-between">
                        <Price text={price + 5400000} className={`text-[36px]`} />
                        <Common_txt_Two text={`per persone`} className={`text-[15px]`} />
                        <h3 className='text-[16px] text-hover font-medium'>20% OFF</h3>
                    </div>

                    <Common_TxT_Three text={`*Price based on selections bellow.`} className={`mt-[4px] mb-[32px]`} />

                    <p className='text-[18px] font-medium mb-[15px]'>Available : <span className='text-[16px] font-medium'>{stock > 0 ? "In Stock" : "Not Available"}</span></p>



                    {/* For Input */}
                    <form className='gap-[24px] grid'>
                        <div className="">
                            <Label text={`Dates`} htmlFor={`time`} />
                            <Input id={`time`} type={`date`} className={`py-[12px] px-[16px] w-[328px] h-[48px] border-gray-500 date rounded-[8px] mt-[8px]`} />
                        </div>

                        <div className="relative">
                            <Label text={`Travelers`} htmlFor={`timee`} />
                            <Input id={`timee`} type={`text`} className={`py-[12px] px-[16px] w-[328px] h-[48px] border-gray-500 date rounded-[8px] mt-[8px]`} />

                            {/* I-D */}
                            <div className="flex w-[100px] justify-between items-center absolute top-[50%] right-[30px]">
                                <button className='text-[25px] text-gray-500  font-bold'><CiCircleMinus /></button>
                                <h3 className='text-[25px]  font-bold'>0</h3>
                                <button className='text-[25px] text-gray-500  font-bold'><CiCirclePlus /></button>
                            </div>
                            {/* I-D */}
                        </div>

                        <div className="relative">
                            <Label text={`Selections`} htmlFor={`timee`} />
                            <Input id={`timeee`} type={`text`} placeholder={`Flight, hotel, car etc.`} className={`py-[12px] px-[16px] w-[328px] h-[48px] border-gray-500 date rounded-[8px] mt-[8px]`} />
                            <button className='text-[25px] text-gray-500  font-bold absolute top-[55%] right-[50px]'><CiCirclePlus className='font-bold text-black' /></button>
                        </div>
                        <Input id={`timeeee`} type={`submit`} value={`Check Availability`} className={`py-[12px] px-[16px] w-[328px] h-[48px] border-gray-500 date rounded-[8px] naim`} />
                    </form>
                    {/* For Input */}

                    {/* AddToCart */}
                    <div className="mt-[50px]">
                        {stock > 0 && < AddToCart product={singleProduct} />}
                    </div>
                    {/* AddToCart */}

                </div>
            </Flex>
            {/* Details data */}
        </Container>
    )
}

export default Product_details