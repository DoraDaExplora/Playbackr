import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeShowFooter } from './Store/actions';
import { footerSettingsSelector } from './Store/selectors';

import s from './Main.module.scss';

export const Main = () => {
  const dispatch = useDispatch();
  const showFooter = useSelector(footerSettingsSelector);

  // const handleUserLoad = () => {
  //   dispatch(userLoad());
  // };

  const handleShowFooter = () => {
    dispatch(changeShowFooter(!showFooter));
  };

  return (
    <div className={s.Landing}>
      <div className={s.LandingContainer}>
        <h1>
          Playbackr<span className={s.LandingHighlight}>.</span>
        </h1>
        <h2>Generate dynamic Spotify playback pages for your stream.</h2>
        {/*TODO: add the "Login with Spotify" button here.*/}
        <button onClick={handleShowFooter}> Test button </button>
      </div>
    </div>
  );
};
