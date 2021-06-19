import axios from 'axios'
import SearchActionType from './SearchActionType'


export const SearchAction = (keywords)=> async(dispatch)=> {
    try {
        dispatch({
            type:SearchActionType.SEARCH_REQUEST,
        })
        const config = {
            headers: {
                'Content-type': 'application/json',
                
            }
        }

        const {data} = await axios.get(`https://nexus-store-backend.herokuapp.com/products/search?search=${keywords}` , 
            config
        
        )

        dispatch({
            type:SearchActionType.SEARCH_SUCCESS,
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type:SearchActionType.SEARCH_FAIL,
            payload:error,
        })
        
    }
}