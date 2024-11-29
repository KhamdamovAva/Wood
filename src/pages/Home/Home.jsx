import React from "react";
import Header from "../../components/header/Header";
import OutLineBtn from "../../components/buttons/OutLineBtn/OutLineBtn";
import arrow from "../../assets/icons/catygories_arrow_icon.png";
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


function Home() {
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
          className="min-h-[562px] bg-cover bg-center  bg-no-repeat mb-[60px]"
          style={{ backgroundImage: `url(${formImage})` }}>
          <Form />
        </section>
        <section className="Container h-screen">
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
      </main>
    </>
  );
}

export default Home;
