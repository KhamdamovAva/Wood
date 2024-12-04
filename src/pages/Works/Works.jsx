import React from 'react'
import HeaderSecond from '../../components/headerSecond/HeaderSecond'
import { works, cards } from '../../Data/worksData'
import Form from '../../components/form/Form'
import headerForm from '../../assets/images/formImage.png'
import Footer from '../../components/footer/Footer'
function Works() {
  return (
    <>
      <header>
        <div className="headerContainer">
          <HeaderSecond />
        </div>
      </header>
      <main>
        <section>
          <div className="Container">
            <p className='text-[20px] font-medium text-[#C38F65]'>ФИЛЬТРЫ:</p>
            <div className='flex mt-[14px]'>
              {works.map((item) => (
                <div key={item.id} className='items-center flex text-[16px] font-medium'>
                  <button className='border border-[#D8A47A] py-[12px] px-[28px]  h-[74px] rounded-[5px] mr-[28px]'>{item.btn}</button>
                </div>
              ))}
            </div>
            <div className='grid grid-cols-3 mt-[40px]'>
              {cards.map((item) => (
                <div
                  key={item.id}
                  style={{
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  className="h-[377px] w-[380px] py-[32px] px-[37px] mb-[20px] relative"
                >
                  {/* Полупрозрачный чёрный слой */}
                  <div className="absolute inset-0 bg-black opacity-20 rounded-[30px]"></div>

                  {/* Содержимое карточки */}
                  <div className='relative mt-[240px] h-[70px]'>
                    <p className='text-white text-[20px] mb-[15px]'>{item.title}</p>
                    <button href="#" className="cursor-pointer text-[#CF9B74] border-b border-[#CF9B74] mt-auto">
                      Подробнее
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
        <section style={{ backgroundImage: `url(${headerForm})` }}>
          <Form bid="Оставьте заявку или позвоните нам по номеру:" phone="+7 (929) 590 82-87" title="Хотите так же?" subtitle="оставьте заявку!" />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Works
