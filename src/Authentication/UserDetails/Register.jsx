import { Button, TextField } from '@mui/material'
import React, { useRef, useState } from 'react'
import './Register.css'
import {FormContainer, TextFieldElement, PasswordElement,PasswordRepeatElement,CheckboxElement} from 'react-hook-form-mui'
import { Alert } from '@mui/material';
import {useNavigate} from "react-router-dom"



function Register() {

  const regNavigate = useNavigate();

  const [strongPassword,SetStrongPassword] = useState(false)
  const [isRegistered,SetisRegistered] = useState(false)

  const form = {
    agree: false
  }

  function handleSubmit(object){

    const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    if(regex.test(object.password)){
      SetStrongPassword(false)
      localStorage.setItem("name", object.name);
      localStorage.setItem("email", object.email);
      localStorage.setItem("password",object.password);
      console.log("Saved in Local Storage");
      SetisRegistered(true)
    }else{
      SetStrongPassword(true)
      SetisRegistered(false)
    }

    
  }

  return (
    <div className="register rounded-2xl border-white border-2">
      <FormContainer defaultValues={form} onSuccess={data => handleSubmit(data)}
                   FormProps={{
                     'aria-autocomplete': 'none',
                     autoComplete: 'new-password'
                   }}>
      <TextFieldElement
        required
        autoComplete={'new-password'}
        margin={'normal'}
        fullWidth={true}
        label={'Name'}
        name={'name'}
        color='primary'
        
      /><br />
      <TextFieldElement
        required
        type={'email'}
        margin={'normal'}
        fullWidth={true}
        label={'Email'}
        name={'email'}
                   
      /><br />
      <PasswordElement 
                       label={'Password'}
                       required
                       name={'password'}
                       margin={'normal'}
                       fullWidth={true}
                        
      /><br />
      <PasswordRepeatElement passwordFieldName={'password'}
                             name={'password-repeat'}
                             margin={'normal'}
                             fullWidth={true}
                             label={'Repeat Password'}
                             required
                           
      /><br />
      {strongPassword && <Alert severity="error">Enter min 8 letter password, with at least a symbol, upper and lower case letters and a number!</Alert>}
      <CheckboxElement name={'agree'} label={'Agree'} required /><br />
      <Button className='my-5' type={'submit'} color={'primary'} variant={'contained'}>Submit</Button>
    </FormContainer>
    {isRegistered && 
    <Alert severity="success">You have registered successfully please
      <Button className='register--btn' onClick={() => regNavigate('/login')}>login</Button>
    </Alert>}
    </div>
  )

}

export default Register