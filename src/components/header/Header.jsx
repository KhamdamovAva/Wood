import React from 'react'
import Navbar from '../navbar/Navbar'
import HeaderMain from '../headerMain/HeaderMain'
import headerImg from '../../assets/images/headerImg.png'

function Header() {
  return (
    <>
      <header>
        <div className='headerContainer '>
          <Navbar />
          <div className='bg-cover bg-center bg-no-repeat' style={{
            backgroundImage: `url(${headerImg})`,
          }}>
            <HeaderMain title="Качественные" subtitle="амбарные доски" downTitle="от производителя" />
          </div>
        </div>
      </header>

    </>
  )
}

export default Header
