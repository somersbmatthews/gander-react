import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import './App.css';

class App extends React.Component{
  render() {
    let routes = (
      <Switch>
        <Route path="/home" component={LandingPage} />
        <Redirect to="/" />
      </Switch>

    )

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>

    )

  }
}

export default App;
