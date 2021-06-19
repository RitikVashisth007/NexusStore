import React from 'react'
import FrontListing from '../../components/front_listing/FrontListing'

import {FirstSection , SecondSection, ThirdSection} from '../../components/section/Section'

function Home() {
    return (
        <div>
            <FrontListing/> 
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>
            
        </div>
    )
}

export default Home
