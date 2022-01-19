import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EventContext from "../../context/EventContext"


class GetEvents extends React.Component {

    static contextType = EventContext

    componentDidMount() {
        this.comp = this.context
    }

    updateButton = (value) => {
      this.props.updateButton(value);
    }

    render() {

      // console.log(this.context)

      const event_data = [];
      this.context.data
        .forEach(comp => event_data.push(
          // <EventContext.Consumer>
          <div className="event-container">
            <div className="event-card-body">
                <div className='event-title'>{comp.event_title}</div>
                <div className='event-date NewDateField'>Date of competition: {comp.NewDateField}</div>
                <div className='event-desc'>{comp.event_description}</div>
                <div className='event-price'>Entry fee: ${comp.event_price}</div>

                <Link to= '/event-signup'>
                    <a href="#" id={comp.event_id} className="button1" onClick={() => this.updateButton(comp.event_id)}>
                      Sign Up
                    </a>
                </Link>
            </div>
          </div>
          // </EventContext.Consumer>
        ))

      return (

        <div className='events'>



            <div className="heading-container event-page-title">
              <h1>UPCOMING EVENTS</h1>
            </div>

            <div className="event-tagline">
              Check out all our upcoming events below!
            </div>

              <div className='upcoming-events-container'>

                  <div className="event-card">

                    <div>
                      {event_data}
                    </div>
                  </div>

              </div>


        </div>
      );
      }
    }

export default GetEvents;
