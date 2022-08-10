import React from 'react'
import Sidebar from './D-components/Sidebar'
import Feed from './D-components/Feed'
import './Home.css'

function Home() {
  return (
    <div className='Home'>
      <Sidebar />
      <Feed />
    </div>
  )
}

export default Home