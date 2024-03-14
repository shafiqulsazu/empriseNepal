import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiPlus, FiMinus } from "react-icons/fi";
import ProductContext from '../Context/ProductContext';
import { FaCheck } from "react-icons/fa6";



const AddToCart = ({ product }) => {
    // This Product Connected My singleProduct
    const { id, stock, company, name, price, colors } = product

    // console.log(id)

    // Thats Part For Add To Cart Button 
    const [amount, setamount] = useState(1);
    // console.log(amount)

    // For Increment
    let Increment = () => {
        amount < stock ? setamount(amount + 1) : setamount(amount)
    }
    // For Increment

    // For Decrement
    let Decrement = () => {
        amount > 1 ? setamount(amount - 1) : setamount(1)
    }
    // For Decrement
    // Thats Part For Add To Cart Button 


    // Thats Part For addToCardBtn onclick
    const { addToCardBtn } = useContext(ProductContext)
    // Thats Part For addToCardBtn onclick

    const [color, setcolor] = useState(colors[0])


    return (
        <div>
            {/* Colors ke map kore amra color korchi and color ke pas kore disi thats it */}
            <p className='mt-[10px] items-center flex'>
                {
                    colors.map((currentColor, index) => {
                        return (
                            <button
                                key={index}
                                style={{ backgroundColor: currentColor }}
                                className={`rounded-[100%] w-[20px] h-[20px] ${color == currentColor ? "active" : "btn-color"}`}
                                onClick={() => setcolor(currentColor)}>

                                {color == currentColor ? <FaCheck className=' text-orange-600' /> : null}

                            </button>
                        )
                    })
                }
            </p>

            <div className="w-[328px]">
                {/* For Quantity toggol */}
                <div className="flex w-[100px] justify-between items-center my-[25px] mx-auto">
                    <button className='text-[25px]' onClick={Decrement}> <FiMinus /></button>
                    <h1 className='text-[25px]'>{amount}</h1>
                    <button className='text-[25px]' onClick={Increment}> <FiPlus /></button>
                </div>
                {/* For Quantity toggol */}
                <Link to={`/addtocart`} onClick={() => addToCardBtn(id, stock, amount, company, price, color, name, product)}>
                    <button className='w-[328px] h-[50px] border-gray-500 date rounded-[8px] mt-[15px] text-[20px] bg-hover font-semibold'>
                        Add to Cart
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default AddToCart