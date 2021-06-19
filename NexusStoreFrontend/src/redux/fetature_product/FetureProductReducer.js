import FetaureProductActionType from './FeatureProductActionType'


const INITIAL_STATE = {

}


export const FetaureProductReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case FetaureProductActionType.FEATUREPRODUCT_REQUEST:
            return {FetaureProductLoading:true}

            case FetaureProductActionType.FEATUREPRODUCT_SUCCESS:
                return {FetaureProductLoading:false, FetaureProductDetails:action.payload }

            case FetaureProductActionType.FEATUREPRODUCT_FAIL:
                return {FetaureProductLoading:false, error:action.payload }

            default:
                return state



    }
    
}



export const SingleFetaureProductReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case FetaureProductActionType.SINGLE_FEATUREPRODUCT_REQUEST:
            return {SingleFetaureProductLoading:true}

            case FetaureProductActionType.SINGLE_FEATUREPRODUCT_SUCCESS:
                return {SingleFetaureProductLoading:false, SingleFetaureProductDetails:action.payload }

            case FetaureProductActionType.SINGLE_FEATUREPRODUCT_FAIL:
                return {SingleFetaureProductLoading:false, error:action.payload }

            default:
                return state



    }
    
}