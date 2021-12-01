import React from 'react';

class GetEventData extends React.Component {

  constructor() {
    super();
    this.state = {data: []};
  }

  componentDidMount() {
    this.callBackendAPI()
      .then(response => this.setState( { data: response }))
      .catch(err => console.log(err));
  }

  callBackendAPI = async () => {
    const response = await fetch('/');
    const event_data = await response.json();

    if (response.status !== 200) {
      throw Error(event_data.message)
    }
    // console.log(event_data);
    return event_data;
  };

  render() {
    return (
        <div>
        { this.state.data }
        </div>
    );
  }
}

export default GetEventData;
