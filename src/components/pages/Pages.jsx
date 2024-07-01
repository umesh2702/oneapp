import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import About from "../about/About";
import Pricing from "../pricing/Pricing";
import Blog from "../blog/Blog";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import Login from '../common/LoginSignup/Login';
import Signup from "../common/LoginSignup/Signup";
import Profile from "../Profile/Profile";
import Chat from "../Chat";

const Pages = () => {
  const [login, setLogin] = useState(false);
  const handleLogin = () => {
    setLogin(!login);
  };

  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' render={(props) => <Home {...props} login={login} handleLogin={handleLogin} />}  />
          <Route exact path='/login' render={(props) => <Login {...props} login={login} handleLogin={handleLogin} />} />
          <Route exact path='/register' render={(props) => <Signup {...props} login={login} handleLogin={handleLogin} />} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/profile' render={(props) => <Profile {...props} login={login} handleLogin={handleLogin} />} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/contact' component={Contact} />
          <Route path='/chat' component={Chat}/>
        </Switch>
      </Router>
    </>
  );
};

export default Pages;

