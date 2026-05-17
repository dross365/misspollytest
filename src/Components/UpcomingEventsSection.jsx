import React from 'react'
import juneEvent from '../assets/juneEvent.jpeg'

const UpcomingEventsSection = () => {
  return (
    <section id='upcomingevents' className='bg-[#faf3e0] pt-[20px]'>
      <div>
        <h2 className='uppercase tracking-widest text-2xl text-center'>
          upcoming events
        </h2>
      </div>
      <div className='grid w-72 lg:w-120 m-auto grid-cols-1 pb-4 pt-4'>
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
            June Event
          </h2>
          <img
            src={juneEvent}
            alt='june event'
            className='w-72 lg:w-240 h-auto mx-auto rounded-lg shadow-lg my-3'
          />
        </div>
      </div>
    </section>
  )
}

export default UpcomingEventsSection
