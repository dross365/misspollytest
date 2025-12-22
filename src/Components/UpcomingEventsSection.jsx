import React from 'react'
import january from '../assets/january_events.jpeg'

const UpcomingEventsSection = () => {
  return (
    <section id='upcomingevents' className='bg-[#faf3e0] pt-[20px]'>
      <div>
        <h2 className='uppercase tracking-widest text-2xl text-center'>
          upcoming events
        </h2>
      </div>
      <div className='grid grid-cols-1'>
        <div>
          <p className='uppercase text-sm text-[#000g] text-center mt-4 md:text-lg'>
            january at miss polly's
          </p>
          <img
            src={january}
            alt='cleo dining room'
            className='w-72 lg:w-120 h-auto mx-auto rounded-lg shadow-lg my-3'
          />
        </div>
      </div>
    </section>
  )
}

export default UpcomingEventsSection
