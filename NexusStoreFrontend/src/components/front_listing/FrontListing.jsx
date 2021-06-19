import React,{useEffect} from 'react'
import { MainContainer , ImageContainer } from './FrontlistingStyled'
import {useDispatch , useSelector} from 'react-redux'
import { FetaureListingAction } from '../../redux/fetature_listing/FetaureListingAction'
import Carousel from 'react-elastic-carousel'
import { Link } from 'react-router-dom'


function FrontListing() {

    const FeatureListing = useSelector(state=> state.featureListing)
    const {FetaureListingLoading , FetaureListingDetails} = FeatureListing
    
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(FetaureListingAction())
        
    }, [dispatch])

    
    console.log(FetaureListingDetails);
 


    return (
        <MainContainer>
            {FetaureListingLoading?<h2>Loading</h2>:
                FetaureListingDetails&&
                <div className='main-slider'>
                    
                    <Carousel itemsToShow={1} showEmptySlots={true} enableAutoPlay autoPlaySpeed={3000}  >
                        
                        {FetaureListingDetails&&FetaureListingDetails.map(item=> <Link to={item.saleType==='Sale'?`/${item.category}`:item.isLaunched?`/search/${item.title}`:`/launch/${item.id}`}  key={item.id}> <ImageContainer><img src={item.poster} alt="" /> </ImageContainer> </Link> )}
                    </Carousel>
                     
                </div>
            }
            
        </MainContainer>
    )
}

export default FrontListing
