import React from 'react'
import Header from '../../components/header/Header'
import OutLineBtn from '../../components/buttons/OutLineBtn/OutLineBtn'
import arrow from '../../assets/icons/catygories_arrow_icon.png'
import Form from '../../components/form/Form'
import formImage from '../../assets/images/formImage.png'


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
          <div className='w-[100%] flex space-x-[30px]'>
            <div className="mt-[40px] mb-[50px] ">

              <div className="max-w-[100%] bg-[url('./src/assets/images/Category_img1.png')] bg-cover bg-center min-h-[317px] flex items-start rounded-[20px]">
                <div className="mt-auto p-[25px] w-full flex justify-between">
                  <p className="text-start font-bold text-[22px] text-white w-[180px]">Амбарная доска для стен</p>
                  <button className="bg-[#E2AE80] w-[30px] h-[30px] flex items-center justify-center rounded-full mt-[40px]">
                    <img className="w-[10px]" src={arrow} alt="arrow" />
                  </button>
                </div>
              </div>
              <div className="max-w-full flex gap-4 mt-4">
                <div className='w-[100%]'>
                  <div className="max-w-[100%] grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-[url('./src/assets/images/Category_img5.png')] bg-cover bg-center min-h-[150px] flex items-start rounded-[20px]">
                      <div className="p-[15px] flex justify-between w-full mt-[50px]">
                        <p className="text-start font-bold text-[22px] text-white w-[180px]">Мебель <br /> из старых лодок</p>
                        <button className="bg-[#E2AE80] w-[30px] h-[30px] flex items-center justify-center rounded-full mt-[40px]">
                          <img className="w-[10px]" src={arrow} alt="arrow" />
                        </button>
                      </div>
                    </div>

                    <div className="bg-[url('./src/assets/images/Category_img6.png')] bg-cover bg-center min-h-[150px] flex items-start rounded-[20px]">
                      <div className="p-[15px] flex justify-between w-full mt-[50px]">
                        <p className="text-start font-bold text-[22px] text-white mt-[40px]">Зеркала</p>
                        <button className="bg-[#E2AE80] w-[30px] h-[30px] flex items-center justify-center rounded-full mt-[40px]">
                          <img className="w-[10px]" src={arrow} alt="arrow" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="max-w-[100%] grid grid-cols-2 gap-4">
                    <div className="bg-[url('./src/assets/images/Category_img7.png')] bg-cover bg-center min-h-[150px] flex items-start rounded-[20px]">
                      <div className="p-[25px] flex justify-between w-full mt-[50px]">
                        <p className="text-start font-bold text-[22px] text-white">Ковры (винтажные)</p>
                        <button className="bg-[#E2AE80] w-[30px] h-[30px] flex items-center justify-center rounded-full mt-[40px]">
                          <img className="w-[10px]" src={arrow} alt="arrow" />
                        </button>
                      </div>
                    </div>

                    <div className="bg-[url('./src/assets/images/Category_img8.png')] bg-cover bg-center min-h-[150px] flex items-start rounded-[20px]">
                      <div className="p-[25px] flex justify-between w-full mt-[50px]">
                        <p className="text-start font-bold text-[22px] text-white">Амбарная доска для стен</p>
                        <button className="bg-[#E2AE80] w-[30px] h-[30px] flex items-center justify-center rounded-full mt-[40px]">
                          <img className="w-[10px]" src={arrow} alt="arrow" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[40px] mb-[50px] ">

      
              <div className="max-w-full flex gap-4 ">
                <div className='w-[100%]'>
                  <div className="max-w-[100%] grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-[url('./src/assets/images/Category_img2.png')] bg-cover bg-center min-h-[150px] flex items-start rounded-[20px]">
                      <div className="p-[15px] flex justify-between w-full mt-[50px]">
                        <p className="text-start font-bold text-[22px] text-white w-[180px]">Старая <br /> половая доска</p>
                        <button className="bg-[#E2AE80] w-[30px] h-[30px] flex items-center justify-center rounded-full mt-[40px]">
                          <img className="w-[10px]" src={arrow} alt="arrow" />
                        </button>
                      </div>
                    </div>

                    <div className="bg-[url('./src/assets/images/Category_img3.png')] bg-cover bg-center min-h-[150px] flex items-start rounded-[20px]">
                      <div className="p-[15px] flex justify-between w-full mt-[50px]">
                        <p className="text-start font-bold text-[22px] text-white mt-[40px]">Двери</p>
                        <button className="bg-[#E2AE80] w-[30px] h-[30px] flex items-center justify-center rounded-full mt-[40px]">
                          <img className="w-[10px]" src={arrow} alt="arrow" />
                        </button>
                      </div>
                    </div>
                  </div>

                      <div className="max-w-[100%] grid grid-cols-1 gap-4">
                        <div className="bg-[url('./src/assets/images/Category_img4.png')] bg-cover bg-center min-h-[150px] flex items-start rounded-[20px]">
                          <div className="p-[25px] flex justify-between w-full mt-[50px]">
                            <p className="text-start font-bold text-[22px] text-white w-[160px]">Старые балки и фальшбалки</p>
                            <button className="bg-[#E2AE80] w-[30px] h-[30px] flex items-center justify-center rounded-full mt-[40px]">
                              <img className="w-[10px]" src={arrow} alt="arrow" />
                            </button>
                          </div>
                        </div>
                  </div>
              <div className="max-w-[100%] bg-[url('./src/assets/images/Category_img9.png')] bg-cover bg-center min-h-[317px] flex items-start rounded-[20px] mt-4">
                <div className="mt-auto p-[25px] w-full flex justify-between">
                  <p className="text-start font-bold text-[22px] text-white w-[180px]">Амбарная доска для стен</p>
                  <button className="bg-[#E2AE80] w-[30px] h-[30px] flex items-center justify-center rounded-full mt-[40px]">
                    <img className="w-[10px]" src={arrow} alt="arrow" />
                  </button>
                </div>
              </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='min-h-[562px] bg-cover bg-center  bg-no-repeat ' style={{ backgroundImage: `url(${formImage})` }} >
          <Form />
        </section>
      </main >

    </>
  )
}

export default Home
