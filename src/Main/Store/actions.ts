import { EUserActionsTypes, ESettingsActionsTypes } from './actionTypes';
import { TDispatch } from '../../Store/reducer';
import { getPlayback } from '../../Api';

export const setUserToken = (userToken: string) => (dispatch: TDispatch) => {
  dispatch({ type: EUserActionsTypes.USER_SET_TOKEN, payload: userToken });
};

export const changeShowFooter = (showFooter: boolean) => (dispatch: TDispatch) => {
  dispatch({ type: ESettingsActionsTypes.SETTINGS_SHOW_FOOTER, payload: showFooter });
};

export const changeFontColor = (newColor: string) => (dispatch: TDispatch) => {
  dispatch({ type: ESettingsActionsTypes.SETTINGS_CHANGE_COLOR, payload: newColor });
};

export const setCurrentPlayback = () => async (dispatch: TDispatch) => {
  const currentPlayback = await getPlayback();
  const formattedPlayback = {
    artist: currentPlayback?.item?.artists[0].name,
    album: currentPlayback?.item?.album.name,
    song: currentPlayback?.item?.name,
    artwork: currentPlayback?.item?.album.images[1].url,
    isPlaying: currentPlayback?.is_playing,
  };
  dispatch({ type: EUserActionsTypes.USER_SET_CURRENT_PLAYBACK, payload: formattedPlayback });
};
