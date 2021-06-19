import styled from 'styled-components'


export const MainContainer = styled.div`
    margin: 70px 5vw;
    
    

`

export const ProductDetail = styled.div`

`


export const AddressDetail = styled.div`


`


export const DownSection = styled.div`
    display: flex;
    float: right;
    margin-top:20px;
    margin-right: 15px;
    
    button{
        border:none;
        outline:none;
        background-color: red;
        font-size: 14px;
        font-weight: 500;
        color: white;
        border-radius: 2px;
        
        padding: 10px 15px;
        cursor: pointer;
    }

`


export const AddAddress = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border-radius: 4px;
   
    box-shadow: 1px 1px 5px lightgray;
    padding: 25px 10px;
    
    
    .input-div{
        display: flex;
        min-width: 300px;
        max-width: 400px;
        justify-content: space-around;
        background-color: white;
        margin-bottom: 5px;
        margin-left: 5px;
        height: 40px;
        box-shadow: 1px 1px 4px lightgray;

        input{
            outline: none;
            border: none;
            height: 100%;
            font-size: 16px;
        }
        label{
            font-size: 14px;
            font-weight: 500;
            align-self: center;
        }
        
    }


`


export const UserAddress = styled.div`
    border-radius: 4px;
    box-shadow: 1px 1px 5px lightgray;
    padding: 25px 10px;
    display: flex;
    justify-content: space-between;
    button{
        border:none;
        outline:none;
        background-color: #2874F0;
        font-size: 14px;
        font-weight: 500;
        color: white;
        border-radius: 2px;
        
        padding: 10px 5px;
        cursor: pointer;
    }

`