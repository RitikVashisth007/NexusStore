import OrderActionType from './OrderActionType'


const INITIAL_STATE = {

}


export const orderReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case OrderActionType.ORDER_REQUEST:
            return {OrderLoading:true}

            case OrderActionType.ORDER_SUCCESS:
                return {OrderLoading:false, OrderDetails:action.payload }

            case OrderActionType.ORDER_FAIL:
                return {OrderLoading:false, error:action.payload }

            default:
                return state



    }
    
}