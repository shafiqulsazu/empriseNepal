import React, { useContext } from 'react'
import Travle from '../../Component/Travle'
import { Link } from 'react-router-dom'
import ProductContext from '../../Context/ProductContext'
import FilterContext from '../../Filter_Contex/FilterContext'

const GridVew_Cart = () => {

    // First I use that
    const { product } = useContext(ProductContext)

    // but when i used search option that time i use this api
    const { Filter_Product } = useContext(FilterContext)

    return (
        <div className="grid grid-cols-2 w-[1114px] gap-[40px]">
            {
                Filter_Product.map((value) => {
                    return (
                        // This link for my singleProduct page component. component name Product_details
                        <Link to={`/singleProduct/${value.id}`}>
                            <Travle
                                key={value.id}
                                imgSrc={value.image}
                                travle_head={value.name}
                                company={value.company}
                                travle_Price={value.price}
                                category={value.category} />
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default GridVew_Cart