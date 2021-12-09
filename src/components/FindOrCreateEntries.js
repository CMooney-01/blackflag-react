import React from 'react';

class FindOrCreateEntries extends React.Component {

  constructor() {
    super();
    this.state = {table: []};
  }

  componentDidMount() {
    this.callBackendAPI()
      .then(response => this.setState( { table: response }))
      .catch(err => console.log(err));
  }

  callBackendAPI = async () => {
    const response = await fetch('/payment');
    const table_data = await response.json();

    if (response.status !== 200) {
      throw Error(table_data.message)
    }
    // console.log(event_data);
    return table_data;
  };

  render() {
    return (
        <div>
        { this.state.table }
        </div>
    );
  }
}

export default FindOrCreateEntries;
