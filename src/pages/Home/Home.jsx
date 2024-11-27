import React from 'react'
import Header from '../../components/header/Header'
import OutLineBtn from '../../components/buttons/OutLineBtn/OutLineBtn'


function Home() {
  return (
    <>
      <Header />
      <main>
        <section className='Container '>
          <div className='pt-[70px] flex justify-between items-center'>
            <div className='uppercase text-[36px] w-[270px]'>
              <div className='flex'>
                <h4 className='text-[#222]'>Категории</h4>
                <span className='text-[#D8A47A] text-[11px]'>9 категорий</span>
              </div>
              <h4 className='text-[#aca095] text-end pr-[30px]'>Товаров</h4>
            </div>
              <OutLineBtn>Все товары</OutLineBtn>
          </div>
        </section>
      </main>

    </>
  )
}

export default Home
