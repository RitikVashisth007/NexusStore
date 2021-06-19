import { Route , Router} from 'react-router';
import BuyNowPage from './pages/buynow/BuyNowPage';
import CartPage from './pages/cart/CartPage';
import ElectronicPage from './pages/electronic/ElectronicPage';
import FashionPage from './pages/fashion/FashionPage';
import FeautreProduct from './pages/feature_product/FeautreProduct';
import Home from './pages/home/Home';
import LoginPage from './pages/login/LoginPage';
import OrderPage from './pages/order_page/OrderPage';
import PhonePage from './pages/phone/PhonePage';
import ProductDetail from './pages/product_detail/ProductDetail';
import RegisterPage from './pages/register/RegisterPage';
import SearchPage from './pages/search/SearchPage';



const BaseRoutes = () =>{
    <Router>
        <Route path='/' exact  component={Home} />
        <Route path='/featureproduct' exact component={FeautreProduct} />
        <Route path='/featureproduct/:id?' exact component={FeautreProduct} />
        <Route path='/product/:id?' exact component={ProductDetail} />
        <Route path='/search/' exact component={SearchPage} />
        <Route path='/search/:keywords?' exact component={SearchPage} />
        <Route path='/fashion' exact component={FashionPage} />
        <Route path='/electronic' exact component={ElectronicPage} />
        <Route path='/mobile' exact component={PhonePage} />
        <Route path='/login' exact component={LoginPage} />
        <Route path='/register' exact component={RegisterPage} />
        <Route path='/buynow/:id' exact component={BuyNowPage} />
        <Route path='/cart' exact component={CartPage}/>
        <Route path='/orders' exact component={OrderPage}/>
    </Router>
}


export default BaseRoutes