import React from 'react'
import { MainContainer , ImageContainer , ThumbnailBox } from './OrderedItemThumnailStyled'

function OrderItemThumbnailBox({item , qty , isDelivered , createdAt , shippingAddress}) {

    function numberWithCommas(x) {
        x=x.toString();
        var lastThree = x.substring(x.length-3);
        var otherNumbers = x.substring(0,x.length-3);
        if(otherNumbers !== '')
            lastThree = ',' + lastThree;
        var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
        return res
    }




    return (
        <MainContainer>
            <ThumbnailBox>
                        <ImageContainer>
                            <img src={item.main_photo} alt={item.title} />
                        </ImageContainer>
                <div>

                
                        <div className="details-section" >
                        <h5  >{item.title}</h5>
                        <p>Quantity : {qty}</p>
                        <p  > <span id='price'>₹{numberWithCommas(item.price*qty)}</span> <span style={{textDecoration:'line-through', fontSize:'11px'}} > ₹{numberWithCommas(item.mrp_price)}</span>  </p>
                        
                        <p> Ordered at: {createdAt}</p>
                        <p style={{color:'green'}} >{isDelivered?' Delivered ':'yet to be Delivered'}</p>
                        <p>Shipping Address : {shippingAddress.street}, {shippingAddress.city} , {shippingAddress.state} ,{shippingAddress.pincode} </p>
                        
                       

                        </div>
                        


                 </div>


             </ThumbnailBox>
            
        </MainContainer>
    )
}

export default OrderItemThumbnailBox
