import React from 'react'
import Sidebar from './D-components/Sidebar'
import Feed from './D-components/Feed'
import Trending from './D-components/Trending'
import './Home.css'

function Home() {
  return (
    <div className='Home'>
      <Sidebar />
      <Feed />
      <Trending />
    </div>
  )
}

export default Home