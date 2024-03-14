import React, { useContext, useState } from 'react';
import { FiMinus, FiPlus } from "react-icons/fi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Price from '../Component/Price';
import ProductContext from '../Context/ProductContext';



const Cart_Page_Cart = ({ imgSrc, name, company, id, amount, price, color, stock, removeCart }) => {

    // const [amount, setamount] = useState(1)

    // For Increment
    let { Increment } = useContext(ProductContext);
    // For Increment

    // For Decrement
    let { Decrement } = useContext(ProductContext);
    // For Decrement
    return (
        <div className='mt-[20px] flex items-center'>

            <div className="flex items-center w-[250px]">
                <img src={imgSrc} alt="" className='w-[90px]' />
                <div className="ml-[20px]">
                    <h3 className='text-[20px] font-semibold font-Poppins'>{name}</h3>
                    <p className='text-[16px] font-medium font-Poppins'>{company}</p>
                    <p className='rounded-[100%] w-[20px] h-[20px]' style={{ backgroundColor: color }}>{color == null}</p>
                </div>
            </div>

            <Price className='text-[20px] font-semibold font-Poppins ml-[125px]' text={price} />

            {/* For Quantity toggol */}
            <div className="flex w-[100px] justify-between items-center ml-[300px]">
                <button className='text-[25px]' onClick={() => Decrement(id)}> <FiMinus /></button>
                <h1 className='text-[25px]'>{amount}</h1>
                <button className='text-[25px]' onClick={() => Increment(id)}> <FiPlus /></button>
            </div>
            {/* For Quantity toggol */}


            {/* Sub Total */}
            <h3 className='text-[24px] font-semibold ml-[310px]'><Price text={price * amount} /></h3>
            {/* Sub Total */}


            {/* Remove Part  */}
            <button onClick={removeCart} className='ml-[360px]'>
                <RiDeleteBin6Fill className='text-[20px] text-red-600 hover:text-black w-[30px]' />
            </button>
            {/* Remove Part  */}
        </div>
    )
}

export default Cart_Page_Cart