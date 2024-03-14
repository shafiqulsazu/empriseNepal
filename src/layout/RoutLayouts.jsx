import React from 'react'
import Navber from './Navber'
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Footer'
import ProductState from '../Context/ProductState'
import FilterState from '../Filter_Contex/FilterState'

const RoutLayouts = () => {
    return (
        <ProductState>
            <FilterState>
                <Navber />
                <Outlet />
                <Footer />
            </FilterState>
        </ProductState>
    )
}

export default RoutLayouts