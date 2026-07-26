import React from 'react'
import funnyPhoto from '../assets/funny_photo.jpg'
import teacup from '../assets/teacup.jpg'

const ColonialSection = () => {
  return (
    <section id='history' className='bg-[#faf3e0] pb-[50px] pt-4'>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 items-center'>
        {/* Text: spans 2 cols on lg */}
        <div className='p-2 m-4 lg:col-span-2'>
          <p className='uppercase text-sm text-[#d8a7b1] text-center mt-4 lg:text-lg'>
            the charming
          </p>
          <h2 className='uppercase tracking-widest text-2xl text-center mt-2'>
            historic colonial setting
          </h2>
          <p className='text-sm lg:text-lg w-[90%] lg:w-[80%] mx-auto text-justify lg:text-left mt-4'>
            Opened in 1930 and operated for many years as the Jane Simmons Tea
            House, this building was constructed from a log cabin originally
            located on the Davis property and a clapboard-sided building. After
            many years as a vibrant tea house, the building became a rental
            space and has hosted many special events. After a revitalization
            project, it is now once again a vibrant and welcoming place for
            friends and family to gather.
          </p>
        </div>

        {/* Images: mobile/medium (side-by-side under text) */}
        <div className='flex flex-col items-center gap-4 lg:hidden'>
          <img
            src={funnyPhoto}
            alt='funny photo of lady'
            className='w-40 sm:w-48 h-auto rounded-lg shadow-lg'
          />
          <img
            src={teacup}
            alt='teacup'
            className='w-40 sm:w-48 h-auto rounded-lg shadow-lg'
          />
        </div>

        {/* Images: large screens (each in its own grid column) */}
        <div className='hidden lg:flex items-center justify-center'>
          <img
            src={funnyPhoto}
            alt='funny photo of lady'
            className='w-72 xl:w-80 h-auto rounded-lg shadow-lg'
          />
        </div>
        <div className='hidden lg:flex items-center justify-center'>
          <img
            src={teacup}
            alt='teacup'
            className='w-72 xl:w-80 h-auto rounded-lg shadow-lg'
          />
        </div>
      </div>
    </section>
  )
}

export default ColonialSection
