import React from 'react';

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

                  <div>{
                          this.state.data.map((dynamicData)=>
                          <div>
                            <div>{dynamicData.event_title}</div>
                            <div>{dynamicData.event_date}</div>
                            <div>{dynamicData.event_description}</div>
                            <div>{dynamicData.event_price}</div>
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
