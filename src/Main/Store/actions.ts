import { EUserActionsTypes, ESettingsActionsTypes } from './actionTypes';
import { TDispatch } from '../../Store/reducer';

export const setUserToken = (userToken: string) => (dispatch: TDispatch) => {
  dispatch({ type: EUserActionsTypes.USER_SET_TOKEN, payload: userToken });
};

export const changeShowFooter = (showFooter: boolean) => (dispatch: TDispatch) => {
  dispatch({ type: ESettingsActionsTypes.SETTINGS_SHOW_FOOTER, payload: showFooter });
};

export const changeFontColor = (newColor: string) => (dispatch: TDispatch) => {
  dispatch({ type: ESettingsActionsTypes.SETTINGS_CHANGE_COLOR, payload: newColor });
};
