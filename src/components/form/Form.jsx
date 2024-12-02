import React from 'react'
import BigOrangeBtn from '../buttons/BigOrangeBtn/BigOrangeBtn'

function Form({ bid, phone, paragraph1, paragraph2, blackTitle, title, subtitle }) {
  return (
    <>
      <div className='Container'>
        <div className="wrapper pt-[110px] pb-[80px]">
          <div>
            <h3 className='uppercase text-[#222222] text-[36px] font-light'>{blackTitle}</h3>
            <h3 className='uppercase text-[#F8F3EF] text-[36px] font-light'>{title}</h3>
            <p className='uppercase text-[#ACA095] text-[36px] font-light ml-[80px]'>{subtitle}</p>
          </div>
          <div className='w-[330px] mt-[40px] mb-[50px] text-[white] '>
            <p className='mb-[20px]'>{paragraph1}</p>
            <p className='w-[270px]'>{paragraph2}</p>
          </div>
          <form action="#" className='flex justify-between mb-[20px]'>
            <div className='text-[#F8F3EF] flex items-end space-x-7'>
              <div>
                <p className='mb-[10px] '>Ваше имя</p>
                <input className='w-[250px] p-[10px] rounded-[5px] text-[black] h-[58px]' type="text" name="username" placeholder='Анастасия' />
              </div>
              <div>
                <p className='mb-[10px] '>Ваш телефон</p>
                <input className='w-[250px] p-[10px] rounded-[5px] text-[black] h-[58px]' type="tel" name="userphone" placeholder='+7 (999) 999 99-99' />
              </div>
              <BigOrangeBtn>Оставить заявку</BigOrangeBtn>
            </div>
            <div className='text-[#F8F3EF] w-[240px]'>
              <h4 className='text-[18px] font-light mb-[20px]'>{bid}</h4>
              <a href="#">{phone}</a>
            </div>
          </form>
          <p className='text-[13px] text-[#E6E6E6] opacity-60'>Нажимая на кнопку “Оставить заявку”, вы соглашаетесь с Политикой конфиденциальности данных</p>
        </div>

      </div>
    </>
  )
}

export default Form
