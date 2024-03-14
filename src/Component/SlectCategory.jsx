import React, { useContext } from 'react'
import FilterContext from '../Filter_Contex/FilterContext'
import Travle_Head from './Travle_Head'

const SlectCategory = () => {

    const { All_Product, updateFilterValue } = useContext(FilterContext)

    const getUnickdata = (data, property) => {
        let newVal = data.map((curElm) => {
            return curElm[property];
        })

        return newVal = ["All", ...new Set(newVal)];
    }

    const categoryOnlyData = getUnickdata(All_Product, "category")
    return (
        <div>
            <Travle_Head text={`Category`} />
            <hr className={`mt-[10px] mb-[30px] border-gray-500`} />
            {
                categoryOnlyData.map((cureentElm, index) => {
                    return (

                        <button onClick={updateFilterValue} type='button' name='category' value={cureentElm} key={index} className='block border-b-[1px] font-serif text-[20px] first-letter:uppercase'>{cureentElm}</button>
                    )
                })
            }
        </div>
    )
}

export default SlectCategory