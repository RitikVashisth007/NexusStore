import axios from 'axios'
import FetaureProductActionType from './FeatureProductActionType'


export const FetaureProductAction = ()=> async(dispatch)=> {
    try {
        dispatch({
            type:FetaureProductActionType.FEATUREPRODUCT_REQUEST,
        })
        const config = {
            headers: {
                'Content-type': 'application/json',
                
            }
        }

        const {data} = await axios.get('https://nexus-store-backend.herokuapp.com/products/featureproducts' , 
            config
        
        )

        dispatch({
            type:FetaureProductActionType.FEATUREPRODUCT_SUCCESS,
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type:FetaureProductActionType.FEATUREPRODUCT_FAIL,
            payload:error,
        })
        
    }
}



export const SingleFetaureProductAction = (id)=> async(dispatch)=> {
    try {
        dispatch({
            type:FetaureProductActionType.SINGLE_FEATUREPRODUCT_REQUEST,
        })
        const config = {
            headers: {
                'Content-type': 'application/json',
                
            }
        }

        const {data} = await axios.get(`https://nexus-store-backend.herokuapp.com/products/featureproducts/${id}` , 
            config
        
        )

        dispatch({
            type:FetaureProductActionType.SINGLE_FEATUREPRODUCT_SUCCESS,
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type:FetaureProductActionType.SINGLE_FEATUREPRODUCT_FAIL,
            payload:error,
        })
        
    }
}