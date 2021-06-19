import React from 'react'
import {MainContainer, DetailsContainer , LogoContainer} from './FooterStyled'

import {FaGithub , FaLinkedin , FaInstagramSquare} from 'react-icons//fa'

function Footer() {
    return (
        <MainContainer>

            <DetailsContainer>
                <p>Contact Me</p>
                <div>
                    <p>Connect Through</p>
                    <div className='social-link'>

                        <a  rel="noreferrer"  href="https://github.com/RitikVashisth007" target="_blank"><FaGithub id="git" /></a>
                        <a  rel="noreferrer"  href="https://www.instagram.com/ritik_vashisth007/" target="_blank"><FaInstagramSquare id="insta" /></a>
                        <a rel="noreferrer"  href="https://www.linkedin.com/in/ritikvashisth/" target="_blank"><FaLinkedin id="linked" /></a>

                    </div>
                    <LogoContainer>
                        <h2>
                            <span id='logo-first' >Nexus </span>
                            <span id='logo-last' > Store</span>
                        </h2>
                    </LogoContainer>
                    <p style={{fontSize:'13px', textShadow:'none'}} >copyright © 2021 All Right Reserved</p>
                </div>
            </DetailsContainer>

            
        </MainContainer>
    )
}

export default Footer
