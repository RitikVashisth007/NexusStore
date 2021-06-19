import styled from 'styled-components'


export const MainContainer = styled.div`
    
    
    padding: 25px 0;
    background-color: #2874F0;
    width: 100%;
    display: flex;
    justify-content: center;
    color:white;
    
    p{
        font-size: 27px;
        font-weight: 600;
        text-shadow: 1px 1px 3px lightgray;
        text-align: center;
    }

`

export const DetailsContainer = styled.div`
a{
    text-decoration: none;
    color:white;
}

.social-link{
    svg{
        font-size: 35px;
        padding-left: 10px;
        :hover{
            transform: scale(1.1);
        }
    }
    display: flex;
    justify-content: center;
    padding: 10px 5px;
}
    #insta{
        
        color: rgba(221, 42, 123, 0.9);
        
        
    }
    #git{
        color:black;
    }
    #twitter{
        color:#1DA1F2;
    }

`


export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 26px;
    #logo-first{
        color:red;
        

    }
    #logo-last{
        color:white;
        
    }
`