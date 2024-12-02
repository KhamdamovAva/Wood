import React from 'react'
import ambarIcon from '../../assets/icons/ambarIcon.svg'
import OrangeBtn from '../buttons/OrangeBtn/OrangeBtn'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav className='flex items-center justify-between text-[14px] font-medium mb-[26px]'>
      <a href="#"><img src={ambarIcon} alt="Logotype" /></a>
      <ul className='flex space-x-[44px] text-[#222222]'>
        <li><Link to="/catalog">Каталог</Link></li>
        <li><Link to="/about-board">Об амбарной доске</Link></li>
        <li><Link to="/works">Наши работы</Link></li>
        <li><Link to="/about-us">О нас</Link></li>
        <li><Link to="/blog">Блог</Link></li>
        <li><Link to="/contacts">Контакты</Link></li>
      </ul>
      <div className='flex items-center space-x-6'>
        <a href="#" className='w-[172px] text-[12px] block'>+7 (929) 590 82-87 <span className='block text-[#C0C0C0]'>Москва и Санкт-Петербург</span></a>
        <OrangeBtn>Консультация</OrangeBtn>
      </div>
    </nav>
  )
}

export default Navbar
