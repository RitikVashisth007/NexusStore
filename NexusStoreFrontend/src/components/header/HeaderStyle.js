import styled from 'styled-components'


export const SuperMainContainer = styled.div `
    position: fixed;
    top:0;
    background-color: #2874F0;
    width: 100%;
    z-index: 2;

    a{
        text-decoration: none;
        color:grey;
        

    }
    
    
    


`


export const MainContainer = styled.div`
    display: grid;
    grid-template-columns:  1fr 1fr 1fr;
    width: 100%;
    
    
    padding-bottom:2px;
    
    max-height: 40px;
    #searchbar-mobile{
        display: none;
    }
    @media only screen and (max-width: 820px){
        display: flex;
        justify-content: space-between;

    }
   
 `


export const SlideOptions = styled.div`
    transform:${({ slideValue}) => slideValue ? 'translate(0%)' :'translate(-100%)' };
    position: absolute;
    z-index:5;
    top:0;
    left:0;
    width: 300px;
    height: 100vh;
    background-color: snow;
    
    #slide-logo{
        background-color: #2874F0;
    }


`

export const LogoContainer =  styled.div `
    display: flex;


    #logo-first{
        color:red;
        text-transform: uppercase;
        font-size: 23px;

    }
    #logo-last{
        color:white;
        text-transform: uppercase;
        font-size: 23px;
    }
    button{
        outline: none;
        border:none;
        background: none;
        
        
    }
    #menu-icon{
        height: auto;
        width: 2rem;
        padding:3px;
        cursor: pointer;
        
    }
    h2{
        margin-top: 0;
        padding-top:4px;
        
        
    }
    @media only screen and (max-width: 500px){
        #logo-first{
            color:red;
            text-transform: uppercase;
            font-size: 17px;
            

        }
        #logo-last{
            color:white;
            text-transform: uppercase;
            font-size: 17px;
            
        }
        h2{
           padding-top : 1px ;
        }
        }

        @media only screen and (max-width: 360px){
            h2{
            display: flex;
            flex-direction: column;
            }
        #logo-first{
            color:red;
            text-transform: uppercase;
            font-size: 13px;
            

        }
        #logo-last{
            color:white;
            text-transform: uppercase;
            font-size: 13px;
            
        }
        }
    
`


export const SerachContainer = styled.form`
    background-color:white;
    border-radius: 13px;
    height: 30px;
    margin-top: 7px;
    display: flex;
    
    
    input{
        min-width: 100px;
        width: 370px;
        max-width: 700px;
        height: 24px;
        padding-left: 18px;
        outline: none;
        border: none;
        border-radius: 13px;
        padding-top: 4px;
        
    }
    button{
        background: none;
        outline: none;
        border: none;
        cursor: pointer;
        padding-top: 5px;
        padding-right: 12px;
        color:#2874F0;
    }
    #serach-icon{
        height: 20px;
        width: auto;
        
    }
    @media only screen and (max-width: 820px){
        input{
            width:auto;
        }

    }
    @media only screen and (max-width: 650px){
        display: none;

    }
`



export const MoreOption = styled.div `
    display: flex;
    justify-content: space-evenly;
    
    button{
        background:none;
        color:white;
        outline: none;
        border: none;
        cursor: pointer;
        font-weight: 600;
        font-size: 15px;
        margin-top: 5px;
        
        
    }
    #login-button{
        background: white;
        color: #2874F0;
        height: 25px;
        border-radius: 5px;
        margin-top: 8px;
        padding:5px;
        padding-right: 15px;
        padding-left: 15px;
        
    }
    #more-down-icon{
        font-size: 10px;
    }
    #cart-item-value{
        position: relative;
        font-size: 10px;
        top:-15px;
        right: -16px;
        background-color: crimson;
        padding: 1px 2px;
        border-radius: 4px;
    }
    #cart-link{
        margin-top: 10px;
        
    }

    @media only screen and (max-width: 820px){
        padding-right: 5px;
        button{
            padding-left: 10px;
            
        }

    }
    
`


export const MobileSerachContainer = styled.form`
    background-color:white;
    border-radius: 13px;
    height: 30px;
    margin-top: 7px;
    display: none;
    max-width:400px;
    margin: auto;
    margin-bottom: 2px;

    
    input{
        min-width: 100px;
        width: 370px;
        max-width: 400px;
        height: 24px;
        padding-left: 18px;
        outline: none;
        border: none;
        border-radius: 13px;
        padding-top: 4px;
        
    }
    button{
        background: none;
        outline: none;
        border: none;
        cursor: pointer;
        padding-top: 5px;
        padding-right: 12px;
        color:#2874F0;
    }
    #serach-icon{
        height: 20px;
        width: auto;
        
    }
    @media only screen and (max-width: 650px){
        display: flex;

    }
    
`


export const SlideLinks = styled.div `
    display: grid;
    grid-template-rows:1fr 1fr 1fr;
    


#line{
    height: 1px;
    width:100%;
    background-color: grey;
}
li{
    list-style: none;
    font-size: 17px;
    font-weight: 600;
    

    
}
ul{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 30px;
    height: 200px;
    padding-top: 20px;

}
a{
    display: flex;
}
   
#slide-icon{
    color:black;
    padding-right: 16px;
    font-size: 19px;
    
}
#extra-link{
    justify-content: flex-start;
    li{
        font-size: 14px;
        padding-top: 4px;
    }
}
`


export const SecondHeader = styled.div`
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    background-color: white;
    height: 24px;
    @media only screen and (max-width: 650px){
        display: none;

    }
`


export const Keywords = styled.div ` 
    padding-left: 18px;
    overflow: hidden;
   
    ul{
        display: flex;
        justify-content: space-between;

        margin-top: 4px;
        margin-bottom: 2px;
    }
    li{
        list-style: none;
        display: flex;
        margin-left: 18px;
        background-color: rgba(40,116,240);
        font-size: 11px;
        border-radius: 4px;
        padding: 2px 14px 2px 14px;
    }
    a{
        color:white;
    }
    @media only screen and (max-width: 945px){
        padding-left: 3px;
        li{
            margin-left:3px;
            padding: 2px 7px 2px 7px;
        }
        

    }

`

export const NexusVideo = styled.div `
    background-color: rgba(40,116,240,0.8);
    display: flex;
    border-radius: 3px 0 0 3px;
    
    
p{
    font-size: 11px;
    font-weight: 400;
    margin-top: 5px;
    margin-left:25px;
    margin-right: 25px;
    color:white;
}
button{
    background-color: white;
    border:none;
    outline:none;
    margin: 2px 30px 2px 30px;
    padding: 1px 15px;
    height: 18px;
    font-size: 12px;
    border-radius: 4px;
}
a{
    font-size: 10px;
    font-weight:500;
}


@media only screen and (max-width: 995px){
        p{
            font-size: 9px;
            margin-left: 2px;
            margin: 1px 2px 2px 2px;
        }
        button{
            padding: 1px 3px;
            
            margin: 1px 2px 2px 2px;

        }

    }

`


export const MoreDropdown = styled.div`
    position: absolute;
    z-index: 10;
    /* background-color: rgba(255, 255, 255,0.8); */
    background-color: lightgray;
    border-radius: 5px;
    padding:2px 35px 8px 35px;
    display: ${({ more }) => more  ? 'inlines' : 'none' };
    
    margin-top: 10px;
    li{
        list-style: none;
        padding-top: 4px;
    }
    button{
        color:black;
    }

`


