import React, { useState } from 'react';
import FormTitle from '../formTitle/FormTitle';
import OutLineBigBtn from '../buttons/OutlineBigBtn/OutlineBigBtn';
import whatsapp from '../../assets/icons/whatsapp.svg';
import vk from '../../assets/icons/vk.svg';
import youtube from '../../assets/icons/youtube.svg';

function Location() {
    const [activeCity, setActiveCity] = useState("Москва");

    const locations = {
        Москва: {
            address: "Москва ул. Тимирязевская, д. 1, стр. 2",
            phone: "+7 (929) 590 82-87",
            mapSrc: "https://yandex.ru/map-widget/v1/?ll=37.568722%2C55.806919&z=16&l=map"
        },
        "Санкт-Петербург": {
            address: "Санкт-Петербург, Невский проспект, д. 10",
            phone: "+7 (929) 123 45-67",
            mapSrc: "https://yandex.ru/map-widget/v1/?ll=30.315257%2C59.936927&z=16&l=map"
        },
    };

    return (
        <>
            {/* Заголовок и кнопки */}
            <div className="flex items-center justify-between">
                <div>
                    <FormTitle blackTitle="работаем" subtitle="по всей россии" />
                </div>
                <div className="flex space-x-[15px]">
                    <p className="w-[125px] text-[#222222]">Выберите интересующий шоурум:</p>
                    {/* Кнопка Москва */}
                    <button
                        className={`relative bg-gradient-to-r from-[#e2ae80] to-[#cc9872] text-white text-[18px] font-medium rounded-[5px] w-[180px] h-[58px] ${
                            activeCity === "Москва" ? "after:content-[''] after:absolute after:top-[100px] after:left-[50%] after:translate-x-[-50%] after:w-0 after:h-0 after:border-l-[10px] after:border-r-[10px] after:border-b-[10px] after:border-l-transparent after:border-r-transparent after:border-b-[#e2ae80]" : ""
                        }`}
                        onClick={() => setActiveCity("Москва")}
                    >
                        Москва
                    </button>
                    {/* Кнопка Санкт-Петербург */}
                    <button
                        className={`relative border border-[#CC9872] text-[#222222] text-[18px] font-medium rounded-[5px] w-[180px] h-[58px] ${
                            activeCity === "Санкт-Петербург" ? "after:content-[''] after:absolute after:top-[100px] after:left-[50%] after:translate-x-[-50%] after:w-0 after:h-0 after:border-l-[10px] after:border-r-[10px] after:border-b-[10px] after:border-l-transparent after:border-r-transparent after:border-b-[#CC9872]" : ""
                        }`}
                        onClick={() => setActiveCity("Санкт-Петербург")}
                    >
                        Санкт-Петербург
                    </button>
                </div>
            </div>

            {/* Карта и информация */}
            <div className="h-[426px] border border-[#CC9872] rounded-[30px] p-[50px] mt-[20px] flex space-x-[87px] items-center">
                {/* Карта */}
                <div>
                    <div className="border rounded-[15px] shadow-lg w-[50%]">
                        <iframe
                            src={locations[activeCity].mapSrc}
                            width="603"
                            height="326"
                            allowFullScreen
                            title="Yandex Map"
                        ></iframe>
                    </div>
                </div>
                {/* Информация о городе */}
                <div className="text-[20px]">
                    <p className="font-semibold">
                        {activeCity}
                        <br />
                        {locations[activeCity].address}
                    </p>
                    <div className="mt-[40px] flex items-center space-x-[32px]">
                        <p className="font-semibold">{locations[activeCity].phone}</p>
                        <img src={whatsapp} alt="WhatsApp Icon" />
                    </div>
                    <div className="mt-[28px]">
                        <a href="#" className="text-[#CE9A74] underline">
                            we@ambarwood.ru
                        </a>
                        <p className="text-[14px]">По вопросам сотрудничества</p>
                    </div>
                    <div className="mt-[26px]">
                        <p>Подписывайте на наши соц.сети:</p>
                        <div className="flex items-center space-x-[9px] mt-[13px]">
                            <img src={vk} alt="VK Icon" />
                            <div className="bg-[#EB2626] rounded-[50%] w-[30px] h-[30px] items-center flex justify-center">
                                <img src={youtube} alt="YouTube Icon" className="w-[16px] h-[16px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Location;
