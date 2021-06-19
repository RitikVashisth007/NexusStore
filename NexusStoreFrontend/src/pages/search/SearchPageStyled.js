import styled from 'styled-components'

export const MainContainer = styled.div`
    margin-top: 78px;


`

export const TopContainer = styled.div`
    text-align: center;
    p{
        font-size: 15px;
        font-weight: 500;
    }
    select{
        outline: none;
        border:none;
        background-color: white;
        width: 68%;
        font-weight: 500;
    }
    label{
        font-size:13px;
        color:grey;
        padding-right: 10px ;
        align-self: center;
        
    }
    
    form{
        
        display: flex;
        justify-content: space-between;
        padding: 3px 15px;
        border-radius: 3px;
        background-color: white;
        box-shadow: 1px 1px 2px grey;
        width: 270px;
    }
    .sort-by{
        display: flex;
        float: right;
        margin-right: 35px;
        height: 35px;
       
        
    }
    @media only screen and (max-width: 650px){
        .sort-by{
            width:100%;
            max-width: 420px;
            margin-right: 10vw;
            margin-left: 10vw;
            margin: auto;
            justify-content: center;
            float: none;
        }
        form{
            
            max-width: 420px;
            
        }
        select{
            width: 50%;
        }
       
    }


`


export const SearchResult = styled.div`

    

    
    margin: 55px 10vw;

    @media only screen and (max-width: 650px){
        margin:35px 0;
        
    }
    


`