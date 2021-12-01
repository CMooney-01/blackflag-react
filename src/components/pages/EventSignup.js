import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class EventSignup extends React.Component {

    render() {


      console.log(this.props.btn);
      return (

        <div className='sign-up'>
          <h3 className='event-signup'>Sign Up</h3>

          <p>You are signing up for the following competition:</p>
          <div className='signup-form-container'>

          <p>{this.props.events.map((dynamicData)=>
            <div className="event-card">
              <div className="event-card-img">
                <p>insert img here</p>
              </div>
              <div className="event-card-body">
                  <div className='event-title'><h4>{dynamicData.event_title}</h4></div>
                  <div className='event-date'><h5>Date of competition: {dynamicData.event_date}</h5></div>
                  <div className='event-desc'><p>{dynamicData.event_description}</p></div>
                  <div className='event-price'><p>Entry fee: ${dynamicData.event_price}</p></div>
              </div>
            </div>
          )}</p>


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
