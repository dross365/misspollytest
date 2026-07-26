import React from 'react'
import NewLocationImg from '../assets/new_location.jpeg'

const NewLocation = () => {
  return (
    <section id='upcomingevents' className='bg-[#faf3e0] pt-[20px]'>
      <div className='grid w-[90%] lg:w-full max-w-5xl mx-auto grid-cols-1 pb-4 pt-4'>
        {' '}
        {/* md:grid-cols-2 with 2 menus */}
        {/* <div>
          <h2 className='uppercase tracking-widest text-2xl text-center'>
            february event
          </h2>
          <img
            src={februaryEvent}
            alt='celeste dining room'
            className='w-72 lg:w-120 h-auto mx-auto rounded-lg shadow-lg my-3'
          />
        </div> */}
        <div>
          <img
            src={NewLocationImg}
            alt='new location image'
            //lg:w-240
            className='block mx-auto max-w-full h-auto rounded-lg shadow-lg my-3'
          />
        </div>
      </div>
    </section>
  )
}

export default NewLocation
