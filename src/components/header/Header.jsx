import React from 'react'
import Navbar from '../navbar/Navbar'
import HeaderMain from '../headerMain/HeaderMain'

function Header() {
  return (
    <>
      <header>
        <div className='headerContainer'>
          <Navbar />
          <HeaderMain />
        </div>
      </header>

    </>
  )
}

export default Header
