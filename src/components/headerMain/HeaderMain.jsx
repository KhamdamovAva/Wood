import React from 'react'
import { threeIcons } from '../../Data/headerMain'
import BigOrangeBtn from '../buttons/BigOrangeBtn/BigOrangeBtn.jsx'
function HeaderMain({ title, subtitle, downTitle }) {
  return (
    <div className='min-h-[585px] flex items-top justify-center' >
      <div className='text-[#F8F3EF] pt-[60px] w-[492px]  relative'>
        <div className='uppercase text-[42px] font-light text-center mb-[68px] leading-[125%]'>
          <p >{title}</p>
          <p className='text-[#E2AE80]'>{subtitle}</p>
          <p >{downTitle}</p>
        </div>
        <p className='w-[161px] h-[161px] text-center text-[17px] italic text-[#E2AE80] absolute right-[-58%] top-[80px] border border-[#E2AE80] rounded-[50%] p-[40px]'>
          Красота, созданная природой </p>
        <div className=' flex items-center justify-between mb-[54px]'>
          {threeIcons.map((item) => (
            <div className='w-[130px] text-center' key={item.id} >
              <img className='inline-block mb-[6px]' src={item.image} alt={item.alt} />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className='flex space-x-4'>
          <BigOrangeBtn>Перейти в каталог</BigOrangeBtn>
          <button className='w-[250px] h-[58px] rounded-[5px] border-[2px] border-[#E2AE80]'>Рассчитать стоимость</button>
        </div>
      </div>
    </div >
  )
}

export default HeaderMain
