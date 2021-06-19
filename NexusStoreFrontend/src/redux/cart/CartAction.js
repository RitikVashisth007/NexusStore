import axios from 'axios'
import CartActionType from './CartActionType'


export const CartAction = (token)=> async(dispatch)=> {
    try {
        dispatch({
            type:CartActionType.CART_REQUEST,
        })
        const config = {
            headers: {
                Authorization:`Nexus ${token}`,
                'Content-type': 'application/json'
            }
        }

        const {data} = await axios.get(`https://nexus-store-backend.herokuapp.com/order/cart` , 
            config
        
        )

        dispatch({
            type:CartActionType.CART_SUCCESS,
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type:CartActionType.CART_FAIL,
            payload:error,
        })
        
    }
}



export const AddCartAction = (token,id)=> async(dispatch)=> {
    try {
        dispatch({
            type:CartActionType.CART_ADD_REQUEST,
        })
        const config = {
            headers: {
                Authorization:`Nexus ${token}`,
                'Content-type': 'application/json'
            }
        }

        const {cartdata} = await axios.post(`https://nexus-store-backend.herokuapp.com/order/addcart` , 
            {
                'productid':id,
            },
            config
        
        )

        dispatch({
            type:CartActionType.CART_ADD_SUCCESS,
            payload:cartdata,
        })

        const {data} = await axios.get(`https://nexus-store-backend.herokuapp.com/order/cart` , 
            config
        
        )

        dispatch({
            type:CartActionType.CART_SUCCESS,
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type:CartActionType.CART_ADD_FAIL,
            payload:error,
        })
        
    }
}



export const RemoveCartAction = (token,id)=> async(dispatch)=> {
    try {
        dispatch({
            type:CartActionType.CART_REMOVE_REQUEST,
        })
        const config = {
            headers: {
                Authorization:`Nexus ${token}`,
                'Content-type': 'application/json'
            }
        }

        const {cartdata} = await axios.post(`https://nexus-store-backend.herokuapp.com/order/removecart` , 
            {
                'productid':id,
            },
            config
        
        )

        dispatch({
            type:CartActionType.CART_REMOVE_SUCCESS,
            payload:cartdata,
        })

        const {data} = await axios.get(`https://nexus-store-backend.herokuapp.com/order/cart` , 
            config
        
        )

        dispatch({
            type:CartActionType.CART_SUCCESS,
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type:CartActionType.CART_REMOVE_FAIL,
            payload:error,
        })
        
    }
}





export const ClearCartAction = (token)=> async(dispatch)=> {
    try {
        dispatch({
            type:CartActionType.CLEAR_CART_REQUEST,
        })
        const config = {
            headers: {
                Authorization:`Nexus ${token}`,
                'Content-type': 'application/json'
            }
        }

        const {cartdata} = await axios.get(`https://nexus-store-backend.herokuapp.com/order/clearcart` , 
            config
        )

        dispatch({
            type:CartActionType.CLEAR_CART_SUCCESS,
            payload:cartdata,
        })

        const {data} = await axios.get(`https://nexus-store-backend.herokuapp.com/order/cart` , 
            config
        
        )

        dispatch({
            type:CartActionType.CART_SUCCESS,
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type:CartActionType.CLEAR_CART_FAIL,
            payload:error,
        })
        
    }
}






export const UpadteCartAction = (token,id, qtyValue)=> async(dispatch)=> {
    try {
        dispatch({
            type:CartActionType.CART_UPDATE_REQUEST,
        })
        const config = {
            headers: {
                Authorization:`Nexus ${token}`,
                'Content-type': 'application/json'
            }
        }

        const {cartdata} = await axios.post(`https://nexus-store-backend.herokuapp.com/order/updatecart` , 
            {
                'productid':id,
                'qty':qtyValue
            },
            config
        
        )

        dispatch({
            type:CartActionType.CART_UPDATE_SUCCESS,
            payload:cartdata,
        })

        const {data} = await axios.get(`https://nexus-store-backend.herokuapp.com/order/cart` , 
            config
        
        )

        dispatch({
            type:CartActionType.CART_SUCCESS,
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type:CartActionType.CART_UPDATE_FAIL,
            payload:error,
        })
        
    }
}




export const OrderCartAction = (token,name,phone,street,city,state,pincode)=> async(dispatch)=> {
    try {
        dispatch({
            type:CartActionType.ORDER_CART_REQUEST,
        })
        const config = {
            headers: {
                Authorization:`Nexus ${token}`,
                'Content-type': 'application/json'
            }
        }

        const {cartdata} = await axios.post(`https://nexus-store-backend.herokuapp.com/order/ordercart` , 
        { 
            'name': name,
            'phone': phone,
            'street': street,
            'city': city,
            'state': state,
            'pincode': pincode,
            
    
         },
            config
        )

        dispatch({
            type:CartActionType.ORDER_CART_SUCCESS,
            payload:cartdata,
        })

        const {clearcartdata} = await axios.get(`https://nexus-store-backend.herokuapp.com/order/clearcart` , 
            config
        )

        dispatch({
            type:CartActionType.CLEAR_CART_SUCCESS,
            payload:clearcartdata,
        })

        const {data} = await axios.get(`https://nexus-store-backend.herokuapp.com/order/cart` , 
            config
        
        )

        dispatch({
            type:CartActionType.CART_SUCCESS,
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type:CartActionType.ORDER_CART_FAIL,
            payload:error,
        })
        
    }
}





