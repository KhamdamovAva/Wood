import React from 'react'
import { footerlinks } from '../../Data/footerData'
import { Link } from 'react-router-dom'
import whiteLogo from '../../assets/icons/whiteLogo.svg'


function Footer() {
  return (
    <div className='Container'>
      <div className='flex items-start justify-between text-[#99999D]'>
        <div>
          <img src={whiteLogo} alt="White Logotype" />
          <p>© 2023. Все права защищены</p>
        </div>
        {footerlinks.map((section) => (
          <div key={section.id} >
            <h3 className='mb-[20px] text-[white]'>{section.title}</h3>
            {section.links ? (
              <ul>
                {section.links.map((link, index) => (
                  <li className='mb-[20px]' key={index}>
                    <Link to={link.url}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            ) : null}

            {section.address && (
              <div className="contact-info">
                <p>{section.address}</p>
                <p className='my-[20px]'>{section.address2}</p>
                <p className='mb-[40px]'>{section.number}</p>

                <div className="social-media-icons flex items-center space-x-[10px]">
                  <a href={`https://wa.me/${section.number}`} target="_blank" rel="noopener noreferrer">
                    <img src={section.whatsapp} alt="WhatsApp" />
                  </a>
                  <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
                    <img src={section.vk} alt="VK" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <img src={section.youtube} alt="YouTube" />
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  )
}

export default Footer