import React, { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { FetaureProductAction } from '../../redux/fetature_product/FetaureProductAction'
import { ContainerHeader, ContainerItems, ImageContainer, MainContainer , ThumbnailBox } from './SectionStyled'

export function FirstSection() {
    return (
        <MainContainer>
            <ContainerHeader>
                <div>
                    <h4>Electronic</h4>
                    <p>and Accessories</p>
                </div>
                <div>
                    <Link to='/electronic'>
                    <button>View All</button>
                    </Link>
                </div>
            </ContainerHeader>
            <ContainerItems>
                <Link to='/search/destop' >
                    <ThumbnailBox>
                        <ImageContainer>
                            <img src="https://res.cloudinary.com/dbi3j4bvc/image/upload/v1623056680/Nexus%20Store/desktop_caa4q6.jpg" alt="" />
                        </ImageContainer>
                        <h5>Desktop</h5>
                        <p className='discount' >upto 10%off</p>
                        <p className='offer' > EMI stats at 2400/month </p>

                    </ThumbnailBox>
                </Link>
                <Link to='/search/regigerator' >
                <ThumbnailBox>
                    <ImageContainer>
                        <img src="https://res.cloudinary.com/dbi3j4bvc/image/upload/v1623056681/Nexus%20Store/refregistor_pucoyu.jpg" alt="" />
                    </ImageContainer>
                    <h5>Refigerator</h5>
                    <p className='discount' >upto 10%off</p>
                    <p className='offer' > EMI stats at 1400/month </p>

                </ThumbnailBox>
                </Link>
                <Link to='/search/camera' >
                <ThumbnailBox>
                    <ImageContainer>
                        <img src="https://res.cloudinary.com/dbi3j4bvc/image/upload/v1623056680/Nexus%20Store/camera_rxnzev.jpg" alt="" />
                    </ImageContainer>
                    
                    <h5>Camera</h5>
                    <p className='discount' >upto 10%off</p>
                    <p className='offer' > Starts at ₹19999 </p>

                </ThumbnailBox>
                </Link>


                <Link to='/search/dishwasher' >
                <ThumbnailBox>
                    <ImageContainer>
                        <img src="https://res.cloudinary.com/dbi3j4bvc/image/upload/v1623056681/Nexus%20Store/dishwasher_xv6j6h.jpg" alt="" />
                    </ImageContainer>
                    
                    <h5>Dishwasher</h5>
                    <p className='discount' >upto 10%off</p>
                    <p className='offer' > EMI stats at 1400/month </p>

                </ThumbnailBox>
                </Link>
                <Link to='/search/console' >
                <ThumbnailBox>
                    <ImageContainer>
                        <img src="https://res.cloudinary.com/dbi3j4bvc/image/upload/v1623058784/Nexus%20Store/ps5_pyma7h.jpg" alt="" />
                    </ImageContainer>
                    
                    <h5>Conosle</h5>
                    <p className='discount' >upto 10%off</p>
                    <p className='offer' > emi stats at 2400/month </p>

                </ThumbnailBox>
                </Link>
                <Link to='/search/bulb' >
                <ThumbnailBox>
                    <ImageContainer>
                        <img src="https://res.cloudinary.com/dbi3j4bvc/image/upload/v1623056679/Nexus%20Store/bulb_e0qyk1.jpg" alt="" />
                    </ImageContainer>
                    
                    <h5>Bulb</h5>
                    <p className='discount' >upto 10%off</p>
                    <p className='offer' > Starts at ₹90 </p>

                </ThumbnailBox>
                </Link>
                
            </ContainerItems>
        </MainContainer>
    )
}


export function SecondSection() {
    return (
        <MainContainer>
            <ContainerHeader>
                <div>
                    <h4>Fashion</h4>
                    <p>upto 70% off</p>
                </div>
                <div>
                    <Link to='/fashion' >
                    <button>View All</button>
                    </Link>
                </div>
            </ContainerHeader>
            <ContainerItems>
            <Link to='/search/jacket' >
                <ThumbnailBox>
                    <ImageContainer>
                        <img src="https://res.cloudinary.com/dbi3j4bvc/image/upload/v1623056680/Nexus%20Store/girl_jackedt_pvabr7.jpg" alt="" />
                    </ImageContainer>
                    <h5>Jackets</h5>
                    <p className='discount' >upto 70%off</p>
                    <p className='offer' > Puma, UBC, Woodland </p>

                </ThumbnailBox>
                </Link>
                <Link to='/search/shoes' >
                <ThumbnailBox>
                    <ImageContainer>
                        <img src="https://res.cloudinary.com/dbi3j4bvc/image/upload/v1623056679/Nexus%20Store/shoes_zgwpfj.jpg" alt="" />
                    </ImageContainer>
                    <h5>Shoes</h5>
                    <p className='discount' >upto 40%off</p>
                    <p className='offer' > Nike, Adidas, Puma </p>

                </ThumbnailBox>
                </Link>
                <Link to='/search/tshirt' >
                <ThumbnailBox>
                    <ImageContainer>
                        <img src="https://res.cloudinary.com/dbi3j4bvc/image/upload/v1623056680/Nexus%20Store/t-shirt_o9gx2h.jpg" alt="" />
                    </ImageContainer>
                    
                    <h5>T-Shirt</h5>
                    <p className='discount' >upto 10%off</p>
                    <p className='offer' > HRX , Jack & Jones </p>

                </ThumbnailBox>
                </Link>
                <Link to='/search/kurta' >
                <ThumbnailBox>
                    <ImageContainer>
                        <img src="https://res.cloudinary.com/dbi3j4bvc/image/upload/v1623061908/Nexus%20Store/Kurta_Girl_sfwe7y.jpg" alt="" />
                    </ImageContainer>
                    
                    <h5>Kurta</h5>
                    <p className='discount' >upto 20%off</p>
                    <p className='offer' > Starts at ₹500 </p>

                </ThumbnailBox>
                </Link>
                <Link to='/search/suits' >
                <ThumbnailBox>
                    <ImageContainer>
                        <img src="https://res.cloudinary.com/dbi3j4bvc/image/upload/v1623056679/Nexus%20Store/men_suit_dglk0u.jpg" alt="" />
                    </ImageContainer>
                    
                    <h5>Suits</h5>
                    <p className='discount' >upto 60%off</p>
                    <p className='offer' > Raymond, UBC </p>

                </ThumbnailBox>
                </Link>
                <Link to='/search/watches' >
                <ThumbnailBox>
                    <ImageContainer>
                        <img src="https://res.cloudinary.com/dbi3j4bvc/image/upload/v1623056679/Nexus%20Store/clock_b6gkx1.jpg" alt="" />
                    </ImageContainer>
                    
                    <h5>Watches</h5>
                    <p className='discount' >upto 10%off</p>
                    <p className='offer' > Starts at ₹350 </p>

                </ThumbnailBox>
                </Link>
                
            </ContainerItems>
        </MainContainer>
    )
}








export function ThirdSection() {

    const featureProduct = useSelector(state => state.featureProduct)
    const {FetaureProductLoading , FetaureProductDetails} = featureProduct
    
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(FetaureProductAction())
    }, [dispatch])
    


    return (
        <MainContainer>
            {FetaureProductLoading?<h3>Loading</h3>:FetaureProductDetails&&FetaureProductDetails.length>0?
            <div>
            <ContainerHeader>
                <div>
                    <h4>Feature Products</h4>
                    <p>Great Deals</p>
                </div>
                <div>
                    <Link to='/support' >
                    <button>View All</button>
                    </Link>
                </div>
            </ContainerHeader>
            <ContainerItems>
                {
                    FetaureProductDetails.slice(0,6).map(({product})  =>
                    <ThumbnailBox key={product.id}>
                        <Link to={`/product/${product.id}`}>
                        <ImageContainer>
                            <img src={product.main_photo} alt={product.title} />
                        </ImageContainer>
                        <h5>{product.tproduct}</h5>
                        <p className='discount' >{product.brand}</p>
                        <p className='offer' > Starts at ₹{product.price} </p>

                        </Link>
    
                    </ThumbnailBox>)
                }
                
            </ContainerItems>
            </div>
            :<div></div>}
        </MainContainer>
    )
}


