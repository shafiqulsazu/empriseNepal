import React, { useContext } from 'react'
import Container from '../../Component/Container'
import Flex from '../../Component/Flex'
import List from '../../Component/List'
import ProductContext from '../../Context/ProductContext'
import Cart_Page_Cart from '../Cart_Page_Cart'
import { Link } from 'react-router-dom'
import Price from '../../Component/Price'

const AddToCartPage = () => {
    const { Cart, Clear_Cart, TotalAmount, DeliveryCharge } = useContext(ProductContext)
    const { removeCartItm } = useContext(ProductContext)

    if (Cart.length == 0) {
        return (
            <Container>

                <h1 className="text-[50px] font-serif text-center">
                    No Item Available
                </h1>
            </Container>
        )
    }

    return (
        <Container>
            <div className="flex justify-between">
                <List text={`Item`} className={`text-[20px] font-semibold text-black`} />
                <List text={`Price`} className={`text-[20px] font-semibold text-black`} />
                <List text={`Quantity`} className={`text-[20px] font-semibold text-black`} />
                <List text={`Subtotal`} className={`text-[20px] font-semibold text-black`} />
                <List text={`Remove`} className={`text-[20px] font-semibold text-black`} />
            </div>
            <hr className='mt-[15px] border-black' />

            {
                Cart.map((crrentValu) => {
                    // console.log(Cart)
                    return <Cart_Page_Cart
                        key={crrentValu.id}
                        imgSrc={crrentValu.image}
                        name={crrentValu.name}
                        company={crrentValu.company}
                        {...crrentValu}
                        removeCart={() => removeCartItm(crrentValu.id)} />
                })
            }


            {/* Total Details */}
            <Flex className="justify-end mt-[20px]" >
                <div className="bg-gray-300 grid gap-[10px] py-[20px] px-[10px] w-[220px] rounded-[10px]">
                    <div className="flex items-center justify-between">
                        <h3 className='mr-[15px] font-semibold font-Poppins'>Subtotal :</h3>
                        <Price text={TotalAmount} className={`text-black`} />
                    </div>
                    <div className="flex items-center justify-between">
                        <h3 className='mr-[15px] font-semibold font-Poppins'>Delivery Charge :</h3>
                        <Price text={DeliveryCharge} className={`text-black`} />
                    </div>
                    <hr className='border-black' />
                    <div className="flex items-center justify-between">
                        <h3 className='mr-[15px] font-semibold font-Poppins'>Order Total :</h3>
                        <Price text={TotalAmount + DeliveryCharge} className={`text-black`} />
                    </div>
                </div>
            </Flex>
            {/* Total Details */}

            <Flex className={`justify-between mt-[15px]`}>
                <Link to={`/special`} className='bg-hover text-white text-[22px] font-semibold font-sans py-[10px] px-[15px] rounded-[10px]'>
                    Continue Shoping
                </Link>
                <button
                    onClick={Clear_Cart}
                    className='bg-red-600 text-white text-[22px] font-semibold font-sans py-[10px] px-[15px] rounded-[10px]'>
                    Clear Cart</button>
            </Flex>


        </Container>
    )
}

export default AddToCartPage