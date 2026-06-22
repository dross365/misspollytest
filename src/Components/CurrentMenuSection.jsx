import React from 'react'
import currentMenu from '../assets/juneMenu.jpeg'

const CurrentMenuSection = () => {
  return (
    <section id='currentmenu' className='bg-[#faf3e0] pt-[20px]'>
      <div className='grid grid-cols-1 pb-4 pt-4'>
        {' '}
        {/* md:grid-cols-2 */} {/* md:grid-cols-2 with 2 menus */}
        <div>
          <h2 className='uppercase tracking-widest lg:text-2xl text-xl text-center'>
            current menu
          </h2>
          <img
            src={currentMenu}
            alt='current menu'
            className='w-72 lg:w-120 h-auto mx-auto rounded-lg shadow-lg mt-3 mb-[100px]'
          />
        </div>
      </div>
    </section>
  )
}

export default CurrentMenuSection
