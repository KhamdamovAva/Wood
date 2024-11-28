import React from 'react'
import FormTitle from '../formTitle/FormTitle'
import BigOrangeBtn from '../buttons/BigOrangeBtn/BigOrangeBtn'

function Form() {
  return (
    <>
      <div className='Container'>
        <div className='pt-[100px] mb-[88px]'>
          <FormTitle title="есть вопросы?" subtitle="с радостью ответим на них!" />
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
            <h4 className='text-[18px] font-light mb-[20px]'>Оставьте заявку или позвоните нам по номеру:</h4>
            <a href="#">+7 (929) 590 82-87</a>
          </div>
        </form>
        <p className='text-[13px] text-[#E6E6E6] opacity-60'>Нажимая на кнопку “Оставить заявку”, вы соглашаетесь с Политикой конфиденциальности данных</p>
      </div>
    </>
  )
}

export default Form
