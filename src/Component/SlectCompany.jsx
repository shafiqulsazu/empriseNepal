import React, { useContext } from 'react'
import FilterContext from '../Filter_Contex/FilterContext'
import Travle_Head from './Travle_Head'

const SlectCompany = () => {

    const { All_Product, updateFilterValue } = useContext(FilterContext)

    const getUnickdata = (data, property) => {
        let newVal = data.map((currenElm) => {
            return currenElm[property]
        })

        return newVal = ["All", ...new Set(newVal)]
    }

    const companyOnlyData = getUnickdata(All_Product, "company")
    // console.log(companyOnlyData)
    return (
        <div className='mt-[40px]'>
            <Travle_Head text={`Company`} />
            <hr className={`mt-[10px] border-gray-500`} />
            <select
                name="company"
                onClick={updateFilterValue}
                className='mt-[15px] focus:outline-none border-[1px] font-serif text-[20px] first-letter:uppercase py-[5px]'>
                {
                    companyOnlyData.map((currenElement, index) => {
                        return <option
                            key={index}
                            value={currenElement}
                            name="company"
                            className='font-serif text-[20px]' >{currenElement}</option>
                    })
                }
            </select>
        </div>
    )
}

export default SlectCompany