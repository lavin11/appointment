import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";


function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  const [contacts, setContacts] = useState([{name: 'lavin', phone: '123456789', email: 'lan@abc.com' }]);
  const [appointments, setAppointments] = useState([{
    title: 'tell',
    contact: {name: 'lavin', phone: '123456789', email: 'lan@abc.com' },
    date: '20/09/2022',
    time: '8:30'
  }]);

  console.log(contacts);





  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  const addContact = (cname, cphone,cemail) => {
    setContacts((prevContacts) => {
      const contacts = {
        name: cname,
        phone: cphone,
        email: cemail
      };

      return [...prevContacts, contacts];
    }) ;
  };


  const addAppointment = (atitle, contactobj, adate, atime) => {
    setAppointments((prevAppointments) => {
      const appointment = {
        title: atitle,
        contact: contactobj,
        date: adate,
        time: atime
      };

      return [...prevAppointments, appointment];  
    });
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage contacts = {contacts} addContact = {addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage appointments = {appointments} contacts = {contacts} addAppointment = {addAppointment} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
