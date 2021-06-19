import ProductActionType from './ProductActionType'


const INITIAL_STATE = {

}


export const SingleProductReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case ProductActionType.SINGLE_PRODUCT_REQUEST:
            return {SingleProductLoading:true}

            case ProductActionType.SINGLE_PRODUCT_SUCCESS:
                return {SingleProductLoading:false, SingleProductDetails:action.payload }

            case ProductActionType.SINGLE_PRODUCT_FAIL:
                return {SingleProductLoading:false, error:action.payload }

            default:
                return state



    }
    
}