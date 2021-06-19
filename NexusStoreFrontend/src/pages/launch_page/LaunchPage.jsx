import React, {useEffect} from 'react'
import {DetailContainer, MainContainer} from './LaunchPageStyled'
import {useDispatch , useSelector} from 'react-redux'
import { FetaureListingAction } from '../../redux/fetature_listing/FetaureListingAction'


import {useParams} from 'react-router-dom'
import { useState } from 'react'


function LaunchPage() {
    const {id} = useParams()

    const [featureArray, setfeatureArray] = useState()

    const FeatureListing = useSelector(state=> state.featureListing)
    const {FetaureListingLoading , FetaureListingDetails} = FeatureListing
    
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(FetaureListingAction())
        
    }, [dispatch])

    useEffect(() => {

        setfeatureArray(FetaureListingDetails&&FetaureListingDetails.filter(item => item.id.toString()===id));
        
        
    }, [FetaureListingDetails, id])


    console.log(featureArray);

    
    return (
        <MainContainer>
            {featureArray?
            featureArray.map(item => <DetailContainer key={item.id}>
                
                <img src={item.poster} alt={item.title} />
                {
                    item.main_photo?
                    <img src={item.main_photo} alt={item.title} />
                    :''}
                    {
                    item.photo1?
                    <img src={item.photo1} alt={item.title} />
                    :''
                    
                    }                  
                    {
                    item.photo2?
                    <img src={item.photo2} alt={item.title} />
                    :''}
                    {item.photo3?
                    <img src={item.photo3} alt={item.title} />
                    :''}
                    {
                    item.photo4?
                    <img src={item.photo4} alt={item.title} />
                    :''


                }

                <p>{item.title} <br /> Coming Soon </p>
                

            </DetailContainer>)
            :'Loading'
            
        }
            
        </MainContainer>
    )
}

export default LaunchPage
