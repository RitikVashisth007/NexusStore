import styled from 'styled-components'


export const MainContainer = styled.div`
    margin:0px 15px;
    padding:10px;
    background-color: white;
    border-radius: 3px;
    margin-bottom: 15px;
    a{
        text-decoration: none;
       
        color:rgba(2, 2, 2, 0.753);
        text-align: center;
    }

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
    @media only screen and (max-width: 410px){
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }

    

`


export const ThumbnailBox = styled.div`
   
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    margin: 2px 10px;
    
    
    
   

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


