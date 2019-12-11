import React from 'react';
import {
  CSSTransition
} from "react-transition-group";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

import Home from './pages/Home'

import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Promotions from './pages/Promotions';
import Promotion from './pages/Promotion';

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/promotions', name: 'Promotions', Component: Promotions },
  { path: '/promotions/:id', name: 'Promotion', Component: Promotion}
]

export default function RouterData() {
  return (
    <Router>
        <Navbar />
        {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        <Footer />
    </Router>
  );
}
