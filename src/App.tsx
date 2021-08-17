import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { Landing } from './Landing/';
import { Main } from './Main';
import { Footer } from './Footer/';

import s from './App.module.scss';

function App() {
  return (
    <div className={s.App}>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/now-playing" component={Main} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
