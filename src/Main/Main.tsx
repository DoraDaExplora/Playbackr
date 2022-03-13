import React from 'react';

import { Playback } from './Components/Playback';

import s from './Main.module.scss';

export const Main = () => {
  return (
    <div className={s.Main}>
      <Playback />
    </div>
  );
};
