import React from 'react'
import Navbar from '../navbar/Navbar'
import headerSecondBG from '../../assets/images/secondHeaderBG.png'
import { Link } from 'react-router-dom'
function HeaderSecond() {
  return (
    <>
      <Navbar />
      <div className='min-h-[390px] bg-cover bg-no-repeat mb-[50px]' style={{ backgroundImage: `url(${headerSecondBG})` }}>
        <div className="Container text-white">
          <nav className='w-[270px] pt-[35px] mb-[90px]'>
            <ul className='flex items-center space-x-2'>
              <li className='ml-[10px] mr-[30px]'><Link to="/">Назад</Link></li>
              <li><Link to="/">Главная /</Link></li>
              <li><Link to="/works">Наши работы</Link></li>
            </ul>
          </nav>
          <div className='text-center'>
            <h3 className='text-[43px] font-light uppercase'>Наши работы</h3>
          </div>
        </div>
      </div >
    </>

  )
}

export default HeaderSecond
