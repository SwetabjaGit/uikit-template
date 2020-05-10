import React from "react";
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';

// Components
import Dashboard from './views/Dashboard';
import Article from './views/Article';
import Album from './views/Album';
import Cover from './views/Cover';
import Cards from './views/Cards';
import NewsBlog from './views/NewsBlog';
import Price from './views/Price';
import Login from './views/Login';
import LoginDark from './views/LoginDark';

const history = createBrowserHistory();


const App = () => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/article" component={Article} />
          <Route exact path="/album" component={Album} />
          <Route exact path="/cover" component={Cover} />
          <Route exact path="/cards" component={Cards} />
          <Route exact path="/newsblog" component={NewsBlog} />
          <Route exact path="/price" component={Price} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logindark" component={LoginDark} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
