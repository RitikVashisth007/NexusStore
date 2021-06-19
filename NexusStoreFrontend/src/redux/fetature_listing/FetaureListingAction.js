import axios from 'axios'
import FetaureListingActionType from './FeatureListingActionType'


export const FetaureListingAction = ()=> async(dispatch)=> {
    try {
        dispatch({
            type:FetaureListingActionType.FEATURELISTING_REQUEST,
        })
        const config = {
            headers: {
                'Content-type': 'application/json',
                
            }
        }

        const {data} = await axios.get('https://nexus-store-backend.herokuapp.com/products/featurelisting' , 
            config
        
        )

        dispatch({
            type:FetaureListingActionType.FEATURELISTING_SUCCESS,
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type:FetaureListingActionType.FEATURELISTING_FAIL,
            payload:error,
        })
        
    }
}