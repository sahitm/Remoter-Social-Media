import React from 'react'
import './SBoption.css'

function SBoption({Icon,text}) {
  return (
    <div className='SBoption'>
        <Icon className='materialIcon'/>
        <h2>{text}</h2>
    </div>
  )
}

export default SBoption