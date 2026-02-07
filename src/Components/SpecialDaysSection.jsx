import React from 'react'

const SpecialDaysSection = () => {
  return (
    <section id='events' className='bg-[#faf3e0] py-[50px]'>
      <div className='max-w-[600px] mx-auto px-4'>
        <h2 className='uppercase tracking-widest text-2xl text-center py-8 md:py-[50px]'>
          polly's parties
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6'>
          {[
            {
              blurb: `We've got the perfect space for your gathering! Rent one of our private rooms for 2 hours or the whole place! We can accommodate 15 to 50!
You can choose to have the current menu or we can create a custom menu for you. Email owner@misspollystearoom.com for our package options and pricing.`,
            },
          ].map(({ title, blurb, price }) => (
            <div
              key={title}
              className='rounded-lg shadow-md p-6 flex flex-col bg-[#d2ba9c]'
            >
              <h3 className='font-bold uppercase tracking-wide mb-2 text-[#faf3e0]'>
                {title}
              </h3>
              <p className='text-sm text-slate-700 mb-4'>{blurb}</p>
              <p className='text-sm text-slate-700 mb-4'>{price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SpecialDaysSection
