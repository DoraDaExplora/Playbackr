import Spotify from 'spotify-web-api-js';

const s = new Spotify();

export const setAccessToken = (accessToken: string) => {
  s.setAccessToken(accessToken);
};

export const getTopArtists = () => {
  try {
    s.getMyTopArtists();
  } catch (err) {
    console.log(err);
  }
};

export const getPlayback = async () => {
  try {
    return await s.getMyCurrentPlaybackState();
  } catch (err) {
    console.error(err);
  }
};
