import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


class GetEvents extends React.Component {

    updateButton = (value) => {
      this.props.updateButton(value);
    }

    render() {

      const event_data = [];
      this.props.events
        .forEach(event => event_data.push(
          <div className="event-card-body">
              <div className='event-title'><h4>{event.event_title}</h4></div>
              <div className='event-date'><h5>Date of competition: {event.event_date}</h5></div>
              <div className='event-desc'><p>{event.event_description}</p></div>
              <div className='event-price'><p>Entry fee: ${event.event_price}</p></div>
              <Link to= '/event-signup'>
                  <button id={event.event_id} className="event-signup-button" onClick={() => this.updateButton(event.event_id)}>
                    <p>Sign Up</p>
                  </button>
              </Link>
          </div>
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
