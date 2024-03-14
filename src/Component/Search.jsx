import React, { useContext } from 'react'
import Input from './Input'
import FilterContext from '../Filter_Contex/FilterContext'

const Search = () => {
    const { updateFilterValue, filters: { text } } = useContext(FilterContext)

    return (
        <div>
            <form action="#" onSubmit={(e) => e.preventDefault()}>
                <Input
                    type={`text`}
                    name={`text`}
                    placeholder={`Search`}
                    value={text}
                    onChange={updateFilterValue}
                    className="w-[450px] h-[50px] py-[30px] pl-[40px] text-black date"
                />
            </form>
        </div>
    )
}

export default Search