import React, { useContext } from 'react'
import Container from './Container'
import Seller_Card from './Seller_Card'
import Commontxt from './Commontxt'
import Common_txt_Two from './Common_txt_Two'
import Flex from './Flex'
import ProductContext from '../Context/ProductContext'
import { Link } from 'react-router-dom'


const Seller = () => {

  const { isLoading } = useContext(ProductContext)
  const { featured } = useContext(ProductContext)
  if (isLoading) {
    return <Container>
      <h1 className='text-[500px]'>.........Looding</h1>
    </Container>
  }
  return (
    <Container className="mt-[136px] relative">
      <div className="">
        <Commontxt text="Best seller" />
        <Common_txt_Two text="Sost Brilliant reasons Entrada should be your one-stop-shop!" />
      </div>

      <button className='bg-hover hover:bg-transparent border-hover border-[1px]  hover:border-gray-500 text-white py-[22px] px-[36px] rounded-[40px] font-Poppins 
        tex-[24px] hover:text-black transition-[.5s] absolute top-[16px] right-0'>Check All</button>

      <Flex className={`justify-between mt-[64px]`}>
        {
          featured.map((value) => {
            return (
              <Link to={`/singleProduct/${value.id}`}>
                <Seller_Card
                  imgSrc={value.image}
                  Badge_txt={`30%`}
                  title={`10 Days | 09 Night`}
                  sell_price={value.price}
                  Sell_title={value.name}
                  text={`Check Out Daily Deals and Promotion on Hotels. 
              Easy & Fast Booking`} />
              </Link>
            )
          })
        }
      </Flex>
    </Container>
  )
}

export default Seller