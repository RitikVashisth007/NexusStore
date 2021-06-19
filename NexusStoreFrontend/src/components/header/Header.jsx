import React , {useState, useEffect , useRef} from 'react'
import {MainContainer, LogoContainer, SerachContainer , MoreOption , SecondHeader , Keywords  , NexusVideo , SlideOptions, SuperMainContainer , MobileSerachContainer , SlideLinks, MoreDropdown} from './HeaderStyle'
import {FaSearch , FaShoppingCart , FaBox , FaChevronDown , FaRupeeSign , FaFemale , FaMobileAlt, FaUserCircle} from 'react-icons/fa'
import {HiMenu} from 'react-icons/hi'
import {IoLaptopOutline, IoHeartOutline , IoTvOutline , IoBedOutline} from 'react-icons/io5'
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {useSelector , useDispatch} from 'react-redux'
import { logout, userProfileAction} from '../../redux/user/UserAction'
import { CartAction } from '../../redux/cart/CartAction'

function Header() { 

    const [slideBar, setSlideBar] = useState(false)
    const [serachValue, setSerachValue] = useState('')
    
    const history = useHistory()


    const userLogin = useSelector(state=> state.login)
    const cartDetails = useSelector(state=> state.cartDetails)

    const {userInfo} = userLogin
    const {CartDetails} = cartDetails
    // console.log(CartDetails&&CartDetails.length);

    
 
    const [showMore, setShowMore] = useState(false)



    const serchSubmitHandler = (e)=>{
        e.preventDefault();
        // console.log('hello');
        history.push(`/search/${serachValue}`)
        
    }

    const loginHandler = () =>{
        history.push('/login')
    }

    const userProfileHandler = () => {
        history.push('/profile')
    }
    

    const dispatch = useDispatch()

    useEffect(() => {
        if(userInfo){
            dispatch(userProfileAction(userInfo.token))
            dispatch(CartAction(userInfo.token))

        }
        
        
    }, [dispatch,userInfo])



    const logoutHandler = () => {
        dispatch(logout())
        window.location.reload();
    }

    const menuRef = useRef();


    useEffect(() => {
        document.addEventListener("mousedown",(event)=>{
        if(!menuRef.current.contains(event.target)){
            setShowMore(false)
        }
        })
        
    },[])

    useEffect(() => {
        window.addEventListener("scroll",function(){
            if(window.pageYOffset>10){
                
                
                setShowMore(false)
        
            }
        })
    }, [(window.pageYOffset)])


    return (
        <SuperMainContainer>
            <SlideOptions slideValue = {slideBar} >

                    
                    <LogoContainer id='slide-logo' >
                    <button onClick={()=>setSlideBar(!slideBar)} > 
                        <HiMenu id='menu-icon' />
                    </button>
                    <Link to='/'>
                    <h2>
                        <span id='logo-first' >Nexus </span>
                        <span id='logo-last' > Store</span>
                    </h2>
                    </Link>
                    </LogoContainer>
                    <SlideLinks>
                        <div>
                            <ul >
                                <li> <Link to='/fashion' onClick={()=>setSlideBar(!slideBar)} > <FaFemale id='slide-icon' />  Fashion </Link></li>
                                <li> <Link to='/electronic' onClick={()=>setSlideBar(!slideBar)} > <IoLaptopOutline  id='slide-icon' /> Electronic </Link></li>
                                <li> <Link to='/mobile' onClick={()=>setSlideBar(!slideBar)} > <FaMobileAlt  id='slide-icon' /> Mobile </Link></li>
                                <li> <Link to='/support' onClick={()=>setSlideBar(!slideBar)} > <IoTvOutline id='slide-icon' />  Applicances  </Link> </li>
                                <li>  <Link to='/support' onClick={()=>setSlideBar(!slideBar)} > <IoBedOutline id='slide-icon' /> Furniture </Link> </li>
                            </ul>
                            <div id='line'></div>
                            <ul>
                                <li> <Link to='/support' onClick={()=>setSlideBar(!slideBar)} > <IoHeartOutline id='slide-icon' /> Wishlist </Link> </li>
                                <li> <Link to='/support' onClick={()=>setSlideBar(!slideBar)} > <FaRupeeSign  id='slide-icon' /> Offer Zone </Link> </li>
                                <li> <Link to='/cart' onClick={()=>setSlideBar(!slideBar)} > <FaShoppingCart id='slide-icon' /> My Cart </Link> </li>
                                <li> <Link to='/orders' onClick={()=>setSlideBar(!slideBar)} > <FaBox id='slide-icon' /> My Order </Link> </li>
                                <li> <Link to='/support' onClick={()=>setSlideBar(!slideBar)} > <FaUserCircle id='slide-icon' /> My Account </Link> </li>
                            </ul>
                            <div id='line'></div>
                            <ul id='extra-link' >
                                <li> <Link to='/support' onClick={()=>setSlideBar(!slideBar)} >Notification </Link> </li>
                                <li> <Link to='/support' onClick={()=>setSlideBar(!slideBar)} >Help </Link> </li>
                                <li> <Link to='/support' onClick={()=>setSlideBar(!slideBar)} >Privacy </Link> </li>
                            </ul>
                        </div>
                    </SlideLinks>

                
            </SlideOptions>

            <MainContainer>
                <LogoContainer>
                    <button onClick={()=>setSlideBar(!slideBar)} > 
                        <HiMenu id='menu-icon' />
                    </button>
                    <Link to='/'>
                    <h2>
                        <span id='logo-first' >Nexus </span>
                        <span id='logo-last' > Store</span>
                    </h2>
                    </Link>
                </LogoContainer>
                <SerachContainer  onSubmit={serchSubmitHandler} >
                    <input type="text" placeholder='Serach for product, brands and more' onChange={(e)=>setSerachValue(e.currentTarget.value)} value={serachValue} />
                    
                    <button><FaSearch id='serach-icon' /></button>

                </SerachContainer>
                <MoreOption ref={menuRef}>
                    {userInfo?<button id='login-button' onClick={userProfileHandler} >{userInfo.first_name}</button>
                    :
                    <button id='login-button' onClick={loginHandler} >Login</button>}
                    <div>
                        <button onClick={()=>setShowMore(!showMore)}  style={{marginTop:'13px'}} >More <FaChevronDown id='more-down-icon' /> </button>
                        {userInfo?
                        <MoreDropdown more={showMore?showMore:''} >
                            <li><button onClick={logoutHandler} >Logout</button></li>
                            <li><button>Profile</button></li>
                            <li><button>Notification</button></li>

                        </MoreDropdown>
                        :''}

                    </div>
                    
                    <Link to='/cart' id='cart-link'>
                    <button >  <span id='cart-item-value'>{CartDetails?CartDetails.length:0}</span> <FaShoppingCart/> Cart</button>
                    </Link>
                   
                </MoreOption>
                
            </MainContainer>

            <MobileSerachContainer onSubmit={serchSubmitHandler} >
                    <input type="text" placeholder='Serach for product, brands and more' onChange={(e)=>setSerachValue(e.currentTarget.value)} value={serachValue}  />
                    <button><FaSearch id='serach-icon' /></button>

            </MobileSerachContainer>

            <SecondHeader>
                <Keywords>
                            <ul>
                                <li> <Link to='/' >   Home </Link></li>
                                <li> <Link to='/search/laptop' >  Laptop </Link></li>
                                <li>  <Link to='/fashion' >  Fashion </Link> </li>
                                
                                <li> <Link to='/search/macbook' >  Macbook  </Link> </li>
                                <li>  <Link to='/search/samsung' >  Samsung </Link> </li>
                                <li> <Link to='/electronic' > Electronic </Link></li>
                                <li>  <Link to='/search/console' >  Consoles </Link> </li>
                            </ul>
                </Keywords>
                <NexusVideo>
                    <p>
                        Watch latest Movie and Seires on  <span style={{color:'red'}} >Nexus</span> Video 
                    </p>
                    <button> <a rel="noreferrer" href="https://nexusvideo.netlify.app/" target="_blank" style={{color:'#2874F0'}} > WATCH NOW </a> </button>
                </NexusVideo>
                
            </SecondHeader>
        

        </SuperMainContainer>

    )
}

export default Header
