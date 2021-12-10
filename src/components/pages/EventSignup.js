import React, { useState, useEffect } from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Payment from "./Payment";




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
              <div className="lifter-details">
                <div className="signup-form-input">
                  <label htmlFor='lifterName'>
                  Name <input
                          type='text'
                          id='lifterName'
                          name='lifterName'>
                       </input>
                  </label>
                </div>

                <div className="signup-form-input">
                  <label htmlFor='lifterDob'>
                    Date of Birth <input
                                    type='date'
                                    id='lifterDob'
                                    name='lifterDob'>
                                  </input>
                  </label>
                </div>

                <div className="signup-form-input">
                  <label htmlFor='lifterPhone'>
                  Phone <input
                          type='tel'
                          id='lifterPhone'
                          name='lifterPhone'>
                        </input>
                  </label>
                </div>

                <div className="signup-form-input">
                  <label htmlFor='lifterEmail'>
                  Email <input
                          type='email'
                          id='lifterEmail'
                          name='lifterEmail'>
                        </input>
                  </label>
                </div>

                <div className="signup-form-confirm">
                  <label htmlFor="confirm">
                  Confirm <button
                            id="confirm"
                            className="event-signup-button"
                            name="confirm"
                            type="submit"
                            value={competition.event_id}
                            >
                            <p>Confirm</p>
                          </button>
                  </label>
                </div>
              </div>

              <div className="stripe-payment-container">
                <div>
                  <Payment />
                </div>
              </div>
            </form>

        </div>
      )
    }
    }


export default EventSignup;
