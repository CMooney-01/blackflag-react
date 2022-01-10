import React from 'react'
import membership1 from './assets/membership1.JPG'
import membership2 from './assets/membership2.JPG'
import membership3 from './assets/membership3.JPG'

export default function Membership() {
  return (
    <div className="membership">

      <div className='heading-container membership-title'>
        <h1>MEMBERSHIP OPTIONS</h1>
      </div>


      <div className='membership-option option1'>
        <img className='membership-img' src={membership3} />
        <div className='membership-desc'>
            <h5>Coaching Membership</h5>
            <p>
              Our coaching membership includes unlimited coaching during open hours,
              access to our conditioning classes,
              personalised programming and 24/7 access to Black Flag Barbell Club.
            </p>

        </div>
      </div>

      <div className='membership-option option2'>
        <img className='membership-img' src={membership2} />
        <div className='membership-desc'>
          <h5>Gym Access Membership</h5>
          <p>
            Does exactly what it says on the tin - 24/7 access
            to Black Flag Barbell Club and it's awesome equipment for powerlifting, strongman,
            weightlifting and all round strength training.
          </p>
          <br />
          <p>
            Does not include coaching, programming or access to classes.
          </p>
        </div>
      </div>

      <div className='membership-option option3'>
        <img className='membership-img' src={membership1} />
        <div className='membership-desc'>
          <h5>Online Coaching</h5>
          <p>
            Can't train with us in person? No worries! With weekly check ins, live catch up calls and video reviews
            each week we will hold you accountable, push you to achieve your best and teach you
            the 'what', 'why' and 'how' that drives technical and programming decisions.
          </p>
        </div>
      </div>

    </div>


  )
}
