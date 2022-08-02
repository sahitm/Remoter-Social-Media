import { TextField } from '@mui/material'
import React from 'react'
import './Register.css'

function Register() {

  return (
    <div className='register' >
        <TextField className='bg-stone-300 register--input' label="Name" variant="outlined" />
        <TextField className='bg-stone-300 register--input' label="E-mail" variant="outlined" />
        <TextField className='bg-stone-300 register--input' label="Password" variant="outlined" />
        <TextField className='bg-stone-300 register--input' label="ConfirmPassword" variant="outlined" />
    </div>
  )
}

export default Register