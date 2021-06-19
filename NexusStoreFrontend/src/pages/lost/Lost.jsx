import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const MainContainer = styled.div`
    
    video{
        
        width:100%;
        min-height: 500px;
        object-fit: cover;
    }
    p{
        position:absolute;
        font-size:40px;
        top:42vh;
        display: flex;
        width: 100%;
        justify-content: center;
        font-weight:600;
    }
    a{
        color:red;
        font-size:40px;
        font-weight:700;
    }

    @media only screen and (max-width: 500px){
        a{
            font-size: 20px;
        }
        p{
            font-size: 20px;
        }

    }
`


function Lost() {
    return (
        <MainContainer>
            <video autoPlay loop   src="https://res.cloudinary.com/dbi3j4bvc/video/upload/v1617263791/samples/sea-turtle.mp4" />
                <p>Page under Maintenace  go to <Link to='/' > Home</Link> </p>
        </MainContainer>
    )
}

export default Lost