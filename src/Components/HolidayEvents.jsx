import React from 'react'
import holidayReservation from '../assets/holidayReservation.jpeg'

const HolidayEvents = () => {
  return (
    <section className='bg-[#faf3e0] pt-[20px]'>
      <div className='grid w-[80%] lg:w-full max-w-3xl mx-auto grid-cols-1 pb-4 pt-4'>
        <h2 className='uppercase tracking-widest text-2xl text-center'>
          holiday tea & celebrations
        </h2>{' '}
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
            src={holidayReservation}
            alt='holiday reservation'
            //lg:w-240
            className='block mx-auto max-w-full h-auto rounded-lg shadow-lg my-3'
          />
        </div>
      </div>
    </section>
  )
}

export default HolidayEvents
