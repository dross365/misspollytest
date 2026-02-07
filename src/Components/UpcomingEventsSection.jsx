import React from 'react'
import februaryEvent from '../assets/feb_event.jpeg'
import marchEvent from '../assets/march_event.jpeg'

const UpcomingEventsSection = () => {
  return (
    <section id='upcomingevents' className='bg-[#faf3e0] pt-[20px]'>
      <div>
        <h2 className='uppercase tracking-widest text-2xl text-center'>
          upcoming events
        </h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 pb-4 pt-4'>
        {' '}
        {/* md:grid-cols-2 with 2 menus */}
        <div>
          <h2 className='uppercase tracking-widest text-2xl text-center'>
            february event
          </h2>
          <img
            src={februaryEvent}
            alt='celeste dining room'
            className='w-72 lg:w-120 h-auto mx-auto rounded-lg shadow-lg my-3'
          />
        </div>
        <div>
          <h2 className='uppercase tracking-widest text-2xl text-center'>
            march event
          </h2>
          <img
            src={marchEvent}
            alt='celeste dining room'
            className='w-72 lg:w-120 h-auto mx-auto rounded-lg shadow-lg my-3'
          />
        </div>
      </div>
    </section>
  )
}

export default UpcomingEventsSection
