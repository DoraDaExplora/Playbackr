import React from 'react';
import { debounce } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';

import { playbackSelector, settingsSelector } from '../../Store/selectors';
import { setCurrentPlayback, setUserToken } from '../../Store/actions';
import { getTopArtists, setAccessToken } from '../../../Api';
import SpotifyIcon from '../../../Assets/img/SpotifyIconBlack.png';

import s from './Playback.module.scss';

export const Playback = () => {
  const dispatch = useDispatch();
  const { isPlaying, artist, song, album, artwork } = useSelector(playbackSelector);
  const { showArtwork, playbackColor } = useSelector(settingsSelector);

  const userStyles = {
    color: playbackColor,
  };

  const artworkStyle = {
    backgroundImage: `url(${artwork})`,
  };

  const setUserAccessToken = () => {
    const urlSearchParams = new URLSearchParams(window.location.hash);
    const params = Object.fromEntries(urlSearchParams.entries());

    const accessToken = params['#access_token'];

    dispatch(setUserToken(accessToken));
    setAccessToken(accessToken);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getCurrentPlayback = debounce(() => {
    dispatch(setCurrentPlayback());
  }, 2500);

  React.useEffect(() => {
    setUserAccessToken();
    getTopArtists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    getCurrentPlayback();
  });

  return (
    <>
      <div className={s.PlaybackSpotifyLogoContainer}>
        <img src={SpotifyIcon} alt="Spotify icon" />
        {isPlaying && <h3 style={userStyles}>Now playing:</h3>}
      </div>
      <div className={s.Playback} style={userStyles}>
        {showArtwork && <div className={s.PlaybackArtwork} style={artworkStyle} />}

        <div className={s.PlaybackInfo}>
          <div className={s.PlaybackArtistContainer}>
            <h3>{isPlaying ? artist : 'Nothing is playing'}</h3>
            <h2>{isPlaying ? song : 'Nothing is playing'}</h2>
            <h3>{isPlaying ? album : 'Nothing is playing'}</h3>
          </div>
        </div>
      </div>
    </>
  );
};
