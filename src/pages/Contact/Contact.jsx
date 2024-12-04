import React from 'react'
import HeaderSecond from '../../components/headerSecond/HeaderSecond'
import Location from '../../components/Location/Location'
import Form from '../../components/form/Form'
import formImage from "../../assets/images/formImage.png";
import Footer from '../../components/footer/Footer';

function Contact() {
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
                <Location />
             </div>
          </section>
          <section>
             <div style={{backgroundImage : `url(${formImage})`}} className='mt-[60px]'>
                <Form  title="Остались" subtitle="вопросы ?" bid="Оставьте заявку или позвоните нам по номеру:" phone="+7 (929) 590 82-87"/>
             </div>
          </section>
       </main>
       <footer>
           <Footer />
       </footer>
    </>
  )
}

export default Contact
