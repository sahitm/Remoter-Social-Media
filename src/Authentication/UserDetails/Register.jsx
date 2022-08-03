import { Button, TextField } from '@mui/material'
import React, { useRef, useState } from 'react'
import './Register.css'
import {FormContainer, TextFieldElement, PasswordElement,PasswordRepeatElement,CheckboxElement} from 'react-hook-form-mui'



function Register() {

  const form = {
    agree: false
  }
  

  function handleSubmit(object){
    localStorage.setItem("name", object.name);
    localStorage.setItem("email", object.email);
    localStorage.setItem("password",object.password);
    console.log("Saved in Local Storage");
  }

  return (
    <div className="register">
      <FormContainer defaultValues={form} onSuccess={data => handleSubmit(data)}
                   FormProps={{
                     'aria-autocomplete': 'none',
                     autoComplete: 'new-password'
                   }}>
      <TextFieldElement
        required
        autoComplete={'new-password'}
        margin={'dense'}
        label={'Name'}
        name={'name'}
        color='primary'
        
      /><br />
      <TextFieldElement
        required
        type={'email'}
        margin={'dense'}
        label={'Email'}
        name={'email'}
                   
      /><br />
      <PasswordElement margin={'dense'}
                       label={'Password'}
                       required
                       name={'password'}
                        
      /><br />
      <PasswordRepeatElement passwordFieldName={'password'}
                             name={'password-repeat'}
                             margin={'dense'}
                             label={'Repeat Password'}
                             required
                           
      /><br />
      <CheckboxElement name={'agree'} label={'Agree'} required /><br />
      <Button type={'submit'} color={'primary'} variant={'contained'}>Submit</Button>
    </FormContainer>
    </div>
  )

}

export default Register