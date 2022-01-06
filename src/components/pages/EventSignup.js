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
