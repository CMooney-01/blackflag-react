import React from 'react'
import { Link } from 'react-router-dom';
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


            {comp}

            <form className='signup-form-container' method="POST">
              <div className="signup-form-input">
                <label htmlFor='lifterName'>
                  <p>Name&nbsp; </p>
                </label>

                <input
                  type='text'
                  id='lifterName'
                  name='lifterName'>
                </input>
              </div>

              <div className="signup-form-input">
                <label htmlFor='lifterDob'>
                  <p>Date of Birth&nbsp; </p>
                </label>

                <input
                  type='date'
                  id='lifterDob'
                  name='lifterDob'>
                </input>
              </div>

              <div className="signup-form-input">
                <label htmlFor='lifterPhone'>
                  <p>Phone&nbsp; </p>
                </label>

                <input
                  type='tel'
                  id='lifterPhone'
                  name='lifterPhone'>
                </input>
              </div>

              <div className="signup-form-input">
                <label htmlFor='lifterEmail'>
                  <p>Email&nbsp; </p>
                </label>

                <input
                  type='email'
                  id='lifterEmail'
                  name='lifterEmail'>
                </input>
              </div>

              <div className="signup-form-confirm">
                <label htmlFor="confirm">
                  <p>Confirm and proceed to payment info&nbsp;</p>
                </label>
                  <button
                    className="event-signup-button"
                    name="confirm"
                    type="submit"
                    >
                    <p>Confirm</p>
                  </button>

              </div>

            </form>

        </div>
      )
    }
    }


export default EventSignup;
