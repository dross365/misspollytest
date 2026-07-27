import React from 'react'

const LocationHours = () => {
  return (
    <section id='location' className='w-full bg-[#faf3e0] pt-[50px] pb-[50px]'>
      <div className='w-full max-w-[1200px] mx-auto px-4 md:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-start'>
          {/* Column 1: Location */}
          <div>
            <h2 className='uppercase font-bold tracking-widest text-2xl text-center mt-2'>
              location
            </h2>
            <div className='w-full h-[400px] mt-4'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.5000689740073!2d-86.5035167245626!3d35.98979801296251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88640e8218f8e335%3A0x88d6e694b5f6ff3d!2s1399%20Sam%20Davis%20Rd%2C%20Smyrna%2C%20TN%2037167!5e1!3m2!1sen!2sus!4v1785096805597!5m2!1sen!2sus'
                width='100%'
                height='100%'
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                className='border-0 rounded-lg shadow-md'
              ></iframe>
            </div>
            <p className='text-center uppercase text-sm tracking-wide mt-3'>
              1399 Sam Davis Road Smyrna, TN 37167
            </p>
          </div>

          {/* Column 2: Hours */}
          <div className='w-full flex flex-col items-center'>
            <div className='w-full max-w-[400px]'>
              <h2 className='font-bold uppercase tracking-widest text-2xl text-center mt-2'>
                hours
              </h2>
              {[
                { day: 'mon', hours: 'closed' },
                { day: 'tues', hours: '11am - 2pm' },
                { day: 'wed', hours: '11am - 2pm' },
                { day: 'thurs', hours: '11am - 2pm' },
                { day: 'fri', hours: '11am - 2pm' },
                { day: 'sat', hours: '11am - 4pm' },
                { day: 'sun', hours: 'closed' },
              ].map(({ day, hours }) => (
                <p
                  key={day}
                  className={`uppercase text-center text-md md:py-4 py-2 ${
                    hours !== 'closed' ? 'font-semibold text-[#6b335d]' : ''
                  }`}
                >
                  {day} : {hours}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationHours
