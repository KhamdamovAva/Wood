import React, { useState } from 'react'
import Header from '../../components/header/Header'
import OutLineBtn from '../../components/buttons/OutLineBtn/OutLineBtn'
import Form from '../../components/form/Form'
import formImage from '../../assets/images/formImage.png'
import Category from '../../components/category/Category'
import FormTitle from '../../components/formTitle/FormTitle'
import img_prev from '../../assets/images/img_prev.png'


function Home() {
  const [playing, setPlaying] = useState(false);

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
          <Category />
        </section>
        <section className='min-h-[562px] bg-cover bg-center  bg-no-repeat ' style={{ backgroundImage: `url(${formImage})` }} >
          <Form />
        </section>
        <section className='min-h-[662px]'>
  <div className='container mx-auto px-4'>
    <FormTitle title="СМОТРИТЕ НАС" subtitle="на YOUTUBE" />
    <div className='min-h-[531px] flex justify-center items-center'>
      {/* Видеоплеер */}
      <div className='relative w-full max-w-full h-[531px] overflow-hidden rounded-[40px] shadow-lg aspect-w-16 aspect-h-9 group'>
        {/* Фоновое изображение с кнопкой воспроизведения */}
        <img
          src={img_prev} // Замените на путь к вашему изображению
          alt="Видео превью"
          className="w-full h-full object-cover"
        />
        <button
          className="absolute inset-0 flex justify-center items-center bg-black/50 hover:bg-black/30 transition-opacity duration-300"
          onClick={() => setPlaying(true)}
        >
          <div className="w-48 h-48 bg-white rounded-full flex justify-center items-center shadow-xl border-[30px] border-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-16 h-16 text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.752 11.168l-5.197-3.074A1 1 0 008 9v6a1 1 0 001.555.832l5.197-3.074a1 1 0 000-1.664z"
              />
            </svg>
          </div>
        </button>
        {/* Видео (показать при воспроизведении) */}
        {playing && (
          <video
            src="https://pagedone.io/asset/uploads/1705298724.mp4"
            controls
            autoPlay
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </div>
    </div>
  </div>
</section>


      </main >

    </>
  )
}

export default Home
