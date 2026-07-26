import React from 'react'
import augustEvent from '../assets/august_event.jpeg'

const UpcomingEventsSection = () => {
  return (
    <section id='upcomingevents' className='bg-[#faf3e0] pt-[20px]'>
      <div className='grid w-[90%] lg:w-full m-auto grid-cols-1 pb-4 pt-4'>
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
          <h2 className='uppercase tracking-widest text-2xl text-center'>
            august event
          </h2>
          <img
            src={augustEvent}
            alt='august event'
            className='block mx-auto max-w-full h-auto rounded-lg shadow-lg my-3'
          />
        </div>
      </div>
    </section>
  )
}

export default UpcomingEventsSection
