import React from 'react'
import ambarIcon from '../../assets/icons/ambarIcon.svg'
function Navbar() {
  return (
    <nav className='flex items-center justify-between text-[14px] font-medium'>
      <img src={ambarIcon} alt="Logotype" />
      <ul className='flex space-x-[44px]'>
        <li><a href="#">Каталог</a></li>
        <li><a href="#">Об амбарной доске</a></li>
        <li><a href="#">Наши работы</a></li>
        <li><a href="#">О нас</a></li>
        <li><a href="#">Блог</a></li>
        <li><a href="#">Контакты</a></li>
      </ul>
      <div className='flex '>
        <a href="#" className='w-[172px] text-[12px] block'>+7 (929) 590 82-87<br></br> Москва и Санкт-Петербург</a>
        <button>Консультация</button>
      </div>
    </nav>
  )
}

export default Navbar
