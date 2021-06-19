import styled from 'styled-components'



export const MainContainer = styled.div`
margin-top: 60px;
a{
    text-decoration: none;
    color: black;
}

`

export const HeaderImage = styled.div`
    img{
        height: 55vh;
        min-height: 250px;
        width: 100%;
        object-fit: cover;
    }
    @media only screen and (max-width: 650px){

        img{
            height: auto;
            object-position: 0;

            
        }

    } 
`


export const ContainerItems = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));


    .offer{
        font-size: 10px;
        color:grey;
    }
    .discount{
        font-size: 10px;
        color:#56E35A;
    }
    

`


export const ThumbnailBox = styled.div`
   
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    margin: 2px 10px;
    
    
    
   

`


export const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    p{
        font-size: 9px;
    }
    button{
        background-color: rgba(40,116,240,0.98);
        padding: 3px 15px;
        border:none;
        color:white;
        outline: none;
        border-radius: 4px;
        cursor: pointer;
    }
    
    

`

export const ImageContainer = styled.div`
    max-width: 220px;
    height: 170px;
    

    img{
        max-width: 210px;
        min-width: 180px;
        height: 170px;
        object-fit: cover;
        border-radius: 8px;
        
        
    }
    

`


export const ProductSection = styled.div`
    margin: 10px 2vw;
`


export const TypeSection = styled.div`
    border: 1px dotted gray;
    display: flex;
    justify-content: center;
    margin-top: 10px;

    div{
        margin: 10px 10px;
    }
    
    img{
        min-height: 200px;
        max-height: 420px;
        
        object-fit: cover;
    }
    h5{
        font-size: 19px;
        text-align: center;
    }
    @media only screen and (max-width: 930px){
        img{
            max-height: 300px;
        }

    }

    @media only screen and (max-width: 650px){
        display: grid;
        

        img{
            height: auto;
            max-height: 250px;
        }
    }

`