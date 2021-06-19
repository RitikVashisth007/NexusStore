import React, { useState , useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { RemoveCartAction, UpadteCartAction } from '../../redux/cart/CartAction';
import { MainContainer , ImageContainer , ThumbnailBox } from './OrderThumnailBoxStyled'

function OrderThumbnailBox({item , qty}) {

    function numberWithCommas(x) {
        x=x.toString();
        var lastThree = x.substring(x.length-3);
        var otherNumbers = x.substring(0,x.length-3);
        if(otherNumbers !== '')
            lastThree = ',' + lastThree;
        var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
        return res
    }

    const dispatch = useDispatch()

    const userLogin = useSelector(state=> state.login)
    
    const {userInfo} = userLogin
    

    const [qtyValue, setqtyValue] = useState(qty)

    const qtyReduceHandler = () =>{
        setqtyValue(qtyValue-1)
    }

    const qtyIncreaseHandler = () =>{

        setqtyValue(qtyValue+1)
        

    }

    useEffect(() => {
        setTimeout(function(){  dispatch(UpadteCartAction(userInfo.token,item.id,qtyValue))  }, 500);
        
        
    }, [qtyValue])

    

    


    const itemRemoveHandler = () =>{
        //Remove item from cart 
        dispatch(RemoveCartAction(userInfo.token,item.id))
    }



    return (
        <MainContainer>
            <ThumbnailBox>
                <Link to={`/product/${item.id}`}>
                        <ImageContainer>
                            <img src={item.main_photo} alt={item.title} />
                        </ImageContainer>
                </Link>
                <div>

                
                        <Link className="details-section" to={`/product/${item.id}`}>
                        <h5  >{item.title}</h5>
                        <p  > <span id='price'>₹{numberWithCommas(item.price*qtyValue)}</span> <span style={{textDecoration:'line-through', fontSize:'11px'}} > ₹{numberWithCommas(item.mrp_price)}</span>  </p>
                        <p  > Free Delivery within 7 Days </p>
                        <p>{item.subcategory?item.subcategory:item.category}</p>
                       

                        </Link>
                        <div className='qty-remove'>
                            <div className='qty'>
                                <button onClick={qtyReduceHandler} disabled={qtyValue>1?false:true}  >-</button>
                                <span id='qty-value'>{qtyValue}</span>
                                <button  onClick={qtyIncreaseHandler}>+</button>
                            </div>
                            <div className='remove-button'>
                                <button onClick={itemRemoveHandler} >REMOVE</button>
                            </div>
                        </div>
                        


                 </div>


             </ThumbnailBox>
            
        </MainContainer>
    )
}

export default OrderThumbnailBox
