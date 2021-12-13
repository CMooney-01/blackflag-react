import React, { Component } from 'react';

const EventContext = React.createContext(true)

export default EventContext

// class EventContextProvider extends Component {
//   state = {
//     comp: {},
//   }
//
//   setComp = (comp) => {
//     this.setState((prevState) => ({ comp }))
//   }
//
//   render() {
//     const {children} = this.props
//     const {comp} = this.state
//     const {setComp} = this
//
//     return(
//       <EventContext.Provider
//         value={{
//           comp,
//           setComp,
//         }}>
//         {children}
//       </EventContext.Provider>
//     )
//   }
// }
//
// export default EventContext
//
// export { EventContextProvider }

//   const [yourEvent, setEvent] = useState(null);
//
//   useEffect(() => {
//     setEvent({
//       id: "1",
//       title: "Test Title",
//       date: "06/03/2022",
//       desc: "Test description",
//       price: "65",
//     });
//   }, []);
//
//   const updateEvent = (comp) => {
//     setEvent({
//       id: comp.event_id,
//       title: comp.event_title,
//       date: comp.event_date,
//       desc: comp.event_description,
//       price: comp.event_price,
//     });
//   }
//
//   const value = {
//     yourEvent,
//     setEvent,
//     updateEvent,
//   };
//
//   return <EventContext.Provider value={value}>{children}</EventContext.Provider>
// };
