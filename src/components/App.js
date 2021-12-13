import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// Importing pages from pages folder to use in routing below
import Navbar from './Navbar';
import Events from './pages/Events'
import Membership from './pages/Membership'
import ContactUs from './pages/ContactUs'
import Physiotherapy from './pages/Physiotherapy'
import Home from './pages/Home'
import EventSignup from './pages/EventSignup'
import PaymentSuccess from './pages/PaymentSuccess'
import CheckoutForm from './pages/CheckoutForm'
import Payment from './pages/Payment'
import EventContext from '../context/EventContext'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      btn: '',
      table: []
    };
  }

  updateButton = (value) => {
    this.setState( { btn: value } );
  }

  componentDidMount() {
    this.findEvents()
      .then(response => this.setState( { data: response }))
      .catch(err => console.log(err));

    this.findTable()
      .then(response => this.setState( { table: response }))
      .catch(err => console.log(err));
  }

  findEvents = async () => {
    const response = await fetch('/events');
    const event_data = await response.json();

    if (response.status !== 200) {
      throw Error(event_data.message)
    }
    // console.log(event_data);
    return event_data;
  };

  findTable = async () => {
    const response = await fetch('/payment');
    const table_data = await response.json();

    if (response.status !== 200) {
      throw Error(table_data.message)
    }
    console.log(table_data);
    return table_data;
  };

  render() {
    const event_data = this.state.data;
    const btn = this.state.btn;
    return (
      <EventContext.Provider value={this.state}>
      <div className="App">

        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/events' element={<Events events={event_data} btn={this.state.btn} updateButton={this.updateButton}/>} />
            <Route path='/membership' element={<Membership />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/physiotherapy' element={<Physiotherapy />} />
            <Route path='/event-signup' element={<EventSignup events={event_data} btn={this.state.btn}/>} />
            <Route path='/payment-success' element={<PaymentSuccess />} />
          </Routes>
        </Router>

      </div>
      </EventContext.Provider>
    );
  }
}

export default App;
