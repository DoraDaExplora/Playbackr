import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { footerSettingsSelector } from './Main/Store/selectors';

import { Landing } from './Landing/';
import { Main } from './Main';
import { Footer } from './Footer/';

import s from './App.module.scss';

function App() {
  const showFooter = useSelector(footerSettingsSelector);
  return (
    <div className={s.App}>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/now-playing" component={Main} />
        </Switch>
      </Router>
      {showFooter && <Footer />}
    </div>
  );
}

export default App;
