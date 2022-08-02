import React from 'react'
import './LandingPage.css'
import Footer from './Footer'
import { Button } from '@mui/material';

function LandingPage() {
  return (
    <div className='LandingPage grid grid-cols-2'>

        <div className='brand'></div>
        <div className='auth text-center lg:pr-40 lg:pl-20'>
            <h3 className='text-4xl font-bold mb-4 text-teal-500'>
            Stay Connected With Your Co-workers
            </h3>
            <Button className="signupBtn sbtn">Sign Up With Google</Button>
            <Button className="signupBtn sbtn">Sign Up With E-mail</Button>
            <hr />
            <Button className='signInBtn sbtn' >Sign In</Button>
        </div>
        <Footer />

    </div>
  )
}

export default LandingPage