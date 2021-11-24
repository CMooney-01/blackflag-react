import React from 'react'

export default function EventSignup() {
  return (
    <div className='sign-up'>
      <h1 className='event-signup'>Sign Up</h1>
      <div className='signup-form-container'>
        <form className='signup-form-container'>
          <label for='lifter-name'><p>Name:</p></label>
          <input type='text' id='lifter-name' name='lifter-name'></input>
          <label for='lifter-dob'><p>Date of Birth:</p></label>
          <input type='date' id='lifter-dob' name='lifter-dob'></input>
          <label for='lifter-phone'><p>Contact Number:</p></label>
          <input type='tel' id='lifter-phone' name='lifter-phone'></input>
          <label for='lifter-email'><p>Email:</p></label>
          <input type='email' id='lifter-email' name='lifter-email'></input>
        </form>
      </div>
    </div>
  )
}
