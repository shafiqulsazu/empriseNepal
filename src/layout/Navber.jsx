import React, { useContext } from 'react'
import Container from '../Component/Container'
import Flex from '../Component/Flex'
import Menu from '../Component/Menu'
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
import ProductContext from '../Context/ProductContext';
import { LuShoppingCart } from "react-icons/lu";



const Navber = () => {
    const { TotaQuantity } = useContext(ProductContext)
    return (
        <Container className={`py-[30px] mb-[56px]`}>
            <Flex className={`items-center justify-between`}>

                <Link to={`/`}>
                    <h1 className='text-[40px] text-Color font-Poppins font-semibold'>Emprise</h1>
                </Link>

                <Menu />

                <Flex className="items-center relative">

                <div
                className="absolute duration-300 -top-10 w-[150px] hidden bg-bdrColor text-center p-1 rounded-md"
              >
              </div>
              <input
                type='text'
                className="border-2 rounded-md placeholder:font-pop placeholder:text-sm placeholder:font-medium placeholder:text-primaryColor border-bdrColor w-0 px-16  h-10 focus:outline-bdrColor  font-pop text-sm font-medium text-primaryColor duration-500"
                placeholder='search'
              />
               <IoIosSearch className='text-[30px] cursor-pointer' />
             </Flex>
               

                <Link to={`/addtocart`}>
                    <div className=" relative">
                        <LuShoppingCart className='text-[40px]' />
                        <h1 className='absolute bg-indigo-600 rounded-[100%] w-[25px] h-[25px] top-[-5px] right-[-10px] text-center text-white'>{TotaQuantity}</h1>
                    </div>
                </Link>

                <div className="account">

                    <button className='text-[20px] text-white font-Poppins font-normal py-[14px] px-[12px]
                    bg-hover hover:bg-transparent border-hover border-[1px] hover:text-Color transition-[.2s] rounded-[28px] leading-[20px] w-[104px] mr-[10px]'>Login</button>

                    <button className='text-[20px] text-white font-Poppins font-normal py-[14px] px-[12px]
                    bg-hover hover:bg-transparent border-hover border-[1px] hover:text-Color transition-[.2s] rounded-[28px] leading-[20px] w-[104px] '>Sing Up</button>
                </div>
            </Flex>
        </Container>
    )
}

export default Navber