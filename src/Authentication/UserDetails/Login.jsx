import React, { useContext, useState } from 'react'
import {FormContainer, TextFieldElement, PasswordElement} from 'react-hook-form-mui'
import { Button } from '@mui/material'
import {useNavigate} from "react-router-dom"
import './Login.css'
import { Alert } from '@mui/material';
import { Context } from '../../Context/Context'

function Login() {

  const Loginnavigate = useNavigate();
  const {userData , SetUserData, loggedIn, SetLoggedIn} = useContext(Context);

  const[isWorngPW,SetIsWorngPW] = useState(false)
   
  const form = {
    agree: false
    } 
    
  function handleLogin(data){
    console.log('clicked')
    for(const user in userData){
      if(data.name === userData[user]['name'] && data.password === userData[user]['password']){
        console.log('signed in successfull')
        Loginnavigate('/home')
        SetIsWorngPW(false)
        localStorage.setItem('loggedIn',JSON.stringify(data.name))
        SetLoggedIn(JSON.parse(localStorage.getItem('loggedIn')))
      }else{
        console.log('not successfull')
        SetIsWorngPW(true)
      }
    }

  }  

  return (
    
    <div className="login h-screen py-32 px-6 lg:px-96">
        <div className="login--card p-10 bg-blue-300 rounded-xl border-white border-4">
            <FormContainer className='login--FormContainer' defaultValues={form} onSuccess={data => handleLogin(data)}
                        FormProps={{
                            'aria-autocomplete': 'none',
                            autoComplete: 'new-password'
                        }}>
            <TextFieldElement
                required
                type={'name'}
                label={'Username'}
                name={'name'}
                margin={'normal'}
                fullWidth={true}        
            /><br />
            <PasswordElement margin={'normal'}
                            label={'Password'}
                            required
                            name={'password'}
                            fullWidth={true}
                  
            /><br />
            <Button sx={{margin:'1rem 0rem'}} fullWidth={true} type={'submit'} color={'primary'} variant={'contained'}>Submit</Button>
            {isWorngPW && <Alert severity="error">Incorrect credentials</Alert>}
            </FormContainer>
            <div>
                if not registered please <Button variant='text' onClick={() => Loginnavigate('/')}>SignUp</Button>
            </div>
        </div>
        
    </div>
  )
}

export default Login