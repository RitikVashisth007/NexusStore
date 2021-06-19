import axios from 'axios'
import ProductActionType from './ProductActionType'


export const SingleProductAction = (id)=> async(dispatch)=> {
    try {
        dispatch({
            type:ProductActionType.SINGLE_PRODUCT_REQUEST,
        })
        const config = {
            headers: {
                'Content-type': 'application/json',
                
            }
        }

        const {data} = await axios.get(`https://nexus-store-backend.herokuapp.com/products/${id}` , 
            config
        
        )

        dispatch({
            type:ProductActionType.SINGLE_PRODUCT_SUCCESS,
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type:ProductActionType.SINGLE_PRODUCT_FAIL,
            payload:error,
        })
        
    }
}