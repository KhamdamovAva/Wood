import React from 'react'
import arrow from '../../../assets/icons/arrow_icon.svg'

function OutLineBtn({ children }) {
  return (
    <button className='border-2 border-[#D8A47A] p-[22px]  text-[16px] w-[170px] h-[60px] rounded-[5px] flex items-center justify-center '>{children} <img src={arrow} alt="icon"
      className='pt-[4px] pl-[10px]' /></button>
  )
}

export default OutLineBtn
