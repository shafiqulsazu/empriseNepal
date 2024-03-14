
import { useContext } from 'react'
import Container from '../../Component/Container'
import ProductContext from '../../Context/ProductContext'
import Travle from '../../Component/Travle'
import Flex from '../../Component/Flex'
import { Link } from 'react-router-dom'
import GridVew_Cart from '../GridVew/GridVew_Cart'
import Grid_Vew_page from '../GridVew/Grid_Vew_page'
import { IoGridSharp } from "react-icons/io5";
import { ImMenu } from "react-icons/im";
import Search from '../../Component/Search'
import FilterContext from '../../Filter_Contex/FilterContext'
import SlectCategory from '../../Component/SlectCategory'
import SlectCompany from '../../Component/SlectCompany'
import SetColors from '../../Component/SetColors'



const Special = () => {

    const { Grid_Veiw, setGridvew, setListvew } = useContext(ProductContext)
    const { shorting, filters: { text, category } } = useContext(FilterContext)


    return (
        <Container>
            <div className="flex justify-between items-center mb-[50px]">
                <div className="flex items-center">
                    <Search />
                    <div className="flex items-center ml-[40px]">
                        <IoGridSharp className={`text-[30px] mt-[3px] py-[5px] px-[5px] ${Grid_Veiw == true ? "bg-black text-white" : ""}`} onClick={setGridvew} />
                        <ImMenu className={`text-[35px] ml-[10px] py-[5px] px-[5px] ${!Grid_Veiw == true ? "bg-black text-white" : ""}`} onClick={setListvew} />
                    </div>
                </div>


                {/* <div className="">
                    <label htmlFor="short"></label>
                    <select
                        onClick={shorting}
                        name="short"
                        id="short"
                        className='border-[1px] border-black py-[5px] px-[15px]'>
                        <option value="Lowest">Price ( Lowest )</option>
                        <option disabled></option>
                        <option value="Heigts">Price ( Heigts )</option>
                        <option disabled></option>
                        <option value="a-z">Price ( a-z )</option>
                        <option disabled></option>
                        <option value="z-a">Price ( z-a )</option>
                        <option disabled></option>
                    </select>
                </div> */}
            </div>

            <Flex className={`justify-between`}>
                <div className="">
                    <SlectCategory />
                    <SlectCompany />
                    <SetColors />
                </div>
                <Grid_Vew_page />

            </Flex>
        </Container>
    )
}

export default Special