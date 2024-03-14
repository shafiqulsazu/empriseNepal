import React, { useEffect, useReducer } from 'react'
import ProductContext from './ProductContext'
import { data } from './data'
import { reducer } from './reducer'
import axios from 'axios'


// const getLocalStorageData = () => {
//     let localStorageData = localStorage.getItem("Emprise")
//     if (localStorageData == []) {
//         return [];
//     }
//     else{
//         return JSON.parse(localStorageData)
//     }
// }

// This is my initialState/ state value
const initialState = {
    isLoading: false,
    product: [],
    featured: [],
    isError: false,
    // For single product
    isSingleLoading: false,
    singleProduct: [],
    Singlefeatured: [],
    isSingleError: false,
    Fourimage: [],
    Cart: [],
    TotaQuantity: 0,
    TotalAmount: 0,
    DeliveryCharge: 10000,
    Grid_Veiw: true,
    // Cart: getLocalStorageData()
}
// This is my initialState/ state value



const ProductState = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    // console.log(state)
    // console.log(state)

    //  Api Data For Get Product
    const API = "https://api.pujakaitem.com/api/products"

    const getProducts = async (url) => {
        const res = await axios.get(url)
        const product = await res.data

        dispatch({
            type: "LOADING",
            payload: product,
        })
        try {
            dispatch({
                type: "DATA",
                payload: product,
            })
        } catch (error) {
            dispatch({
                type: "ERROR",
                payload: product,
            })
        }
    }

    useEffect(() => {
        getProducts(API)
    }, [])

    //  Api Data For Get Product


    // Get SingleProduct
    const get_Single_Products = async (url) => {
        const res = await axios.get(url)
        const singleProduct = await res.data

        dispatch({
            type: "SINGLE_PRODUCT_LOADING",
            payload: singleProduct,
        })
        try {
            dispatch({
                type: "SINGLE_PRODUCT_DATA",
                payload: singleProduct,
            })
            dispatch({
                type: "IMG",
                payload: singleProduct,
            })
        } catch (error) {
            dispatch({
                type: "SINGLE_PRODUCT_ERROR",
                payload: singleProduct,
            })
        }
    }
    // Get SingleProduct

    // Grid Vew
    const setGridvew = () => {
        dispatch({
            type: "SET_GRID_VIEW"
        })
    }
    const setListvew = () => {
        dispatch({
            type: "SET_LIST_VIEW"
        })
    }
    // Grid Vew

    // AddToCart
    const addToCardBtn = (id, stock, amount, company, price, color, name, product) => {
        dispatch({
            type: "ADD_TO_CART",
            payload: { id, stock, amount, company, price, color, name, product }
        })
    }
    // AddToCart

    // AddToCart-Remove
    const removeCartItm = (id) => {
        return dispatch({
            type: "REMOVE_CART_ITM",
            payload: id,
        })
    }
    // AddToCart-Remove

    // Clear_Cart
    const Clear_Cart = (id) => {
        return dispatch({
            type: "CLEAR_CART_ITM",
            payload: id,
        })
    }
    // Clear_Cart

    // For localStore set Part
    // useEffect(() => {
    //     localStorage.setItem("Emprise", JSON.stringify(state.Cart))
    // }, [state.Cart])
    // For localStore set Part


    // For Increment Cart Quantity/Amount
    const Increment = (id) => {
        dispatch({
            type: "INCREMENT_QUANTITY",
            payload: id,
        })
    }
    // For Increment Cart Quantity/Amount

    // For Increment Cart Quantity/Amount
    const Decrement = (id) => {
        dispatch({
            type: "DECREMENT_QUANTITY",
            payload: id,
        })
    }
    // For Increment Cart Quantity/Amount

    // ToQuantity  And  TotalAmount 
    useEffect(() => {
        dispatch({ type: "GET_TOTAL_Quantity " })
        dispatch({ type: "GET_TOTAL_TOTALAMOUNT " })
    }, [state.Cart])
    // ToQuantity  And  TotalAmount 
    return (
        <ProductContext.Provider value={{ ...state, get_Single_Products, addToCardBtn, removeCartItm, Clear_Cart, Increment, Decrement, setGridvew, setListvew }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductState