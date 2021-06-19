import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderImage, MainContainer , ImageContainer , ContainerItems , ThumbnailBox , ContainerHeader, ProductSection, TypeSection  } from './ElectronicPageStyled'


function ElectronicPage() {
    return (
        <MainContainer>
            <HeaderImage>
                <img src="https://res.cloudinary.com/dbi3j4bvc/image/upload/v1623311741/Nexus%20Store/electronic_hf6ine.jpg" alt="fashion" />
            </HeaderImage>
            
            <ProductSection>
            <ContainerHeader>
                <div>
                    <h4>Trending</h4>
                    <p>upto 70% off</p>
                </div>
                <div>
                    <Link to='/search/electronic'>
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
                <Link to='/search/refigerator' >
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


                <Link to='/search/smartwatch' >
                <ThumbnailBox>
                    <ImageContainer>
                        <img src="https://res.cloudinary.com/dbi3j4bvc/image/upload/v1623312139/Nexus%20Store/ivan-shilov-KiAYZZjpjkQ-unsplash_sbvvlo.jpg" alt="" />
                    </ImageContainer>
                    
                    <h5>Smartwatches</h5>
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
        
            <TypeSection>

                <div className=''>
                    <Link to='/search/headphone'>
                    <img src="https://res.cloudinary.com/dbi3j4bvc/image/upload/v1623313286/Nexus%20Store/adam-birkett-vISNAATFXlE-unsplash_tinktq.jpg" alt="" />
                    <h5>Headphones</h5>
                    </Link>
                </div>
                <div>
                    <Link to='/search/laptop'>
                    <img src="https://res.cloudinary.com/dbi3j4bvc/image/upload/v1623313286/Nexus%20Store/howard-bouchevereau-RSCirJ70NDM-unsplash_kpolmz.jpg" alt="" />
                    <h5>Laptops</h5>
                    </Link>
                </div>
                <div>
                    <Link to='/search/Speakers'>
                    <img src="https://res.cloudinary.com/dbi3j4bvc/image/upload/v1623313286/Nexus%20Store/trude-jonsson-stangel-Bt4EUmDwghg-unsplash_bhcv71.jpg" alt="" />
                    <h5>Speakers</h5>
                    </Link>
                </div>
            </TypeSection>

        
            </ProductSection>

        </MainContainer>
    )
}

export default ElectronicPage
