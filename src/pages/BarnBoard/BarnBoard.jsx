import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import HeaderMain from '../../components/headerMain/HeaderMain'
import BarnBoardImg from '../../assets/images/barnBoardImg.png'
import Form from '../../components/form/Form'
import headerForm from '../../assets/images/formImage.png'
import Footer from '../../components/footer/Footer'
import { data } from '../../Data/aboutBoardData'
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
        <section>
           <div className="Container">
            <div className='grid grid-cols-4 mt-[60px] mb-[60px]'>
              {data.map((item) => (
                <div key={item.id} className='mb-[60px]'>
                    <img src={item.img} alt="image" className='w-[278px] h-[278px]'/>
                    <p className='text-[18px] text-[#222222] w-[240px] py-[16px] '>{item.title}</p>
                    <p className='text-[#D8A47A] text-[18px] font-bold pb-[16px]'>{item.price}</p>
                    <div className='flex space-x-[6px]'>
                       <button className='bg-[#CC9872] w-[105px] h-[43px] text-white rounded-[5px] font-bold'>{item.btn1}</button>
                       <button className='border border-[#CC9872] rounded-[5px] w-[136px] h-[43px] font-medium'>{item.btn2}</button>
                    </div>
                </div>
              ))}
            </div>
           </div>
        </section>
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
