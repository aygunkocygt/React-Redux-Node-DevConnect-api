import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser, } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions';

import { Provider } from 'react-redux';
import store from './store';

import PrivateRoute from './component/common/PrivateRoute';

import Navbar from './component/layout/Navbar';
import Landing from './component/layout/Landing';
import Footer from './component/layout/Footer';
import Register from './component/auth/Register';
import Login from './component/auth/Login';
import Dashboard from './component/dashboard/Dashboard';
import CreateProfile from './component/create-profile/CreateProfile';
import EditProfile from './EditProfile/EditProfile';
import AddExperience from './component/add-credentials/AddExperience';
import AddEducation from './component/add-credentials/AddEducation';
import Profiles from './component/profiles/Profiles';
import Profile from './component/profile/Profile';
import NotFound from './component/not-found/NotFound';
import Posts from './component/posts/Posts';
import Post from './component/post/Post';

import './App.css';



// Check for token
if(localStorage.jwtToken){
    // Set auth token header auth
    setAuthToken(localStorage.jwtToken);
    // Decode token and get user info and exp
    const decoded = jwt_decode(localStorage.jwtToken);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));

    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());
        // Clear current profile
        store.dispatch(clearCurrentProfile());
        // Redirect to login
        window.location.href = '/login';
    }
}

class App extends Component {
  render() {
    return (
        <Provider store={ store }>
        <Router>
      <div className="App">
       <Navbar/>

        <Route exact path="/" component={ Landing } />
          <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/profile/:handle" component={Profile} />

              <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
              <Switch>
                  <PrivateRoute exact path="/create-profile" component={CreateProfile} />
              </Switch>
              <Switch>
                  <PrivateRoute exact path="/edit-profile" component={EditProfile} />
              </Switch>
              <Switch>
                  <PrivateRoute
                      exact
                      path="/add-experience"
                      component={AddExperience}
                  />
                  <PrivateRoute
                      exact
                      path="/add-education"
                      component={AddEducation}
                  />
              </Switch>
              <Switch>
                  <PrivateRoute
                      exact
                      path="/feed"
                      component={Posts}
                  />
              </Switch>
              <Switch>
                  <PrivateRoute
                      exact
                      path="/post/:id"
                      component={Post}
                  />
              </Switch>
              <Route exact path="/not-found" component={NotFound} />
          </div>

        <Footer/>
      </div>
        </Router>
        </Provider>
    );
  }
}

export default App;
