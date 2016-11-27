import React, {Components} from 'react';
import Nav from './components/Nav/Nav.jsx';
import EventForm from './components/EventForm/EventForm.jsx';
import EventList from './components/EventList/EventList.jsx';
import signup_login from './components/Signup_Login/Signup_Login.jsx';
import Footer from './components/Footer/Footer.jsx';

export default class LandingPage extends Component {
  render(){
    return(
      <div class="LandingPage">
      <Nav />
      <signup-login />
      <EventForm />
      <EventList />
      <Footer />
      </div>
      )
  }
}
