import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class EventSignup extends React.Component {

    render() {

      const btn = this.props.btn - 1
      const competition = this.props.events[btn]
      const comp = (
                      <div className="event-card-body">
                          <div className='event-title'><h4>{competition.event_title}</h4></div>
                          <div className='event-date'><h5>Date of competition: {competition.event_date}</h5></div>
                          <div className='event-desc'><p>{competition.event_description}</p></div>
                          <div className='event-price'><p>Entry fee: ${competition.event_price}</p></div>
                      </div>
      )

      // console.log(comp);
      return (

        <div className='sign-up'>
          <h3 className='event-signup'>Sign Up</h3>

          <p>You are signing up for the following competition:</p>
          <div className='signup-form-container'>

            {comp}

            <form className='signup-form-container'>
              <label htmlFor='lifter-name'>
                <p>Name:</p>
              </label>
              <input
                type='text'
                id='lifter-name'
                name='lifter-name'>
              </input>

              <label htmlFor='lifter-dob'>
                <p>Date of Birth:</p>
              </label>
              <input
                type='date'
                id='lifter-dob'
                name='lifter-dob'>
              </input>

              <label htmlFor='lifter-phone'>
                <p>Contact Number:</p>
              </label>
              <input
                type='tel'
                id='lifter-phone'
                name='lifter-phone'>
              </input>

              <label htmlFor='lifter-email'>
                <p>Email:</p>
              </label>
              <input
                type='email'
                id='lifter-email'
                name='lifter-email'>
              </input>
            </form>
          </div>
        </div>
      )
    }
    }


export default EventSignup;
