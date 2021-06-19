import styled from 'styled-components'



export const MainContainer = styled.div`
    

`



export const FrontScreen = styled.div`
    
    height:100vh;
    width:100%;
    justify-content:center;
    
    display:flex;
`

export const LoginContainer = styled.div`
height:auto;
margin-bottom: 7px;
width:400px;
min-width:350px;
background-color: white;
color:black;
margin-top: 15vh;
border-radius:7px;
box-shadow:1px 1px 12px 1px  grey;
`
export const LoginForm = styled.form`
display: grid;
grid-gap: 5px;
margin-top: 10px; 

#error-message{
    margin-left:41px;
    color:black;
    background-color:red;
    border-radius:5px;
    font-size:12px;
    margin-right:40px;
    padding-left:10px;
}
label{
    margin-left:41px;
    font-weight:500;
    
}
h4{
    font-size:25px;
    
    padding-left:31px;
    
    color:#2874F0;
}
button{
    margin:auto;
    background-color:#2874F0;
    margin: 2px 40px 10px 40px;
    border-radius:5px;
    padding: 11px 7px 11px 7px;
    border:none;
    outline:none;
    width:80%;
    margin-top:24px;
    font-weight:600;
    color:white;
    cursor: pointer;
}
`

export const InputContainer = styled.div`
    
    margin:auto;
    background-color:aliceblue;
    margin: 2px 40px 10px 40px;
    border-radius:3px;
    padding: 11px 7px 11px 7px;
    
    input{
        background-color:transparent;
        outline:none;
        border:none;
        
        color:black;
        margin-left:10px;
        padding: 2px 10px 2px 10px;
        font-size:14px;
        font-weight:600;
        
    }
    
`
export const BottomSection = styled.div`
    p{
        text-align:center;
    }
    a{
        text-decoration:none;
        color:red;
    }


`