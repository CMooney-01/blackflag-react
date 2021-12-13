import React from 'react'
import Payment from "./Payment";
import EventContext from "../../context/EventContext"

class EventSignup extends React.Component {

  static contextType = EventContext

  componentDidMount() {
      this.comp = this.context
  }

    render() {

      const compID = this.context.btn -1

      return (
          <div className="sign-up">


          <h3>Your are signing up for the following competition:</h3>
          <br/>
          <div className="event-card-body">
            <div className='event-title'><h4>{this.context.data[compID].event_title}</h4></div>
            <div className='event-date'><h5>Date of competition: {this.context.data[compID].event_date}</h5></div>
            <div className='event-desc'><p>{this.context.data[compID].event_description}</p></div>
            <div className='event-price' id='entryFee'><p>Entry fee: ${this.context.data[compID].event_price}</p></div>
          </div>

          <div className="signup-container">

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

              </div>
            </form>

            <div className="stripe-payment-container">
              <div>
                <Payment />
              </div>
            </div>

          </div>


          </div>

        )
    }
  }


export default EventSignup;
