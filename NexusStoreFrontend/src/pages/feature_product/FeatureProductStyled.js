import styled from 'styled-components'


export const MainContainer = styled.div`
    margin-top: 90px;
    
    


`


export const ProductDetailSection = styled.div`
    
    display: flex;
    justify-content: space-between;
    background-color: white;
    margin: 6px 20px;
    padding: 25px 20px;
    border-radius: 4px;

    @media only screen and (max-width: 740px){
            display: grid;
            

    }
    

`

export const DownSection = styled.div`


margin-top: 50px;
height: 400px;
width: 100%;
background-color: grey;

`

export const MainImageContainer = styled.div`
display: flex;
justify-content: space-evenly;
ul{
    display: flex;
    flex-direction: column-reverse;
    height: 100%;
    
    
}
li{
    list-style: none;
    background-color: #F5F5F5;
    margin-top:4px;
    :hover{
        border: 1px solid grey;
        
        
    }
}
.main-big-image{
    object-fit: contain;
    width: 400px;
    height: 400px;
    border: 1px solid #F5F5F5;
    box-shadow: 1px 1px 2px  #DCDCDC	;
    transition-duration: 300ms;

    :hover{
        box-shadow: 2px 2px 4px 2px #DCDCDC	;

    }

}
.side-small-image{
    width: 60px;
    height: 70px;
    object-fit: contain;
}

@media only screen and (max-width: 540px){
    display: flex;
    flex-direction: column-reverse;

    ul{
        flex-direction: row;
    }
    .main-big-image{
        height: 65vw;
        width: auto;
        padding-left: 9vw;
        
    }


}


`

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-evenly;

    padding-left: 20px;
    p{
        font-size: 14px;
        padding: 2px 2px;
    }

`

export const BuyCart = styled.div`
width: 470px;
display: flex ;
justify-content: space-evenly;
position: unset;
padding-left: 20px;

button{
    width:50%;
    height: 50px;
    background-color: yellowgreen;
    border: none;
    outline: none;
    color: white;
    font-size:16px;
    font-weight: 600;
    
}
#addtocart-button{
    color:white;
    background-color: orange;
    margin-left: 10px;
}
#buynow-button{
    background-color: #00bfff;
}
@media only screen and (max-width: 740px){
    height: 44px;
    padding-left: 0;
    background-color: white;
    position: fixed;
    bottom: 0;
    width: 100%;
    

    #addtocart-button{
    
        margin-left: 0;
}
    

}

`




