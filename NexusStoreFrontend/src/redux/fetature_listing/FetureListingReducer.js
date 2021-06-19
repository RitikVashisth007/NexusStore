import FetaureListingActionType from './FeatureListingActionType'


const INITIAL_STATE = {

}


export const FetaureListingReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case FetaureListingActionType.FEATURELISTING_REQUEST:
            return {FetaureListingLoading:true}

            case FetaureListingActionType.FEATURELISTING_SUCCESS:
                return {FetaureListingLoading:false, FetaureListingDetails:action.payload }

            case FetaureListingActionType.FEATURELISTING_FAIL:
                return {FetaureListingLoading:false, error:action.payload }

            default:
                return state



    }
    
}