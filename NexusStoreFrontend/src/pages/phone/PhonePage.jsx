import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderImage, MainContainer , ImageContainer , ContainerItems , ThumbnailBox , ContainerHeader, ProductSection, TypeSection  } from './PhonePageStyled'


function PhonePage() {
    return (
        <MainContainer>
            <HeaderImage>
                <p >All New OnePlus Phone Now Available</p>
                <img src="https://res.cloudinary.com/dbi3j4bvc/image/upload/v1623320584/Nexus%20Store/oneplus_e1cmgi.jpg" alt="fashion" />
            </HeaderImage>
            
            <ProductSection>
            <ContainerHeader>
                <div>
                    <h4>Best in Class</h4>
                    <p>upto 70% off</p>
                </div>
                <div>
                    <Link to='/search/smartphone'>
                        <button>View All</button>
                    </Link>
                </div>
            </ContainerHeader>
            <ContainerItems>
                <Link to='/search/samsungphone' >
                    <ThumbnailBox>
                        <ImageContainer>
                            <img src="https://res.cloudinary.com/dbi3j4bvc/image/upload/v1623322694/Nexus%20Store/samsung_apoy70.jpg" alt="" />
                        </ImageContainer>
                        <h5>Samsung</h5>
                        <p className='discount' >upto 10%off</p>
                        <p className='offer' > EMI starts at 2400/month </p>

                    </ThumbnailBox>
                </Link>
                <Link to='/search/oneplusphone' >
                <ThumbnailBox>
                    <ImageContainer>
                        <img src="https://res.cloudinary.com/dbi3j4bvc/image/upload/v1623322659/Nexus%20Store/oneplus_tsql1m.webp" alt="" />
                    </ImageContainer>
                    <h5>OnePlus</h5>
                    <p className='discount' >upto 30%off</p>
                    <p className='offer' > EMI starts at 1400/month </p>

                </ThumbnailBox>
                </Link>
                <Link to='/search/vivophone' >
                <ThumbnailBox>
                    <ImageContainer>
                        <img src="https://res.cloudinary.com/dbi3j4bvc/image/upload/v1623322659/Nexus%20Store/vivo_lrhn1z.png" alt="" />
                    </ImageContainer>
                    
                    <h5>Vivo</h5>
                    <p className='discount' >upto 50%off</p>
                    <p className='offer' > Starts at ₹19999 </p>

                </ThumbnailBox>
                </Link>


                <Link to='/search/iphone' >
                <ThumbnailBox>
                    <ImageContainer>
                        <img src="https://res.cloudinary.com/dbi3j4bvc/image/upload/v1623322855/Nexus%20Store/iphone_ir1wem.jpg" alt="" />
                    </ImageContainer>
                    
                    <h5>iPhone</h5>
                    <p className='discount' >upto 10%off</p>
                    <p className='offer' > EMI stats at 1400/month </p>

                </ThumbnailBox>
                </Link>
                <Link to='/search/asusphone' >
                <ThumbnailBox>
                    <ImageContainer>
                        <img src="https://res.cloudinary.com/dbi3j4bvc/image/upload/v1623322857/Nexus%20Store/asus_vbmcnz.jpg" alt="" />
                    </ImageContainer>
                    
                    <h5>Asus</h5>
                    <p className='discount' >upto 10%off</p>
                    <p className='offer' > emi stats at 2400/month </p>

                </ThumbnailBox>
                </Link>
                <Link to='/search/miphone' >
                <ThumbnailBox>
                    <ImageContainer>
                        <img src="https://res.cloudinary.com/dbi3j4bvc/image/upload/v1623322660/Nexus%20Store/mi_logo_umbtee.png" alt="" />
                    </ImageContainer>
                    
                    <h5>Mi</h5>
                    <p className='discount' >upto 10%off</p>
                    <p className='offer' > Starts at ₹90 </p>

                </ThumbnailBox>
                </Link>
                
            </ContainerItems>
        
            <TypeSection>

                <div className=''>
                    <Link to='/search/smartphone'>
                    <img src="https://res.cloudinary.com/dbi3j4bvc/image/upload/v1623323581/Nexus%20Store/smartphone_nwklpl.jpg" alt="" />
                    <h5>Smartphone</h5>
                    </Link>
                </div>
                <div>
                    <Link to='/search/tablet'>
                    <img src="https://res.cloudinary.com/dbi3j4bvc/image/upload/v1623323581/Nexus%20Store/roberto-nickson-hLgYtX0rPgw-unsplash_nt0msh.jpg" alt="" />
                    <h5>Tablet</h5>
                    </Link>
                </div>
                <div>
                    <Link to='/search/keypadephone'>
                    <img src="https://res.cloudinary.com/dbi3j4bvc/image/upload/v1623323785/Nexus%20Store/keypadephone_d40v2d.jpg" alt="" />
                    <h5>Keypade</h5>
                    </Link>
                </div>
            </TypeSection>

        
            </ProductSection>

        </MainContainer>
    )
}

export default PhonePage
