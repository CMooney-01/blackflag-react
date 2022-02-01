import React from 'react'
import membership1 from './assets/membership1crop.png'
import membership2 from './assets/membership2crop.png'
import membership3 from './assets/membership3crop.png'

export default function Membership() {
  return (
    <div className="membership">

      <div className='heading-container membership-title'>
        <h1>MEMBERSHIP OPTIONS</h1>
      </div>


      <div className='membership-option option1'>
        <img className='membership-img' src={membership3} />
        <div className='membership-desc'>
            <h5>COACHING</h5>
            <p className='membership-para'>
              For those who want it all! Our most popular membership option includes:<br />
              Unlimited coaching during staffed hours<br />
              Personalised programming<br />
              24/7 access to Black Flag Barbell Club.
            </p>

        </div>
      </div>

      <div className='membership-option option2'>
        <img className='membership-img' src={membership2} />
        <div className='membership-desc'>
          <h5>GYM ACCESS</h5>
          <p className='membership-para'>
            24/7 access
            to Black Flag Barbell Club and it's awesome equipment for powerlifting, strongman,
            weightlifting and all round strength training.
          </p>
        </div>
      </div>

      <div className='membership-option option3'>
        <img className='membership-img' src={membership1} />
        <div className='membership-desc'>
          <h5>ONLINE COACHING</h5>
          <p className='membership-para'>
            Can't train with us in person? No worries!<br />
            Each week we will hold you accountable, push you to achieve your best and teach you
            the 'what', 'why' and 'how' that drives technical and programming decisions.
          </p>
        </div>
      </div>

    </div>


  )
}
