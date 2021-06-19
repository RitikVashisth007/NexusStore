import CartActionType from './CartActionType'


const INITIAL_STATE = {

}


export const cartReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionType.CART_REQUEST:
            return {CartLoading:true}

            case CartActionType.CART_SUCCESS:
                return {CartLoading:false, CartDetails:action.payload }

            case CartActionType.CART_FAIL:
                return {CartLoading:false, error:action.payload }

            default:
                return state



    }
    
}