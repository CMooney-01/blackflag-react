import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


class GetEvents extends React.Component {

    updateButton = () => {
      this.props.updateButton(1);
    }

    render() {
      return (

        <div className='events'>
          <div className='container'>
              <h1>Upcoming Events</h1>
              <p>Check out all our upcoming events below!</p>

              <div className='upcoming-events-container'>
                <p>{this.props.events.map((dynamicData)=>
                  <div className="event-card">
                    <div className="event-card-img">

                    </div>
                    <div className="event-card-body">
                        <div className='event-title'><h4>{dynamicData.event_title}</h4></div>
                        <div className='event-date'><h5>Date of competition: {dynamicData.event_date}</h5></div>
                        <div className='event-desc'><p>{dynamicData.event_description}</p></div>
                        <div className='event-price'><p>Entry fee: ${dynamicData.event_price}</p></div>
                        <Link to= '/event-signup'>
                            <button id={dynamicData.event_id} className="event-signup-button" onClick={this.updateButton}>
                              <p>Sign Up</p>
                            </button>
                        </Link>
                    </div>
                  </div>
                )}</p>
              </div>

          </div>
        </div>
      );
      }
    }

export default GetEvents;
