import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SingleFetaureProductAction } from '../../redux/fetature_product/FetaureProductAction'
import {useParams} from 'react-router-dom'

import {  MainContainer ,DownSection, ProductDetailSection, MainImageContainer, Details , BuyCart } from './FeatureProductStyled'

function FeautreProduct() {

    

    const {id} = useParams()

    const singleFetaureProduct = useSelector(state => state.singleFetaureProduct)

    const {SingleFetaureProductLoading, SingleFetaureProductDetails} = singleFetaureProduct
    

    const dispatch = useDispatch()
   

    useEffect(() => {

        dispatch(SingleFetaureProductAction(id))
        
    }, [dispatch,id])

    function numberWithCommas(x) {
        x=x.toString();
        var lastThree = x.substring(x.length-3);
        var otherNumbers = x.substring(0,x.length-3);
        if(otherNumbers !== '')
            lastThree = ',' + lastThree;
        var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
        return res
    }



    const [mainImage, setMainImage] = useState()

    useEffect(() => {
        setMainImage(SingleFetaureProductDetails&&SingleFetaureProductDetails.main_photo)
    }, [SingleFetaureProductDetails])
    

    return (
        <MainContainer>
            {SingleFetaureProductLoading?<h6>Loading</h6>:SingleFetaureProductDetails&&
            <ProductDetailSection>
                
                <MainImageContainer>
                <div>

                    <ul>
                        <li onMouseOver={()=>setMainImage(SingleFetaureProductDetails.main_photo)} ><img src={SingleFetaureProductDetails.main_photo} className='side-small-image' alt={SingleFetaureProductDetails.title} /></li>

                        {SingleFetaureProductDetails.photo1?
                        <li onMouseOver={()=>setMainImage(SingleFetaureProductDetails.photo1)} ><img src={SingleFetaureProductDetails.photo1} className='side-small-image' alt={SingleFetaureProductDetails.title} /></li>
                        :<div></div>}

                        {SingleFetaureProductDetails.photo2?
                        <li onMouseOver={()=>setMainImage(SingleFetaureProductDetails.photo2)} ><img src={SingleFetaureProductDetails.photo3} className='side-small-image' alt={SingleFetaureProductDetails.title} /></li>
                        :<div></div>}

                        {SingleFetaureProductDetails.photo4?
                        <li onMouseOver={()=>setMainImage(SingleFetaureProductDetails.photo3)} ><img src={SingleFetaureProductDetails.photo4} className='side-small-image' alt={SingleFetaureProductDetails.title} /></li>
                        :<div></div>}

                        {SingleFetaureProductDetails.photo5?
                        <li onMouseOver={()=>setMainImage(SingleFetaureProductDetails.photo4)} ><img src={SingleFetaureProductDetails.photo5} className='side-small-image' alt={SingleFetaureProductDetails.title} /></li>
                        :<div></div>}

                        {SingleFetaureProductDetails.photo6?
                        <li onMouseOver={()=>setMainImage(SingleFetaureProductDetails.photo5)} ><img src={SingleFetaureProductDetails.photo6} className='side-small-image' alt={SingleFetaureProductDetails.title} /></li>
                        :<div></div>}

                       
                        
                    </ul>
                </div>
                <div>
                    <img src={mainImage} className='main-big-image' alt="" />
                </div>
                
                </MainImageContainer>
                <Details>
                    <h2>{SingleFetaureProductDetails.title}</h2>
                    <p style={{fontWeight:"500"}} > Brand : <span style={{color:'grey'}} > {SingleFetaureProductDetails.brand} </span></p>
                    <div>
                        rating 4.3  
                    </div>
                    <p> M.R.P <span style={{textDecoration:"line-through"}}>₹{numberWithCommas(SingleFetaureProductDetails.mrp_price)}</span></p>
                    <p>  Price <span style={{color:'red',fontWeight:'600', fontSize:"19px"}} >₹{numberWithCommas(SingleFetaureProductDetails.price)}</span></p>
                    <div style={{padding:'5px 2px'}}>
                        <p style={{fontWeight:'500'}}>Available Offers</p>
                        <p> <span style={{color:'green', fontWeight:700, fontSize:'18px'}} >₹</span> <span style={{fontWeight:'600'}} > Bank Offer</span> 10% off on Axis Bank Credit Cards, up to ₹1250. On orders of ₹5000 and above</p>
                        <p> <span style={{color:'green', fontWeight:700, fontSize:'18px'}} >₹</span> <span style={{fontWeight:'600'}} >Bank Offer</span> 10% off on SBI Bank Credit Cards, up to ₹750. On orders of ₹5000 and above</p>
                        <p> <span style={{color:'green', fontWeight:700, fontSize:'18px'}} >₹</span> <span style={{fontWeight:'600'}} > No cost EMI </span> ₹1,409/month. Standard EMI also available</p>
                    </div>
                    <p style={{color:'green', fontWeight:500, fontSize:'15px'}} >Delivery with in 1 Week</p>
                    <p style={{ fontWeight:500, fontSize:'15px', paddingTop:'10px'}}>About this item</p>
                    <p style={{color:'grey', fontSize:'13px'}} > {SingleFetaureProductDetails.description} </p>
                    
                    

                </Details>


            </ProductDetailSection>

}

            <BuyCart>
                <button id='buynow-button' >Buy Now</button>
                <button id='addtocart-button' >Add to Cart</button>
            </BuyCart>
            <DownSection>

                <p>Recommeded Products</p>
                

            </DownSection>

        </MainContainer>
    )
}

export default FeautreProduct
