import React from 'react'

function FormTitle({ blackTitle, title, subtitle }) {
  return (
    <>
      <h3 className='uppercase text-[#222222] text-[36px] font-light'>{blackTitle}</h3>
      <h3 className='uppercase text-[#F8F3EF] text-[36px] font-light'>{title}</h3>
      <p className='uppercase text-[#ACA095] text-[36px] font-light ml-[80px]'>{subtitle}</p>
    </>
  )
}

export default FormTitle
