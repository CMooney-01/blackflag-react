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
            <div className="event-card-body">
                <div className='event-title'><h4>{comp.event_title}</h4></div>
                <div className='event-date NewDateField'><h5>Date of competition: {comp.NewDateField}</h5></div>
                <div className='event-desc'><p>{comp.vent_description}</p></div>
                <div className='event-price'><p>Entry fee: ${comp.event_price}</p></div>

                <Link to= '/event-signup'>
                    <a href="#" id={comp.event_id} className="button1" onClick={() => this.updateButton(comp.event_id)}>
                      Sign Up
                    </a>
                </Link>
            </div>
          // </EventContext.Consumer>
        ))

      return (

        <div className='events'>
          <div className='container'>
              <h1>Upcoming Events</h1>
              <p>Check out all our upcoming events below!</p>

              <div className='upcoming-events-container'>

                  <div className="event-card">
                    <div className="event-card-img">

                    </div>
                    <div>
                      {event_data}
                    </div>
                  </div>

              </div>

          </div>
        </div>
      );
      }
    }

export default GetEvents;
