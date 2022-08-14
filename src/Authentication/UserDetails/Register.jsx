import { Button, TextField } from '@mui/material'
import React, { useContext, useRef, useState } from 'react'
import './Register.css'
import {FormContainer, TextFieldElement, PasswordElement,PasswordRepeatElement,CheckboxElement} from 'react-hook-form-mui'
import { Alert } from '@mui/material';
import {useNavigate} from "react-router-dom"
import Users from '../../helpers/Users';
import {Context} from '../../Context/Context' 



function Register() {

  const regNavigate = useNavigate();
  const {userData , SetUserData} = useContext(Context)

  const [strongPassword,SetStrongPassword] = useState(false)
  const [strongUsername,SetStrongUsername] = useState(false)
  const [isRegistered,SetisRegistered] = useState(false)
  const [isUnique,SetisUnique] = useState(false)

  const form = {
    agree: false
  }

  function handleSubmit(object){

    const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/

    const regexUsername = /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/

    console.log(object)
    console.log(object.password)
    console.log(object.name)
    console.log(regex.test(object.password))
    console.log(regexUsername.test(object.name))

    if(regex.test(object.password)){
      SetStrongPassword(false)
      if(regexUsername.test(object.name)){
        SetStrongUsername(false)
      
      

        if(userData == ''){

          localStorage.setItem('usersList',JSON.stringify([...Users]))
          const existingUsers = JSON.parse(localStorage.getItem('usersList'))

          let newUsers = {
            name: object.name,
            email: object.email,
            password: object.password
          }

          localStorage.setItem('usersList',JSON.stringify([...existingUsers,newUsers]))

          SetUserData(JSON.parse(localStorage.getItem("usersList")))
          SetisRegistered(true)

        }else{

          let newUsers = {
            name: object.name,
            email: object.email,
            password: object.password
          }

          if(userData.every(post=> post.name !== newUsers['name'])){
            
            SetisUnique(false)
            localStorage.setItem("usersList", JSON.stringify([...userData, newUsers]))
            SetUserData(JSON.parse(localStorage.getItem("usersList")))
            SetisRegistered(true)
          }else{
            SetisUnique(true)
          }
        }
      }else{
        SetStrongUsername(true)
      }
      
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
        label={'UserName'}
        name={'name'}
        color='primary'
        
      /><br />
      {strongUsername && <Alert severity="error">Enter username that contains lowercase letters a-z, uppercase letters A-Z, and numbers 0-9</Alert>}
      {isUnique && <Alert severity="error">You already have an account </Alert>}
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