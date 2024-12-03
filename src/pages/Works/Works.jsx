import React from 'react'
import HeaderSecond from '../../components/headerSecond/HeaderSecond'
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
