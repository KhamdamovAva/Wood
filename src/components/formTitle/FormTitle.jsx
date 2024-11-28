import React from 'react'

function FormTitle({ title, subtitle }) {
  return (
    <>
      <h3 className='uppercase text-[#F8F3EF] text-[36px] font-light'>{title}</h3>
      <p className='uppercase text-[#ACA095] text-[36px] font-light ml-[80px]'>{subtitle}</p>
    </>
  )
}

export default FormTitle
