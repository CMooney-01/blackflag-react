import React from 'react'
import membership1 from './assets/membership1.JPG'
import membership2 from './assets/membership2.JPG'
import membership3 from './assets/membership3.JPG'

export default function Membership() {
  return (
    <div className='membership'>
        <div className='container'>
            <h1>Membership Options</h1>
            <div className='membership-grid'>
                <div className='membership-option'>
                  <img className='membership-img' src={membership3} />
                  <div className='membership-desc'>
                    <h3>Unlimited Coaching</h3>
                    <p>
                      Our unlimited coaching membership includes unlimited coaching during open hours,
                      personalised programming and 24/7 access to Black Flag Barbell Club. This is our
                      most popular membership option as it provides regular, expert coaching combined
                      with a proven training plan customised towards your goals.
                    </p>
                  </div>
                </div>
                <div className='membership-option'>
                    <img className='membership-img' src={membership2} />
                    <div className='membership-desc'>
                        <h3>Gym Only</h3>
                        <p>
                          Our 'Gym Only' membership does exactly what it says on the tin - 24/7 access
                          to Black Flag Barbell Club and it's awesome equipment for powerlifting, strongman,
                          weightlifting and all round strength training.
                        </p>
                    </div>
                </div>
                <div className='membership-option'>
                    <img className='membership-img' src={membership1} />
                    <div className='membership-desc'>
                        <h3>Online Coaching</h3>
                        <p>
                          Our goal with online coaching is to help you develop as a lifter – both physically
                          and intellectually. With weekly check ins, live catch up calls and video reviews
                          each week we will hold you accountable, push you to achieve your best and teach you
                          the 'what', 'why' and 'how' that drives technical and programming decisions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
