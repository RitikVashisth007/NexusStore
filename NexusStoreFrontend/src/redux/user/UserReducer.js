import UserActionType from './UserActionType'



const INITIAL_STATE = {
    
  };


export const userLoginReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type){
        case UserActionType.USER_LOGIN_REQUEST:
            return {loading:true }

        case UserActionType.USER_LOGIN_SUCCESS:
            return {loading:false , userInfo:action.payload}
        
        case UserActionType.USER_LOGIN_FAIL:
            return { loading:false, error:action.payload}
        
        case UserActionType.USER_LOGOUT:
            return {}
 
        default:
            return state
    }
}


export const userRegisterReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type){
        case UserActionType.USER_REGSITER_REQUEST:
            return {loading:true }

        case UserActionType.USER_REGISTER_SUCCESS:
            return {loading:false , userInfo:action.payload}
        
        case UserActionType.USER_REGISTER_FAIL:
            return { loading:false, error:action.payload}
        
        

        default:
            return state
    }
}






export const userProfileReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type){
        case UserActionType.USER_PROFILE_REQUEST:
            return {userProfileLoading:true }

        case UserActionType.USER_PROFILE_SUCCESS:
            return {userProfileLoading:false , userProfileInfo:action.payload}
        
        case UserActionType.USER_PROFILE_FAIL:
            return { userProfileLoading:false, error:action.payload}
        
        
 
        default:
            return state
    }
}




// export const userAddressReducer = (state = INITIAL_STATE, action)=>{
//     switch (action.type){
//         case UserActionType.USER_ADDRESS_REQUEST:
//             return {userAddressLoading:true }

//         case UserActionType.USER_ADDRESS_SUCCESS:
//             return {userAddressLoading:false , userAddressInfo:action.payload}
        
//         case UserActionType.USER_ADDRESS_FAIL:
//             return { userAddressLoading:false, error:action.payload}
        
        
 
//         default:
//             return state
//     }
// }

