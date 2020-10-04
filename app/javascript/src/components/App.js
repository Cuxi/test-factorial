import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Service from "../services/services.service";
import Contacts from './Contacts/Contacts';
import Contact from './Contact/Contact';
import NewContact from './Contact/NewContact';
import Home from './Login/Home';
import Login from './Login/Login';
import Signup from './Login/Signup';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {},
      errors: ''
     };
     this.handleLogin = this.handleLogin.bind(this);
     this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    localStorage.setItem("csrf", document.querySelector('[name=csrf-token]').content);
    localStorage.getItem('userToken')?
    this.setState({ isLoggedIn: true}) : this.setState({ isLoggedIn: false})
  }

  handleLogin(data) {
    localStorage.setItem("userToken", data.jwt);
    this.setState({
      isLoggedIn: true,
      user: data.user
    });
  }

  handleLogout() {
    this.setState({
      isLoggedIn: false,
      user: {}
    });
    localStorage.removeItem("userToken");
  }

  render() {
    return(
        <div>
          <Switch>
            <Route
              exact path='/'
              render={props => (
              <Home {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route
              exact path='/login'
              render={props => (
              <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route
              exact path='/signup'
              render={props => (
              <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route exact path="/list" render={props => (<Contacts state={this.state} />)} />
            <Route exact path="/new" component={NewContact} />
            <Route exact path="/:email" component={Contact} />
            <Route exact path="/edit/:email" component={Contact} />
          </Switch>
        </div>
    )
  }
}

export default App
