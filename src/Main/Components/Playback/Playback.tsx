import React from 'react';
import { useSelector } from 'react-redux';

import { fontSettingsSelector, playbackSelector } from '../../Store/selectors';
import SpotifyIcon from '../../../Assets/img/SpotifyIconBlack.png';

import s from './Playback.module.scss';

export const Playback = () => {
  const playbackColor = useSelector(fontSettingsSelector);
  const { isPlaying, artist, song, album, artwork, showArtwork } = useSelector(playbackSelector);

  const userStyles = {
    color: playbackColor,
  };

  const artworkStyle = {
    backgroundImage: `url(${artwork})`,
  };

  return (
    <>
      <div className={s.PlaybackSpotifyLogoContainer}>
        <img src={SpotifyIcon} alt="Spotify icon" />
      </div>
      {isPlaying && <h3 style={userStyles}>Now playing:</h3>}
      <div className={s.Playback} style={userStyles}>
        {showArtwork && <div className={s.PlaybackArtwork} style={artworkStyle} />}

        <div className={s.PlaybackInfo}>
          <div className={s.PlaybackArtistContainer}>
            <h3>{artist ? artist : 'Nothing is playing'}</h3>
            <h2>{song ? song : 'Nothing is playing'}</h2>
            <h3 className={s.PlaybackAlbum}>{album ? album : 'Nothing is playing'}</h3>
          </div>
        </div>
      </div>
    </>
  );
};
