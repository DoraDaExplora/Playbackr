import React from 'react';

import { Landing } from './Landing/';
import { Footer } from './Footer/';

import s from './App.module.scss';

function App() {
  return (
    <div className={s.App}>
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
