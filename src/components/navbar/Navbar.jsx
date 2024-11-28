import React from 'react'
import ambarIcon from '../../assets/icons/ambarIcon.svg'
import OrangeBtn from '../buttons/OrangeBtn/OrangeBtn'
function Navbar() {
  return (
    <nav className='flex items-center justify-between text-[14px] font-medium mb-[26px]'>
      <a href="#"><img src={ambarIcon} alt="Logotype" /></a>
      <ul className='flex space-x-[44px] text-[#222222]'>
        <li><a href="#">Каталог</a></li>
        <li><a href="#">Об амбарной доске</a></li>
        <li><a href="#">Наши работы</a></li>
        <li><a href="#">О нас</a></li>
        <li><a href="#">Блог</a></li>
        <li><a href="#">Контакты</a></li>
      </ul>
      <div className='flex items-center space-x-6'>
        <a href="#" className='w-[172px] text-[12px] block'>+7 (929) 590 82-87 <span className='block text-[#C0C0C0]'>Москва и Санкт-Петербург</span></a>
        <OrangeBtn>Консультация</OrangeBtn>
      </div>
    </nav>
  )
}

export default Navbar
