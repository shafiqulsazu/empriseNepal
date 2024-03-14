import React, { useContext, useState } from 'react'
import Flex from '../Component/Flex'
import ProductContext from '../Context/ProductContext'

const Details_MainImg = ({ className, classNamee, imags = [{ url: "" }], imgSrc }) => {

    // const [mainImg, setmainImg] = useState(imags[0].url)
    // console.log(mainImg)

    // const { Fourimage } = useContext(ProductContext)

    // let a = Fourimage[0]
    // console.log(a)

    return (

        // <Flex className={`justify-between`}>
        //     <div className="grid gap-[16px]">
        //         {
        //             Fourimage.map((val) => {
        //                 return (
        //                     <div className='w-[240px] h-[152px]' key={val.id}>
        //                         <img 
        //                         src={val.url} 
        //                         className={`${className} w-[100%] h-[100%] rounded-[8px]`}
        //                         // onClick={()=> setmainImg(val.url)} 
        //                         />
        //                     </div>
        //                 )
        //             })
        //         }
        //     </div>

        //     <div className='w-[1328px] h-[656px] border-[1px]'>
        //         <img src={imags[0].url} className={`${classNamee} w-[100%] h-[100%] rounded-[8px]`} />
        //     </div>
        // </Flex>


        <div className='w-[1328px] h-[656px] border-[1px]'>
            <img src={imgSrc} className={`${classNamee} w-[100%] h-[100%] rounded-[8px]`} />
        </div>
    )
}

export default Details_MainImg