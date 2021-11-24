import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// Importing pages from pages folder to use in routing below
import Navbar from './components/Navbar';
import Events from './components/pages/Events'
import Membership from './components/pages/Membership'
import ContactUs from './components/pages/ContactUs'
import Physiotherapy from './components/pages/Physiotherapy'
import Home from './components/pages/Home'
import EventSignup from './components/pages/EventSignup'

class App extends React.Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState( { data: res.express }))
      .catch(err => console.log(err));
  }

  callBackendAPI = async () => {
    const response = await fetch('/events');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/events' element={<Events />} />
            <Route path='/membership' element={<Membership />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/physiotherapy' element={<Physiotherapy />} />
            <Route path='/event-signup' element={<EventSignup />} />
          </Routes>
        </Router>

        <p>{this.state.data}</p>
      </div>
    );
  }
}


// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/events' element={<Events />} />
//         <Route path='/membership' element={<Membership />} />
//         <Route path='/contact-us' element={<ContactUs />} />
//         <Route path='/physiotherapy' element={<Physiotherapy />} />
//       </Routes>
//     </Router>
//
//     <p>{this.state.data}</p>
//   );
// }

export default App;
