import React from 'react'

import {Link} from 'react-router-dom'

import {useState, useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {login, userProfileAction} from '../../redux/user/UserAction'
import { MainContainer , LoginForm  , FrontScreen, LoginContainer , InputContainer , BottomSection} from './LoginPageStyled'


 



function LoginPage({location, history}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    
    
    const redirect = location.search ? location.search.split('=')[1] : '/'
    const userLogin = useSelector(state=> state.login)

    const {error,userInfo} = userLogin


    const submitHandler = (e) =>{
        e.preventDefault()
        if(email&&password){
            dispatch(login(email.toLowerCase(),password))
            console.log(email+password)
        }
        else{
            console.log('please enter the values')
        }
        
        
    }
    
  

    useEffect(() => {
        if(userInfo){
            dispatch(userProfileAction(userInfo.token))
            history.push('/')
            
        }
    }, [history,userInfo , dispatch])



    return (
        <MainContainer>
            
            <FrontScreen>
                <LoginContainer>
                    <LoginForm onSubmit={submitHandler} >
                        <h4>Welcome Back </h4>
                        {error?<p id='error-message' >{error} </p>:''}
                        <label id="email-label" htmlFor="email">Email</label>
                        <InputContainer>
                            
                            <input onChange={(e)=>setEmail(e.currentTarget.value)} required placeholder='Email' type='email' />
                        </InputContainer>
                        <label id="password-label" htmlFor="password">Password</label>
                        <InputContainer>
                            
                            <input onChange={(e)=>setPassword(e.currentTarget.value)} required placeholder='Password' type='password' />
                        </InputContainer>

                        <button type='submit' >Login</button>
                        

                    </LoginForm>
                    <BottomSection >
                        <p>Don't have an Accout <Link to={redirect ? `/register?rediredct=${redirect}` : '/register'} >Register Now</Link> </p>
                        
                    </BottomSection>
                </LoginContainer>

            </FrontScreen>

        </MainContainer>
    )
}

export default LoginPage
