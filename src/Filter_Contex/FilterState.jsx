import React, { useContext, useEffect, useReducer } from 'react'
import FilterContext from './FilterContext'
import reducer from '../Filter_Contex/FilterReducer'
import ProductContext from '../Context/ProductContext'

const initialState = {
    All_Product: [],
    Filter_Product: [],
    // Dropdwon: "Lowest"
    filters: {
        text: "",
        category: "All",
        company: "All",
        color: "All",
    }
}

const FilterState = ({ children }) => {
    
    const [state, dispatch] = useReducer(reducer, initialState)

    const { product } = useContext(ProductContext)

    useEffect(() => {
        dispatch({
            type: "FilterProduct",
            payload: product
        })
    }, [product])


    // short Part/ dropdown part
    // const shorting = (event) => {
    //     let userClick = event.target.value
    //     // console.log(userClick)
    //     dispatch({
    //         type: "GET_DROPDOWN_VALU",
    //         payload: userClick
    //     })
    // }

    // useEffect(() => {
    //     dispatch({
    //         type: "GET_DROPDWON_PRODUCTS",
    //         payload: product
    //     })
    // }, [state.Dropdwon])


    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        return dispatch({
            type: "UPDATE_FILTERS_VALUE",
            payload: { name, value }
        })
    }

    // jodi Filter E jodi kisu change hoy tahole ei fanction cholbe
    useEffect(() => {
        dispatch({
            type: "FILTER_PRODUCTS"
        })
    }, [product,state.filters])


    return (
        <FilterContext.Provider value={{ ...state, updateFilterValue }}>
            {children}
        </FilterContext.Provider>
    )
}

export default FilterState