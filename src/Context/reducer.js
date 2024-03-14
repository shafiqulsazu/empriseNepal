
export const reducer = (state, action) => {
    // thats my looding part
    if (action.type === "LOADING") {
        return {
            ...state,
            isLooding: true,
        }
    }
    // thats my looding part

    // All data part
    if (action.type === "DATA") {
        const featureProduct = action.payload.filter((currentELM) => {
            return currentELM.featured == true
        })
        return {
            ...state,
            isLooding: false,
            product: action.payload,
            featured: featureProduct,
        }
    }
    // All data part

    // Error Part
    if (action.type === "ERROR") {
        return {
            ...state,
            isLooding: false,
            isError: true,

        }
    }
    // Error Part


    // Grid View
    if (action.type == "SET_GRID_VIEW") {
        return {
            ...state,
            Grid_Veiw: true,
        }
    }
    // Grid View

    // List View
    if (action.type == "SET_LIST_VIEW") {
        return {
            ...state,
            Grid_Veiw: false,
        }
    }
    // List View


    // thats my single_looding part
    if (action.type === "SINGLE_PRODUCT_LOADING") {
        return {
            ...state,
            isSingleLoading: true,
        }
    }
    // thats my single_looding part

    // All single_data part
    if (action.type === "SINGLE_PRODUCT_DATA") {
        // const SinglefeatureProduct = action.payload.filter((currentELM) => {
        //     return currentELM.featured == true
        // })
        return {
            ...state,
            isSingleLoading: false,
            singleProduct: action.payload,
            // Singlefeatured: SinglefeatureProduct,
        }
    }
    // All single_data part

    // single_Error Part
    if (action.type === "SINGLE_PRODUCT_ERROR") {
        return {
            ...state,
            isSingleLoading: false,
            isSingleError: true,

        }
    }
    if (action.type === "IMG") {
        return {
            ...state,
            Fourimage: action.payload.image
        }
    }
    // single_Error Part

    // Add To Cart
    if (action.type == "ADD_TO_CART") {
        let { id, stock, name, amount, color, price, product } = action.payload

        // ExistProduct
        let existProduct = state.Cart.find((currentElm) => currentElm.id == id + color)

        if (existProduct) {
            let updateAmount = state.Cart.map((existP) => {
                if (existP.id == id + color) {

                    let incemEamount = existP.amount + amount

                    if (incemEamount >= existP.stock) {
                        incemEamount = existP.stock
                    }
                    return {
                        ...existP,
                        amount: incemEamount
                        // uporer line ke erokom short kore o lekha jay but ete amount dhore
                    }
                }
                else {
                    return existP
                }
            })
            return {
                ...state,
                Cart: updateAmount
            }
        }
        else {
            // ExistProduct

            let cartProduct = {
                id: id + color,
                color,
                name,
                company: product.company,
                price,
                image: product.image[0].url,
                stock,
                amount,
                quantity: product.quantity
            }
            return {
                ...state,
                Cart: [...state.Cart, cartProduct]
            }
        }
    }
    // Add To Cart

    // AddToCart-Remove
    if (action.type == "REMOVE_CART_ITM") {

        let removeCart = state.Cart.filter((currentElm) => {
            currentElm.id !== action.payload
        })
        return {
            ...state,
            Cart: removeCart
        }
    }
    // AddToCart-Remove

    // Clear_Cart
    if (action.type == "CLEAR_CART_ITM") {
        return {
            ...state,
            Cart: []
        }
    }
    // Clear_Cart

    // For Increment Cart Quantity/Amount
    if (action.type == "INCREMENT_QUANTITY") {
        return {
            ...state,
            Cart: state.Cart.map((currentQuantity) => {

                if (currentQuantity.id == action.payload) {

                    let IncrementAmount = currentQuantity.amount + 1

                    if (IncrementAmount >= currentQuantity.stock) {
                        IncrementAmount = currentQuantity.stock
                    }
                    return {
                        ...currentQuantity,
                        amount: IncrementAmount
                    }
                }
                return currentQuantity
            })
        }
    }
    // For Increment Cart Quantity/Amount

    // For Increment Cart Quantity/Amount
    if (action.type == "DECREMENT_QUANTITY") {
        return {
            ...state,
            Cart: state.Cart.map((currentQuantity) => {
                if (currentQuantity.id == action.payload) {
                    let DecrementAmount = currentQuantity.amount - 1
                    if (DecrementAmount <= 1) {
                        DecrementAmount = 1
                    }
                    return {
                        ...currentQuantity,
                        amount: DecrementAmount
                    }
                }
                return currentQuantity
            })
        }
    }
    // For Increment Cart Quantity/Amount

    // ToTalQuantity  And  TotalAmount 
    if (action.type == "GET_TOTAL_Quantity ") {
        let updateQuantity = state.Cart.reduce((initialValue, currentValu) => {
            let { amount } = currentValu
            initialValue += amount
            return initialValue
        }, 0)
        return {
            ...state,
            TotaQuantity: updateQuantity,
        }
    }
    // ToTalQuantity 

    // TotalAmount 
    if (action.type == "GET_TOTAL_TOTALAMOUNT ") {
        let updatePrice = state.Cart.reduce((initialValue, currentValu) => {

            let { amount, price } = currentValu

            initialValue = initialValue + price * amount
            return initialValue
        }, 0)
        return {
            ...state,
            TotalAmount: updatePrice,
        }
    }
    // TotalAmount 
    return state
}