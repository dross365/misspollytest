import React from 'react'
import pollysParties from '../assets/pollys_parties.jpeg'
import pollysTop from '../assets/partiesTop.png'
import pollysBottom from '../assets/partiesBottom.png'

const SpecialDaysSection = () => {
  return (
    <section id='parties' className='bg-[#faf3e0] py-[50px]'>
      <div className='lg:max-w-full max-w-[600px] mx-auto px-4 mt-5'>
        <h2 className='uppercase tracking-widest text-2xl text-center'>
          polly's parties
        </h2>
        <div className='hidden lg:block'>
          <img
            src={pollysParties}
            alt='pollys parties'
            className='w-72 lg:w-240 h-auto mx-auto rounded-lg shadow-lg my-3'
          />
        </div>
        <div className='block lg:hidden relative mt-5'>
          <img
            src={pollysTop}
            alt='pollys parties top'
            className='w-full rounded-lg shadow-lg'
          />

          <img
            src={pollysBottom}
            alt='pollys parties bottom'
            className='w-full rounded-lg shadow-lg'
          />
        </div>
      </div>
    </section>
  )
}

export default SpecialDaysSection
