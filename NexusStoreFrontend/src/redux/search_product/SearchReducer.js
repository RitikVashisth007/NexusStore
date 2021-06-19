import SearchActionType from './SearchActionType'


const INITIAL_STATE = {

}


export const SearchReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case SearchActionType.SEARCH_REQUEST:
            return {SearchLoading:true}

            case SearchActionType.SEARCH_SUCCESS:
                return {SearchLoading:false, SearchDetails:action.payload }

            case SearchActionType.SEARCH_FAIL:
                return {SearchLoading:false, error:action.payload }

            default:
                return state



    }
    
}