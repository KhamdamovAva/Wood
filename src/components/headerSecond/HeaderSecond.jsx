import React from 'react'
function HeaderSecond({ title }) {
  return (
    <>
      <div className='min-h-[390px]  mb-[50px]' >
        <div className="Container text-white">
          <div className='text-center pt-[150px]'>
            <h3 className='text-[43px] font-light uppercase'>{title}</h3>
          </div>
        </div>
      </div >
    </>

  )
}

export default HeaderSecond
