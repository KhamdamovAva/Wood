import React from 'react'

function BigOrangeBtn({ children }) {
  return (
    <button className='bg-gradient-to-r from-[#e2ae80] to-[#cc9872] text-white text-[18px] font-medium rounded-[5px] w-[250px] h-[58px]'>{children}</button>
  )
}

export default BigOrangeBtn
