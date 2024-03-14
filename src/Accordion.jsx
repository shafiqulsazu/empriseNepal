import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";
import Photo13 from './assets/Photo13.png'
import Photo14 from './assets/Photo14.png'
import Photo2 from './assets/Photo2.png'
import Photo3 from './assets/Photo3.png'
import Photo4 from './assets/Photo4.png'
import Flex from './Component/Flex';
import List from './Component/List';
import { PiCaretUpBold } from "react-icons/pi";




const Accordion = ({number,Days}) => {

    const [show, setshow] = useState(false)
    return (
        <>
            <div className=" border rounded-[10px] py-[24px] px-[16px] w-[648px]" onClick={() => setshow(!show)}>
                <button className='flex items-center'>
                    <h3 className="w-[32px] h-[32px] rounded-[100%] bg-hover text-[18px] mr-[16px] text-white text-center">{number}</h3>
                    <h2 className='text-[16px] text-Color font-Poppins font-semibold'>{Days}</h2>
                    <div>{show == false ? <FaAngleDown className={`text-[20px] ml-[502px]`} /> : <PiCaretUpBold className={`text-[20px] ml-[502px]`} />}</div>

                </button>
                {
                    show && <div className="mt-[64px]" >
                        <h3 className='text-[16px] text-Color font-Poppins font-semibold'>Lake Nakuru National Park</h3>
                        <h3 className='text-[16px] text-Color font-Poppins w-[600px] my-[40px]'>Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.</h3>
                        <Flex>
                            <img src={Photo13} alt="" className='mr-[32px]' />
                            <img src={Photo14} alt="" />

                        </Flex>

                        <Flex className={`w-[616px] justify-between mt-[48px]`}>
                            <List text={`Accommodation`} />
                            <List text={`Meals`} />
                            <List text={`Inclusions`} />
                            <List text={`Special Info`} />
                        </Flex>
                        <hr className='border-gray-500 mt-[16px]' />
                        <h3 className='text-[16px] text-Color font-Poppins w-[600px] mt-[24px]'>Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.</h3>

                        <Flex className={`w-[592px] justify-between mt-[40px]`}>
                            <img src={Photo2} alt="" className='w-[175px] h-[130px]' />
                            <img src={Photo3} alt="" className='w-[175px] h-[130px]' />
                            <img src={Photo4} alt="" className='w-[175px] h-[130px]' />
                        </Flex>
                    </div>
                }
            </div>
        </>
    )
}

export default Accordion