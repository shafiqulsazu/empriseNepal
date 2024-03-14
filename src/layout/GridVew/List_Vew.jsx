import React, { useContext } from 'react'
import Travle_Head from '../../Component/Travle_Head'
import ProductContext from '../../Context/ProductContext'
import { Link } from 'react-router-dom'
import FilterContext from '../../Filter_Contex/FilterContext'

const List_Vew = () => {
    // First I use that
    const { product } = useContext(ProductContext)

    // but when i used search option that time i use this api
    const { Filter_Product } = useContext(FilterContext)
    return (
        <div>
            <div className='' >
                {
                    Filter_Product.map((currentElm) => {
                        return (

                            <div className="flex py-[16px] px-[16px] border-[1px] w-[1114px] mt-[10px] List_view" key={currentElm.id}>
                                <img src={currentElm.image} alt="" className='w-[480px] h-[256px]' />
                                <div className="ml-[50px]">
                                    <Travle_Head className={`first-letter:uppercase`} text={currentElm.name} />
                                    <h3 className='text-[22px] font-Poppins font-mideum first-letter:uppercase my-[5px]'>{currentElm.company}</h3>
                                    <h3 className='w-[520px] text-[18px] font-serif font-medium'>{currentElm.description.slice(0, 149)}</h3>

                                    <Link to={`/singleProduct/${currentElm.id}`}>
                                        <button className=' bg-blue-600 text-[18px] text-white py-[10px] px-[20px] font-sans font-medium mt-[10px]'>Read More</button>
                                    </Link>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default List_Vew