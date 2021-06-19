import UserActionType from './UserActionType'
import axios from 'axios';



export const login = (email,password) => async(dispatch) => {

    try {
        
        dispatch({
            type:UserActionType.USER_LOGIN_REQUEST,
        })

        const config = {
            headers: {
                'Content-type': 'application/json',
                
            }
        }

        const {data} = await axios.post('https://nexus-store-backend.herokuapp.com/token' , 
            { 'username': email, 'password':password },
            config
        
        )

        dispatch({
            type:UserActionType.USER_LOGIN_SUCCESS,
            payload:data,
        })
        
        localStorage.setItem('userInfo',JSON.stringify(data))

    } catch (error) {
        dispatch({
            type:UserActionType.USER_LOGIN_FAIL,
            payload:error.ressponse&&error.ressponse.data.detail
            ?error.ressponse.data.detail
            : error.message,
        })
        
    }

}

export const logout = ()=> (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({
        type:UserActionType.USER_LOGOUT
    })
}



export const register = (email,password,name) => async(dispatch) => {

    try {
        
        dispatch({
            type:UserActionType.USER_REGISTER_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json',
               
            }
        }

        const {data} = await axios.post('https://nexus-store-backend.herokuapp.com/register' , 
            { 'name':name, 'email': email, 'password':password,  },
            config  
        
        )

        dispatch({
            type:UserActionType.USER_REGISTER_SUCCESS,
            payload:data,
        })

        dispatch({
            type:UserActionType.USER_LOGIN_SUCCESS,
            payload:data,
        })
    
        
        localStorage.setItem('userInfo',JSON.stringify(data))
        

    } catch (error) {
        dispatch({
            type:UserActionType.USER_REGISTER_FAIL,
            payload:error.ressponse&&error.ressponse.data.detail
            ?error.ressponse.data.detail
            : error.message,
            
        })
        
        
    }
  


}




export const userProfileAction = (token) => async(dispatch) => {

    try {
        
        dispatch({
            type:UserActionType.USER_PROFILE_REQUEST,
        })

        const config = {
            headers: {
                Authorization:`Nexus ${token}`,
                'Content-type': 'application/json',
                
            }
        }

        const {data} = await axios.get('https://nexus-store-backend.herokuapp.com/profile/user' , 
            
            config
        
        )

        dispatch({
            type:UserActionType.USER_PROFILE_SUCCESS,
            payload:data,
        })
        
        

    } catch (error) {
        dispatch({
            type:UserActionType.USER_PROFILE_FAIL,
            payload:error.ressponse&&error.ressponse.data.detail
            ?error.ressponse.data.detail
            : error.message,
        })
        
    }

}





export const userAddressAction = (token,name,phone,street,city,state,pincode) => async(dispatch) => {

    try {
        
        dispatch({
            type:UserActionType.USER_ADDRESS_REQUEST,
        })

        const config = {
            headers: {
                Authorization:`Nexus ${token}`,
                'Content-type': 'application/json',
                
            }
        }
        

        const {data} = await axios.post('https://nexus-store-backend.herokuapp.com/profile/address' , 
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
            type:UserActionType.USER_ADDRESS_SUCCESS,
            payload:data,
        })
        
        

    } catch (error) {
        dispatch({
            type:UserActionType.USER_ADDRESS_FAIL,
            payload:error.ressponse&&error.ressponse.data.detail
            ?error.ressponse.data.detail
            : error.message,
        })
        
    }

}



export const updateUserAddressAction = (token,name,phone,street,city,state,pincode) => async(dispatch) => {

    try {
        
        dispatch({
            type:UserActionType.USER_ADDRESS_REQUEST,
        })

        const config = {
            headers: {
                Authorization:`Nexus ${token}`,
                'Content-type': 'application/json',
                
            }
        }
        

        const {data} = await axios.put('https://nexus-store-backend.herokuapp.com/profile/user' , 
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
            type:UserActionType.USER_ADDRESS_SUCCESS,
            payload:data,
        })
        
        

    } catch (error) {
        dispatch({
            type:UserActionType.USER_ADDRESS_FAIL,
            payload:error.ressponse&&error.ressponse.data.detail
            ?error.ressponse.data.detail
            : error.message,
        })
        
    }

}

