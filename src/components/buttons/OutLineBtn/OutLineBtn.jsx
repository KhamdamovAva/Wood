import React from 'react'
import arrow from '../../../assets/icons/arrow_icon.svg'

function OutLineBtn({ children }) {
  return (
    <button className='border-2 border-[#D8A47A] py-[15px] px-[25px] w-[170px] h-[60px] rounded-[5px] flex items-center text-center'>{children} <img src={arrow} alt="icon" className='pt-[2px] pl-[25px]'/></button>
  )
}

export default OutLineBtn