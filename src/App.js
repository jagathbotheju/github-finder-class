import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import './fontawesome';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

//better store Users here in the top component
//then we can pass users through props

const App = () => {
  //use render=props in route to pass down props
  /*<Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <Search setAlert={showAlert} />
                    <Users />
                  </Fragment>
                )}
              />*/

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div>
            <Navbar title='Github Finder' />
            <div className='container m-3'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
