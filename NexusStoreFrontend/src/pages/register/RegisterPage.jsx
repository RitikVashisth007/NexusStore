import React from 'react'

import {Link} from 'react-router-dom'


import {useState, useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {register , userProfileAction} from '../../redux/user/UserAction'
import { MainContainer , LoginForm  , FrontScreen, LoginContainer , InputContainer , BottomSection} from './RegisterPageStyled'




function RegisterPage({location,history}) { 

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [comfirmPassword, setComfirmPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const redirect = location.search ? location.search.split('=')[1] : '/'
    const userLogin = useSelector(state=> state.login)
    const userRegister = useSelector(state=> state.register)

    const {userInfo} = userLogin
    const {error} = userRegister
    
    const dispatch = useDispatch()



    const submitHandler = (e) =>{
        e.preventDefault()
        if(password===comfirmPassword){
            console.log(password)
            if(name&&email){
                if(password.length>6){
                   
                    dispatch(register(email.toLowerCase(),password, name))

                    
        
                    
                }
                else{
                    setErrorMessage('Password is short')
                }
                
            }
            else{
                setErrorMessage('Enter All Details')
            }
            
        }
        else{
            setErrorMessage('Password is not same')
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
                    <LoginForm onSubmit={submitHandler}>
                        <h4> Register Now </h4>
                        {error?<p id='error-message' >{error} </p>:''}
                        {errorMessage?<p id='error-message' >{errorMessage} </p>:''}
                        <label  htmlFor="name">Name</label>
                        <InputContainer>
                            
                            <input onChange={(e)=>setName(e.currentTarget.value)} required placeholder='Name' type='text' />
                        </InputContainer>
                        <label  htmlFor="email">Email</label>
                        <InputContainer>
                            
                            <input onChange={(e)=>setEmail(e.currentTarget.value)} required placeholder='Email' type='email' />
                        </InputContainer>
                        <label  htmlFor="password">Password</label>
                        <InputContainer>
                            
                            <input onChange={(e)=>setPassword(e.currentTarget.value)} required placeholder='Password' type='password' />
                        </InputContainer>
                        <label  htmlFor="password">Comfirm Password</label>
                        <InputContainer>
                            
                            <input onChange={(e)=>setComfirmPassword(e.currentTarget.value)} required placeholder='Comfirm Password' type='password' />
                        </InputContainer>

                        <button  type='submit' >Register</button>
                        

                    </LoginForm>
                    <BottomSection >
                        <p>Already have an Accout <Link to={redirect ? `/login?rediredct=${redirect}` : '/login'} >Login</Link> </p>
                        
                    </BottomSection>
                </LoginContainer>

            </FrontScreen>

        </MainContainer>
    )
}

export default RegisterPage