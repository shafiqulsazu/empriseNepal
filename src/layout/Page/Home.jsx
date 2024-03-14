import React from 'react'
import Bennar from '../Bennar'
import Catagory from '../../Component/Catagory'
import Trending from '../../Component/Trending'
import Destinations from '../../Component/Destinations'
import Seller from '../../Component/Seller'
import Tour from '../../Component/Tour'
import CAT from '../../Component/CAT'
import Subscribe from '../../Component/Subscribe'
import Question from '../../Component/Question'

const Home = () => {
    return (
        <>
            <Bennar />
            <Catagory />
            <Trending />
            <Destinations />
            <Seller />
            <Tour />
            <CAT />
            <Subscribe />
            <Question />
        </>
    )
}

export default Home