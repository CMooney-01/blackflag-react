import React from 'react'

export default function ContactUs() {

  return (
    <>
    <div className="contact-us">

      <div className="heading-container contact-title">
        <h1>CONTACT US</h1>
      </div>

      <div className='contact-coaching-hours'>
        <p>
          Coaching (aka staffed) hours are available weekdays in the morning and evening.
        </p>

        <div>
          <p>
            <br />
            Weekday mornings: 5:30am to 8:30am
            <br />
            Weekday evenings: 5:00pm to 8:00pm
          </p>
        </div>

      </div>

      <div className='contact-email'>
        <p>
          Email enquiries:
          info@blackflagbarbell.com.au
        </p>
      </div>


      <div className='contact-address'>
        <p>
          Unit 14,
          44 Carrington Road<br />
          Castle Hill, NSW
        
        </p>
      </div>




      <div className='contact-map'>
        <iframe
          width="600"
          height="450"
          style={{border:0}}
          loading="lazy"
          allowfullscreen
          src="https://www.google.com/maps/embed/v1/place?q=place_id:EjQxNC80NCBDYXJyaW5ndG9uIFJkLCBDYXN0bGUgSGlsbCBOU1cgMjE1NCwgQXVzdHJhbGlhIlgaVgpQEk4KNAoyCb1gtPm9oRJrEdSaeUZiQCg8Gh4LEO7B7qEBGhQKEgmpYAJv76MSaxHglLo_a30BHAwQLCoUChIJVd34vb2hEmsRujMGwhVxJigSAjE0&key=AIzaSyAai-SCcJ0cz9jkuGyxj1mywIWGma7IeJ4"
        />
      </div>












    </div>


    </>
  )
}
