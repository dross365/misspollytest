import React from 'react'
import currentMenu from '../assets/feb_menu.jpeg'
import marchMenu from '../assets/march_menu.jpeg'

const CurrentMenuSection = () => {
  return (
    <section id='currentmenu' className='bg-[#faf3e0] pt-[20px]'>
      <div className='grid grid-cols-1 pb-4 pt-4 md:grid-cols-2'>
        {' '}
        {/* md:grid-cols-2 with 2 menus */}
        <div>
          <h2 className='uppercase tracking-widest text-2xl text-center'>
            current menu
          </h2>
          <img
            src={currentMenu}
            alt='current menu'
            className='w-72 lg:w-120 h-auto mx-auto rounded-lg shadow-lg my-3'
          />
        </div>
        <div>
          <h2 className='uppercase tracking-widest text-2xl text-center'>
            march menu
          </h2>
          <img
            src={marchMenu}
            alt='march menu'
            className='w-72 lg:w-78 h-auto mx-auto rounded-lg shadow-lg my-3'
          />
        </div>
      </div>
    </section>
  )
}

export default CurrentMenuSection
