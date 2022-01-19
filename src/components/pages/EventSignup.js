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

            <h5>Your are signing up for the following competition:</h5>

            <div className="signup-event-container">

              <div className="signup-card-body">
                <div className='event-title'>{this.context.data[compID].event_title}</div>
                <div className='event-date NewDateField'>Date of competition: {this.context.data[compID].NewDateField}</div>
                <div className='event-desc'>{this.context.data[compID].event_description}</div>
                <div className='event-price' id='entryFee'>Entry fee: ${this.context.data[compID].event_price}</div>
              </div>

            </div>


            <div className="stripe-payment-container">
              <div>
                <Payment />
              </div>
            </div>

          </div>

        )
    }
  }


export default EventSignup;
