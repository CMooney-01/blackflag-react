import React from 'react';
import { Link } from 'react-router-dom';

class getEvents extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(response => this.setState( { data: response }))
      .catch(err => console.log(err));
  }

  callBackendAPI = async () => {
    const response = await fetch('/events');
    const event_data = await response.json();

    if (response.status !== 200) {
      throw Error(event_data.message)
    }
    // console.log(event_data);
    return event_data;
  };


    render() {
          return (
            <div className='events'>
              <div className='container'>
                  <h1>Upcoming Events</h1>
                  <p>Check out all our upcoming events below!</p>

                  <div className='upcoming-events-container'>{
                          this.state.data.map((dynamicData)=>

                          <div className='event-card'>
                            <div className='evemt-card-img'>
                              <div className='event-img'><p>INSERT IMAGE</p></div>
                            </div>

                            <div className='event-card-body'>
                              <div className='event-title'><h4>{dynamicData.event_title}</h4></div>
                              <div className='event-date'><h5>Date of competition: {dynamicData.event_date}</h5></div>
                              <div className='event-desc'><p>{dynamicData.event_description}</p></div>
                              <div className='event-price'><p>Entry fee: ${dynamicData.event_price}</p></div>
                              <Link to="/event-signup">
                                <button className="event-signup-button"><p>Sign Up</p></button>
                              </Link>
                            </div>
                          </div>
                        )
                        }
                  </div>

              </div>
            </div>
          );
    }
  }

// class getEvents extends React.Component {
//   constructor(){
//     super();
//     this.state={
//       data:[]
//     }
//   }
//
//   componentDidMount(){
//     fetch('http://localhost:5000')
//     .then(response)=>response.json())
//     .then((findresponse)=>
//     {
//       this.setState({
//         data:findresponse,
//       });
//     });
//   }
//
//   render() {
//     return (
//       <div className='events'>
//         <div className='container'>
//             <h1>Upcoming Events</h1>
//             <p>Check out all our upcoming events below!</p>
//
//             <div>{this.state.data.event_title}</div>
//         </div>
//       </div>
//     );
//   }
// }

export default getEvents;
