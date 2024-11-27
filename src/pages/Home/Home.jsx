import React from 'react'
import Header from '../../components/header/Header'
import OutLineBtn from '../../components/buttons/OutLineBtn/OutLineBtn'


function Home() {
  return (
    <>
      <Header />
      <main>
        <section className='Container pt-[70px]'>
          <div>
            <h4>Категории</h4>
            <h4>Товаров</h4>
          </div>
          <OutLineBtn>Все товары</OutLineBtn>
        </section>
      </main>

    </>
  )
}

export default Home
