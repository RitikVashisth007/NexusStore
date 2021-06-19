import axios from 'axios'
import OrderActionType from './OrderActionType'


export const registerOrderAction = (token,name,phone,street,city,state,pincode,id) => async(dispatch) => {

    try {
        
        dispatch({
            type:OrderActionType.REGISTER_ORDER_REQUEST,
        })

        const config = {
            headers: {
                Authorization:`Nexus ${token}`,
                'Content-type': 'application/json',
                
            }
        }
        

        const {data} = await axios.post('https://nexus-store-backend.herokuapp.com/order/registered' , 
        { 
            'name': name,
            'phone': phone,
            'street': street,
            'city': city,
            'state': state,
            'pincode': pincode,
            'productid':id
    
    },
            
            config
        
        )

        dispatch({
            type:OrderActionType.REGISTER_ORDER_SUCCESS,
            payload:data,
        })
        
        

    } catch (error) {
        dispatch({
            type:OrderActionType.REGISTER_ORDER_FAIL,
            payload:error.ressponse&&error.ressponse.data.detail
            ?error.ressponse.data.detail
            : error.message,
        })
        console.log('error in registered order');
    }

}




export const unregisterOrderAction = (name,phone,street,city,state,pincode,id) => async(dispatch) => {

    try {
        
        dispatch({
            type:OrderActionType.REGISTER_ORDER_REQUEST,
        })

        const config = {
            headers: {
                
                'Content-type': 'application/json',
                
            }
        }
        

        const {data} = await axios.post('https://nexus-store-backend.herokuapp.com/order/unregistered' , 
        { 
            'name': name,
            'phone': phone,
            'street': street,
            'city': city,
            'state': state,
            'pincode': pincode,
            'productid':id

    
    },
            
            config
        
        )

        dispatch({
            type:OrderActionType.REGISTER_ORDER_SUCCESS,
            payload:data,
        })
        
        

    } catch (error) {
        dispatch({
            type:OrderActionType.REGISTER_ORDER_FAIL,
            payload:error.ressponse&&error.ressponse.data.detail
            ?error.ressponse.data.detail
            : error.message,
        })
        console.log('error in registered order');
    }

}






export const OrderAction = (token)=> async(dispatch)=> {
    try {
        dispatch({
            type:OrderActionType.ORDER_REQUEST,
        })
        const config = {
            headers: {
                Authorization:`Nexus ${token}`,
                'Content-type': 'application/json'
            }
        }

        const {data} = await axios.get(`https://nexus-store-backend.herokuapp.com/order/orderdetails` , 
            config
        
        )

        dispatch({
            type:OrderActionType.ORDER_SUCCESS,
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type:OrderActionType.ORDER_FAIL,
            payload:error,
        })
        
    }
}

