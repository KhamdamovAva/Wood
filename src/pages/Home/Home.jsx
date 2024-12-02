import React, { useState } from 'react'
import Header from "../../components/header/Header";
import OutLineBtn from "../../components/buttons/OutLineBtn/OutLineBtn";
import arrowRight from "../../assets/icons/arrowRight.svg";
import arrowLeft from "../../assets/icons/arrowLeft.svg";
import Form from "../../components/form/Form";
import formImage from "../../assets/images/formImage.png";
import FormTitle from "../../components/formTitle/FormTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { slides } from "../../Data/projectSlider";
import Category from '../../components/category/Category'
import img_prev from '../../assets/images/img_prev.png'
import Location from '../../components/Location/Location';
import cooperationBg from '../../assets/images/cooperationBg.png'
import Footer from '../../components/footer/Footer';

function Home() {
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <Header />
      <main>
        <section className="Container ">
          <div className="pt-[70px] flex justify-between items-center">
            <div className="uppercase text-[36px] w-[270px]">
              <div className="flex">
                <h4 className="text-[#222]">Категории</h4>
                <span className="text-[#D8A47A] text-[11px]">9 категорий</span>
              </div>
              <h4 className="text-[#aca095] text-end pr-[30px]">Товаров</h4>
            </div>
            <OutLineBtn>Все товары</OutLineBtn>
          </div>
          <Category />
        </section>
        <section
          className="min-h-[562px] bg-cover bg-center  bg-no-repeat mb-[60px] "
          style={{ backgroundImage: `url(${formImage})` }}>
          <Form bid="Оставьте заявку или позвоните нам по номеру:" phone="+7 (929) 590 82-87" title="есть вопросы?" subtitle="с радостью ответим на них!" />
        </section>

        <section className="Container min-h-[700px]">
          <div className="flex justify-between items-end mb-[50px]">
            <div>
              <FormTitle blackTitle="реализовали" subtitle="более 500 проектов" />
            </div>
            <div>
              <OutLineBtn>Все проекты</OutLineBtn>
            </div>
          </div>
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{
                prevEl: ".buttonPrev",
                nextEl: ".buttonNext"
              }}
              pagination={{
                clickable: true,
                el: ".custom-pagination",
              }}
              spaceBetween={30}
              slidesPerView={2}
              loop={true}>
              {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="relative">
                    <img className="w-full" src={slide.image} alt={slide.alt} />
                    <div className="absolute bottom-10 left-12">
                      <h3 className="text-lg text-[#F8F3EF] font-bold mb-5">{slide.title}</h3>
                      <button href="#" className="cursor-pointer text-[#CF9B74] border-b border-[#CF9B74] ">
                        {slide.link}
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="custom-pagination flex justify-center mt-[40px] space-x-[10px]">
              <div className="swiper-pagination-bullet-active w-[10px] h-[10px] bg-[#E2AE80]"></div>
            </div>
            <div className="relative bottom-[24px] ">

              <div className="buttonPrev cursor-pointer w-10 h-10 bg-[#CF9B74] p-[10px] rounded-[50%] absolute left-[480px] ">
                <img src={arrowLeft} alt="Prev" className="w-full h-full" />
              </div>
              <div className="buttonNext cursor-pointer w-10 h-10 bg-[#CF9B74] p-[10px] rounded-[50%] right-[480px] absolute ">
                <img src={arrowRight} alt="Next" className="w-full h-full" />
              </div>
            </div>

          </div>
        </section>

        <section className='min-h-[662px] mb-[70px]'>
          <div className='Container mx-auto px-4'>
            <FormTitle blackTitle="СМОТРИТЕ НАС" subtitle="на YOUTUBE" />
            <div className='min-h-[531px] flex justify-center items-center'>
              {/* Видеоплеер */}
              <div className='relative w-full max-w-full h-[531px] overflow-hidden rounded-[40px] shadow-lg aspect-w-16 aspect-h-9 group'>
                {/* Фоновое изображение с кнопкой воспроизведения */}
                <img
                  src={img_prev}
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
        <section className="min-h-[562px] bg-cover bg-center  bg-no-repeat mb-[60px]"
          style={{ backgroundImage: `url(${cooperationBg})` }}>
          <Form paragraph1="Если вы дизайнер интерьера, архитектор или дилер, то для вас специальные условия." paragraph2="Оставляйте заявку и мы вам подробно расскажем по телефону." title="приглашаем" subtitle="к сотрудничеству!" />
        </section>
        <section className='min-h-[822px]'>
          <div className='Container'>
            <Location />
          </div>
        </section>
      </main>
      <footer className='bg-[#34353D] min-h-[367px] p-[60px]'>
        <Footer />
      </footer>
    </>
  );
}

export default Home;
