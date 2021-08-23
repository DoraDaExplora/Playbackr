import Spotify from 'spotify-web-api-js';

const s = new Spotify();

export const setAccessToken = (accessToken: string) => {
  s.setAccessToken(accessToken);
};
