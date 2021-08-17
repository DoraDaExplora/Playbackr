import React from 'react';
import { useDispatch } from 'react-redux';

import { userLoad } from './Store/actions';

import s from './Main.module.scss';

export const Main = () => {
  const dispatch = useDispatch();
  const handleUserLoad = () => {
    dispatch(userLoad());
  };

  return (
    <div className={s.Landing}>
      <div className={s.LandingContainer}>
        <h1>
          Playbackr<span className={s.LandingHighlight}>.</span>
        </h1>
        <h2>Generate dynamic Spotify playback pages for your stream.</h2>
        {/*TODO: add the "Login with Spotify" button here.*/}
        <button onClick={handleUserLoad}> Test button </button>
      </div>
    </div>
  );
};
