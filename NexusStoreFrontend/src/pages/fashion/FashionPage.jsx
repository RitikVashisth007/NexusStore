import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderImage, MainContainer , ImageContainer , ContainerItems , ThumbnailBox , ContainerHeader, ProductSection, TypeSection  } from './FashionPageStyled'


function FashionPage() {
    return (
        <MainContainer>
            <HeaderImage>
                <img src="https://res.cloudinary.com/dbi3j4bvc/image/upload/v1623305125/Nexus%20Store/fashion_fjqhh7.jpg" alt="fashion" />
            </HeaderImage>
            
            <ProductSection>
            <ContainerHeader>
                <div>
                    <h4>Trending</h4>
                    <p>upto 70% off</p>
                </div>
                <div>
                    <Link to='/search/fashion'>
                    <button>View All</button>
                    </Link>
                </div>
            </ContainerHeader>
            <ContainerItems>
            <Link to='/search/jackect' >
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
                <Link to='/search/mensuit' >
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
            
            <TypeSection>

                <div className=''>
                    <Link to='/search/men' >
                    <img src="https://res.cloudinary.com/dbi3j4bvc/image/upload/v1623305137/Nexus%20Store/austin-wade-d2s8NQ6WD24-unsplash_duld0e.jpg" alt="" />
                    <h5>Men</h5>
                    </Link>
                </div>
                <div>
                    <Link to='/search/women' >
                    <img src="https://res.cloudinary.com/dbi3j4bvc/image/upload/v1623309728/Nexus%20Store/ussama-azam-27xbM3bF9_s-unsplash_ee7x8p.jpg" alt="" />
                    <h5>Women</h5>
                    </Link>
                </div>
                <div>
                    <Link to='/search/kids' >
                    <img src="https://res.cloudinary.com/dbi3j4bvc/image/upload/v1623309729/Nexus%20Store/ian-dooley-1yl3jzKoKXg-unsplash_eqkojq.jpg" alt="" />
                    <h5>Teenagers</h5>
                    </Link>
                </div>
            </TypeSection>

        
            </ProductSection>

        </MainContainer>
    )
}

export default FashionPage
