import React from 'react'
import drivingDirections from '../assets/driving_directions.jpeg'

const DrivingDirections = () => {
  return (
    <section id='contact' className='bg-[#faf3e0] p-[50px]'>
      <h2 className='uppercase tracking-widest text-2xl text-center mt-2'>
        driving directions
      </h2>
      <p className='text-md font-semibold uppercase md:text-lg w-[90%] md:w-[80%] mx-auto text-center mt-4'>
        follow the dotted line to get to our parking lot
      </p>
      <img
        src={drivingDirections}
        alt='driving directions'
        className='w-auto lg:h-150 h-85 mx-auto rounded-lg shadow-lg mt-3 mb-[100px]'
      />
    </section>
  )
}

export default DrivingDirections
