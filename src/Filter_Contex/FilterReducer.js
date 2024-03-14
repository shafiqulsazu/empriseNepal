const FilterReducer = (state, action) => {
    if (action.type == "FilterProduct") {
        return {
            ...state,
            Filter_Product: [...action.payload],
            All_Product: [...action.payload]
        }
    }

    /*
    // Get Shorting Product
    if (action.type == "GET_DROPDOWN_VALU") {
        return {
            ...state,
            Dropdwon: action.payload,
        }
    }
    // Get Shorting Product
    */

    if (action.type == "UPDATE_FILTERS_VALUE") {
        const { name, value } = action.payload
        return {
            ...state,
            filters: {
                ...state.filters,
                [name]: value
            }
        }
    }

    if (action.type == "FILTER_PRODUCTS") {
        let { All_Product } = state;
        let tempFilterProduct = [...All_Product]

        const { text, category, company, color } = state.filters;
        if (text) {
            tempFilterProduct = tempFilterProduct.filter((currentElm) => {
                return currentElm.name.toLowerCase().includes(text);
            })
        }


        if (category !== "All") {
            tempFilterProduct = tempFilterProduct.filter((crrentElm) => {
                return crrentElm.category === category;
            })
        }
        if (company !== "All") {
            tempFilterProduct = tempFilterProduct.filter((crrentElm) => {
                return crrentElm.company === company;
            })
        }
        if (color !== "All") {
            tempFilterProduct = tempFilterProduct.filter((crrentElm) => {
                return crrentElm.colors.includes(color)
            })
        }

        return {
            ...state,
            Filter_Product: tempFilterProduct
        }
    }


    return state
}
export default FilterReducer