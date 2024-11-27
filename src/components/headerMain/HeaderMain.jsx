import React from 'react'
import headerImg from '../../assets/images/headerImg.png'
function HeaderMain() {
  return (
    <div className='min-h-[585px] bg-cover bg-center bg-no-repeat headerImage' style={{
      backgroundImage: `url(${headerImg})`,
    }}>

    </div>
  )
}

export default HeaderMain
