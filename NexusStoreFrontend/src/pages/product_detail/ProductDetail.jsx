import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SingleProductAction } from '../../redux/products/ProductAction'
import {useParams, Link} from 'react-router-dom'


import {  MainContainer ,DownSection, ProductDetailSection, MainImageContainer, Details , BuyCart, AlertMessage } from './ProductDetailStyled'
import { AddCartAction } from '../../redux/cart/CartAction'

function ProductDetail() {

    const [alreadyInCart, setalreadyInCart] = useState()

    const {id} = useParams()


    const singleProduct = useSelector(state => state.singleProduct)

    const {SingleProductLoading, SingleProductDetails} = singleProduct

    const userLogin = useSelector(state=> state.login)
    const cartDetails = useSelector(state=> state.cartDetails)
    
    const {CartDetails} = cartDetails
    // console.log(CartDetails&&CartDetails)
    // console.log(id.toString());
    useEffect(() => {
        
        setalreadyInCart(CartDetails&&CartDetails.filter(({product})=> product.id.toString()===id.toString()))
    }, [CartDetails,id])
    
    
    


    const {userInfo} = userLogin
    

    const dispatch = useDispatch()
   

    useEffect(() => {

        dispatch(SingleProductAction(id))
        
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
        setMainImage(SingleProductDetails&&SingleProductDetails.main_photo)
    }, [SingleProductDetails])


    const addToCartHandler = () => {
        if(userInfo&&userInfo.token){
            dispatch(AddCartAction(userInfo.token,id))
            
        }
        else{
            alert('Please Login to Use Cart or click The Buy now ')
        }



        

        
    }
    const buyNowHandler = () => {
        
        
    }
    

    return (
        <MainContainer>
            <AlertMessage>{}</AlertMessage>
            {SingleProductLoading?<h6>Loading</h6>:SingleProductDetails&&
            <ProductDetailSection>
                
                <MainImageContainer>
                <div>

                    <ul>
                        <li onMouseOver={()=>setMainImage(SingleProductDetails.main_photo)} ><img src={SingleProductDetails.main_photo} className='side-small-image' alt={SingleProductDetails.title} /></li>

                        {SingleProductDetails.photo1?
                        <li onMouseOver={()=>setMainImage(SingleProductDetails.photo1)} ><img src={SingleProductDetails.photo1} className='side-small-image' alt={SingleProductDetails.title} /></li>
                        :<div></div>}

                        {SingleProductDetails.photo2?
                        <li onMouseOver={()=>setMainImage(SingleProductDetails.photo2)} ><img src={SingleProductDetails.photo3} className='side-small-image' alt={SingleProductDetails.title} /></li>
                        :<div></div>}

                        {SingleProductDetails.photo4?
                        <li onMouseOver={()=>setMainImage(SingleProductDetails.photo3)} ><img src={SingleProductDetails.photo4} className='side-small-image' alt={SingleProductDetails.title} /></li>
                        :<div></div>}

                        {SingleProductDetails.photo5?
                        <li onMouseOver={()=>setMainImage(SingleProductDetails.photo4)} ><img src={SingleProductDetails.photo5} className='side-small-image' alt={SingleProductDetails.title} /></li>
                        :<div></div>}

                        {SingleProductDetails.photo6?
                        <li onMouseOver={()=>setMainImage(SingleProductDetails.photo5)} ><img src={SingleProductDetails.photo6} className='side-small-image' alt={SingleProductDetails.title} /></li>
                        :<div></div>}

                       
                        
                    </ul>
                </div>
                <div style={{display: "flex", overflow: "hidden"}} >
                    <img src={mainImage} className='main-big-image' alt="" />
                </div>
                
                </MainImageContainer>
                <Details>
                    <h2>{SingleProductDetails.title}</h2>
                    <p style={{fontWeight:"500"}} > Brand : <span style={{color:'grey'}} > {SingleProductDetails.brand} </span></p>
                    <div>
                        rating 4.3  
                    </div>
                    <p> M.R.P <span style={{textDecoration:"line-through"}}>₹{numberWithCommas(SingleProductDetails.mrp_price)}</span></p>
                    <p>  Price <span style={{color:'red',fontWeight:'600', fontSize:"19px"}} >₹{numberWithCommas(SingleProductDetails.price)}</span></p>
                    <div style={{padding:'5px 2px'}}>
                        <p style={{fontWeight:'500'}}>Available Offers</p>
                        <p> <span style={{color:'green', fontWeight:700, fontSize:'18px'}} >₹</span> <span style={{fontWeight:'600'}} > Bank Offer</span> 10% off on Axis Bank Credit Cards, up to ₹1250. On orders of ₹5000 and above</p>
                        <p> <span style={{color:'green', fontWeight:700, fontSize:'18px'}} >₹</span> <span style={{fontWeight:'600'}} >Bank Offer</span> 10% off on SBI Bank Credit Cards, up to ₹750. On orders of ₹5000 and above</p>
                        <p> <span style={{color:'green', fontWeight:700, fontSize:'18px'}} >₹</span> <span style={{fontWeight:'600'}} > No cost EMI </span> ₹1,409/month. Standard EMI also available</p>
                    </div>
                    <p style={{color:'green', fontWeight:500, fontSize:'15px'}} >Delivery with in 1 Week</p>
                    <p style={{ fontWeight:500, fontSize:'15px', paddingTop:'10px'}}>About this item</p>
                    <p style={{color:'grey', fontSize:'13px'}} > {SingleProductDetails.description} </p>
                    
                    
 
                </Details>


            </ProductDetailSection>

}

            <BuyCart>
                <Link to={`/buynow/${id}`}  id='buynow-button' >
                
                <button  onClick={buyNowHandler} >Buy Now</button>

                </Link>
                {alreadyInCart&&alreadyInCart.length>0?
                    <Link to='/cart' id='addtocart-button'>
                    <button   >Go To Cart</button>
                    </Link>
                :
                <Link to={userInfo?'/cart':`/product/${id}`} id='addtocart-button'>
                <button  onClick={addToCartHandler} >Add To Cart</button>
                </Link>
                
}
            </BuyCart>
            <DownSection>

                <p>Product Rating Section </p>
                
                
                

            </DownSection>

        </MainContainer>
    )
}

export default ProductDetail
