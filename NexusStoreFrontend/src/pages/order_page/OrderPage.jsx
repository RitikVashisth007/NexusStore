import React , {useEffect} from 'react'
import {MainContainer} from './OrderPageStyled'
import { useDispatch, useSelector } from 'react-redux'
import { OrderAction } from '../../redux/order/OrderAction'
import OrderItemThumbnailBox from '../../components/ordered_item_thumnail/OrderedItemThumnail'
import { useHistory} from 'react-router-dom'

function OrderPage() {


    const orderDetail = useSelector(state => state.orderDetails)
    const {OrderDetails} = orderDetail
    const userLogin = useSelector(state=> state.login)
    const {userInfo} = userLogin

    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if(userInfo){
            dispatch(OrderAction(userInfo.token))
        }
        else{
            history.push('/')
        }
        
    }, [userInfo,dispatch , history])

    useEffect(() => {
        if(!userInfo){
            
            history.push('/login')
            alert('Please Login First')
        }
    }, [history,userInfo])




    return (
        <MainContainer>
            
            {
                OrderDetails&&OrderDetails.length>0?OrderDetails.map(({createdAt,qty, isDelivered , shippingAddress, product , id}) => <OrderItemThumbnailBox key={id} createdAt={createdAt}  shippingAddress={shippingAddress} qty={qty} isDelivered={isDelivered}  item={product} />).reverse()
                :<p id='order-something'>Please Order Something</p>
            }

        </MainContainer>
    )
}

export default OrderPage
