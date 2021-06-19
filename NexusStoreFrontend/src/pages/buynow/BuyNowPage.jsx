import React, {useEffect , useState} from 'react'

import ThumbnailBox from '../../components/search_thumnail_box/SearchThumbnailBox'

import {AddressDetail, DownSection, MainContainer , ProductDetail, AddAddress, UserAddress} from './BuyNowStyled'

import { useDispatch, useSelector } from 'react-redux'
import { SingleProductAction } from '../../redux/products/ProductAction'
import {useParams , useHistory} from 'react-router-dom'
// import {updateUserAddressAction, userAddressAction} from '../../redux/user/UserAction'
import { registerOrderAction, unregisterOrderAction } from '../../redux/order/OrderAction'





function BuyNowPage() {

    const {id} = useParams()

    const singleProduct = useSelector(state => state.singleProduct)
    const userLogin = useSelector(state=> state.login)
    const userProfile = useSelector(state=> state.userProfile)

    const {userInfo} = userLogin
    const {userProfileInfo} = userProfile
    const { SingleProductDetails} = singleProduct

    const [addNewAddress, setaddNewAddress] = useState(true)

    const history = useHistory()

    
    


    const dispatch = useDispatch()
   

    useEffect(() => {

        dispatch(SingleProductAction(id))
        
        
    }, [dispatch,id])


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

                if(name&&phone&&street&&city&&state&&pincode){
                    dispatch(registerOrderAction(token,name,phone,street,city,state,pincode,id))
                    alert('Order Placed Successfully')
                    history.push('/')
                }
                else{
                    alert('Enter All Value plz')
                }
                
                console.log('order placed registred')
            }

        }
        else{
            if(name&&phone&&street&&city&&state&&pincode){
                dispatch(unregisterOrderAction(name,phone,street,city,state,pincode,id))
                alert('Order Placed Successfully')
                history.push('/')
            }
            else{
                alert('Plz Enter Address')
            }
            
        }
        
        



    }
    

    


    return (
        <MainContainer> 
            <ProductDetail>
                {SingleProductDetails?
                
                <ThumbnailBox item={SingleProductDetails}>

                </ThumbnailBox>
                
                
                :<p>lodaing</p>}
                

            </ProductDetail>

            <AddressDetail>
                <p style={{color:' #2874F0',fontWeight:'600'}}>Address Details</p>
                {userInfo
                ? addNewAddress&&userProfileInfo&&userProfileInfo.address?<UserAddress>
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
                
                
                
                
                :<div> 
                    <AddAddress>
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
                 </div>
                
                
                
                
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
                {SingleProductDetails&&
                <button onClick={placeOrderHandler}>₹{numberWithCommas(SingleProductDetails.price)} Paynow</button>

}

            </DownSection>


        </MainContainer>
    )
}

export default BuyNowPage
