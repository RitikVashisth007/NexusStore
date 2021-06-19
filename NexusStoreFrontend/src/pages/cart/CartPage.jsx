import React, {useState, useEffect} from 'react'
import { MainContainer, ProductContainer , AddAddress , DownSection , UserAddress , AddressDetail, SuperMainContainer, EmptyCart } from './CartPageStyled'
import { useDispatch, useSelector } from 'react-redux'
import { CartAction , ClearCartAction , OrderCartAction } from '../../redux/cart/CartAction'
import OrderThumbnailBox from '../../components/order_thumnail_box/OrderThumnailBox'


import {Link , useHistory} from 'react-router-dom'


function CartPage() {



    

    const cartDetail = useSelector(state => state.cartDetails)
    const userLogin = useSelector(state=> state.login)
    const userProfile = useSelector(state=> state.userProfile)

    const {userInfo} = userLogin
    const {userProfileInfo} = userProfile
    const { CartDetails} = cartDetail

    

    const [addNewAddress, setaddNewAddress] = useState(true)

    
    


    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if(userInfo){
            dispatch(CartAction(userInfo.token))

        }

    
    }, [dispatch,userInfo])

    useEffect(() => {
        if(!userInfo){
            
            history.push('/login')
            alert('Please Login To use Cart')
        }
    }, [history,userInfo])


    const [token, settoken] = useState('')
    const [name, setname] = useState('')
    const [phone, setphone] = useState('')
    const [street, setstreet] = useState('')
    const [city, setcity] = useState('')
    const [state, setstate] = useState('')
    const [pincode, setpincode] = useState('')



    //  Price with comma
    function numberWithCommas(x) {
        x=x.toString();
        var lastThree = x.substring(x.length-3);
        var otherNumbers = x.substring(0,x.length-3);
        if(otherNumbers !== '')
            lastThree = ',' + lastThree;
        var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
        return res
    }
    
   

    useEffect(() => {

        if(userInfo){
            settoken(userInfo.token)
            if(token){

                if(userProfileInfo&&userProfileInfo.address){
                    
                    
                    setcity(userProfileInfo.address.city)
                    setname(userProfileInfo.address.name)
                    setstreet(userProfileInfo.address.street)
                    setstate(userProfileInfo.address.state)
                    setphone(userProfileInfo.address.phone)
                    setpincode(userProfileInfo.address.pincode)
                    

                }
            }

        }
        
    }, [userProfileInfo,userInfo,token])


    const placeOrderHandler = () =>{
        //   Setting up the address
        if(userInfo){
            settoken(userInfo.token)
            if(token){

                dispatch(OrderCartAction(token,name,phone,street,city,state,pincode))
                alert('Order Placed Successfully')
                history.push('/')

            }


        }
    }


    //     //  Place Order------   
        
        




    // }
    
    // const placeOrderHandler = () => {
    //     dispatch(OrderCartAction(userInfo.token))
    // }

    const [totalCartPrice, settotalCartPrice] = useState()
    
    console.log(totalCartPrice);
    console.log(CartDetails);

    useEffect(() => {
        if(CartDetails&&CartDetails.length>0){
            settotalCartPrice(CartDetails&&CartDetails.map(({product,qty})=> product.price*qty).reduce((a,b)=> a+b))
        }
        
        
    }, [CartDetails])

    const clearCartHandler = () => {
        dispatch(ClearCartAction(userInfo.token))
    }

    



    return (
        <SuperMainContainer>
            {CartDetails&&CartDetails.length>0?
        <MainContainer>
            <ProductContainer>
                <div>       
                    {CartDetails&&CartDetails.map(({product , qty})=> <OrderThumbnailBox key={product.id} qty={qty} item={product}></OrderThumbnailBox>)}
                    <button onClick={clearCartHandler} id='clear-button' >Clear Cart</button>

                </div>
            </ProductContainer>

            <AddressDetail>
                <p style={{color:' #2874F0',fontWeight:'600'}}>Address Details</p>
                {addNewAddress&&userProfileInfo&&userProfileInfo.address?<UserAddress>
                    <div>
                    <p>{userProfileInfo.address.name}</p>
                    <p>{userProfileInfo.address.street}, {userProfileInfo.address.city}</p>
                    <p>{userProfileInfo.address.state}, {userProfileInfo.address.pincode}</p>
                    <p>PhoneNo: {userProfileInfo.address.phone}</p>

                    </div>

                    <div>
                        <button onClick={()=>setaddNewAddress(false)}>Add New Address</button>
                    </div>
                    

                </UserAddress>
                
                
                
                
                
                
                
                :<AddAddress>
                        <div className='input-div'>
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder='Full Name' required onChange={(e)=> setname(e.currentTarget.value)} />
                        </div>
                        
                        <div className='input-div'>
                            <label htmlFor="" >PhoneNo.</label>
                            <input type="number" placeholder='PhoneNo.'  onChange={(e)=> setphone(e.currentTarget.value)}  required />
                        </div>


                        <div className='input-div'>
                            <label htmlFor="">Street </label>
                            <input type="text" placeholder='House No, Area' required  onChange={(e)=> setstreet(e.currentTarget.value)}  />
                        </div>
                        <div className='input-div'>
                            <label htmlFor="" >City</label>
                            <input type="text" placeholder='City' required  onChange={(e)=> setcity(e.currentTarget.value)}  />
                        </div>
                        <div className='input-div'>
                            <label htmlFor="" >State</label>
                            <input type="text" placeholder='State' required  onChange={(e)=> setstate(e.currentTarget.value)}  />
                        </div>
                        <div className='input-div'>
                            <label htmlFor="">Pincode</label>
                            <input type="number" placeholder='pincode' required  onChange={(e)=> setpincode(e.currentTarget.value)}  />
                        </div>


            
            
                    </AddAddress>
                }

            </AddressDetail>

            <DownSection>
                
                <button onClick={placeOrderHandler}>₹{numberWithCommas(totalCartPrice?totalCartPrice:'0')} Paynow</button>



            </DownSection>
        </MainContainer>
        : <EmptyCart>
            <p> Cart Is Empyt </p>
            <Link to='/' >
            Go Home
            </Link>

        </EmptyCart>
}
        </SuperMainContainer>
    )
}

export default CartPage
