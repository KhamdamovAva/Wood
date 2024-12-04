import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import HeaderMain from '../../components/headerMain/HeaderMain'
import BarnBoardImg from '../../assets/images/barnBoardImg.png'
import Form from '../../components/form/Form'
import headerForm from '../../assets/images/formImage.png'
import Footer from '../../components/footer/Footer'

function BarnBoard() {
  return (
    <>
      <header className='mb-[40px]'>
        <div className="headerContainer">
          <Navbar />
          <div className='bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${BarnBoardImg})` }}>
            <HeaderMain title="Амбарная доска" subtitle='для стен' />
          </div>
        </div>
      </header >
      <main>
        <section style={{ backgroundImage: `url(${headerForm})` }}>
          <Form bid="Оставьте заявку или позвоните нам по номеру:" phone="+7 (929) 590 82-87" title="Не нашли, что искали?" subtitle="оставьте заявку!" />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default BarnBoard
