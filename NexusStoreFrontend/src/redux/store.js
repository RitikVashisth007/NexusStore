import { createStore, applyMiddleware , combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { FetaureListingReducer } from './fetature_listing/FetureListingReducer';
import { FetaureProductReducer, SingleFetaureProductReducer } from './fetature_product/FetureProductReducer';
import { SingleProductReducer } from './products/ProductReducer';
import { SearchReducer } from './search_product/SearchReducer';
import { userLoginReducer, userProfileReducer, userRegisterReducer } from './user/UserReducer';
import {cartReducer} from './cart/CartReducer'
import {orderReducer} from './order/OrderReducer'


const middleware = [thunk]

const rootReducer = combineReducers({

    featureListing:FetaureListingReducer,
    featureProduct:FetaureProductReducer,
    singleFetaureProduct:SingleFetaureProductReducer,
    searchResult:SearchReducer,
    singleProduct:SingleProductReducer,
    login:userLoginReducer,
    register:userRegisterReducer,
    userProfile:userProfileReducer,
    cartDetails:cartReducer,
    orderDetails:orderReducer,


})

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null



const initialState = {
    
    login : {userInfo: userInfoFromStorage},
    
}



const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store