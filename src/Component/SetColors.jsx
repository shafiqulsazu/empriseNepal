import React, { useContext } from 'react'
import Travle_Head from './Travle_Head'
import FilterContext from '../Filter_Contex/FilterContext'
import { FaCheck } from "react-icons/fa6";
import Flex from './Flex';

const SetColors = () => {

    const { All_Product, filters: { color }, updateFilterValue } = useContext(FilterContext)

    const getUnickdata = (data, property) => {
        let newVal = data.map((currenElm) => {
            return currenElm[property]
        })

        return newVal = ["All", ...new Set([].concat(...newVal))]
        // return newVal = newVal.flat(3)
    }

    const colorsOnlyData = getUnickdata(All_Product, "colors")
    // console.log(colorsOnlyData)
    return (
        <div className='mt-[30px]'>
            <Travle_Head text={`Colors`} />
            <Flex className={`items-center`}>
                {
                    colorsOnlyData.map((currentColor, index) => {
                        if (currentColor == "All") {
                            return <button
                                key={index}
                                onClick={updateFilterValue}
                                value={currentColor}
                                name='color'
                                className='rounded-[100%] w-[20px] h-[20px] text-[20px] font-serif mr-[10px]'
                                style={{ backgroundColor: currentColor }}>
                                {currentColor}
                            </button>
                        }
                        return <button
                            key={index}
                            onClick={updateFilterValue}
                            value={currentColor}
                            name='color'
                            className={`rounded-[100%] w-[25px] h-[25px] ml-[5px] ${color == currentColor ? "active" : "btn-color"}`}
                            style={{ backgroundColor: currentColor }}>
                            {color == currentColor ? <FaCheck className=' text-orange-600 text-[20px]' /> : null}
                        </button>
                    })
                }
            </Flex>
        </div>
    )
}

export default SetColors