import whatsapp from '../assets/icons/whatsappFooter.svg'
import vk from '../assets/icons/vkFooter.svg'
import youtube from '../assets/icons/youtubeFooter.svg'

export const footerlinks = [{
  id: 1,
  title: "Меню",
  links: [
    { label: "Каталог", url: "/catalog" },
    { label: "Об амбарной доске", url: "/about-ambar" },
    { label: "Наши работы", url: "/works" },
    { label: "О нас", url: "/about-us" },
    { label: "Контакты", url: "/contacts" },
  ]
},
{
  id: 2,
  title: "ИНФОРМАЦИЯ",
  links: [
    { label: "Политика конфиденциальности", url: "/privacy" },
    { label: "Публичная оферта", url: "/public" },
    { label: "Доставка", url: "/delivery" },
    { label: "Оплата", url: "/payment" },
  ]
},
{
  id: 3,
  title: "КОНТАКТЫ",
  address: 'Москва, ул. Тимирязевская, д.1, стр.2',
  address2: 'Санкт-Петербург, ул. Швецова, д.41К',
  number: "+7 (929) 590 82-87",
  whatsapp: whatsapp,
  vk: vk,
  youtube: youtube,
}
];
