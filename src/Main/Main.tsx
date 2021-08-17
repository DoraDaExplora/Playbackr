import React from 'react';
import s from './Main.module.scss';

export const Main = () => {
  return (
    <div className={s.Landing}>
      <div className={s.LandingContainer}>
        <h1>
          Playbackr<span className={s.LandingHighlight}>.</span>
        </h1>
        <h2>Generate dynamic Spotify playback pages for your stream.</h2>
        {/*TODO: add the "Login with Spotify" button here.*/}
      </div>
    </div>
  );
};
