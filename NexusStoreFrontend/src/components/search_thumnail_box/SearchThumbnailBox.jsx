import React from 'react'
import { Link } from 'react-router-dom'
import { MainContainer , ImageContainer , ThumbnailBox } from './SearchThumbnailBoxStyled'

function SarchThumbnailBox({item}) {

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
                <Link to={`/product/${item.id}`}>
                        <ImageContainer>
                            <img src={item.main_photo} alt={item.title} />
                        </ImageContainer>
                </Link>
                
                        <Link className="details-section" to={`/product/${item.id}`}>
                        <h5  >{item.title}</h5>
                        <p  > <span id='price'>₹{numberWithCommas(item.price)}</span> <span style={{textDecoration:'line-through', fontSize:'11px'}} > ₹{numberWithCommas(item.mrp_price)}</span>  </p>
                        <p  > Free Delivery within 7 Days </p>
                        <p>{item.subcategory?item.subcategory:item.category}</p>
                       

                        </Link>

             </ThumbnailBox>
            
        </MainContainer>
    )
}

export default SarchThumbnailBox
