import React from 'react';
import Contacts from './Contacts/Contacts';
import Contact from './Contact/Contact';
import NewContact from './Contact/NewContact';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return(
      <div>
        <Switch>
          <Route exact path="/" component={Contacts} />
          <Route exact path="/new" component={NewContact} />
          <Route exact path="/:email" component={Contact} />
          <Route exact path="/edit/:email" component={Contact} />
        </Switch>
      </div>
    )
  }
}

export default App
