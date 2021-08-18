import { EUserActionsTypes, ESettingsActionsTypes } from './actionTypes';
import { TDispatch } from '../../Store/reducer';

export const userLoad = () => async (dispatch: TDispatch) => {
  dispatch({ type: EUserActionsTypes.USER_LOAD_REQUEST });
  try {
    dispatch({ type: EUserActionsTypes.USER_LOAD_SUCCESS, payload: 'kek' });
  } catch (err) {
    console.error(err);
    dispatch({ type: EUserActionsTypes.USER_LOAD_FAILURE, payload: 'get out of here, por favor' });
  }
};

export const changeShowFooter = (showFooter: boolean) => (dispatch: TDispatch) => {
  dispatch({ type: ESettingsActionsTypes.SETTINGS_SHOW_FOOTER, payload: showFooter });
};

export const changeFontColor = (newColor: string) => (dispatch: TDispatch) => {
  dispatch({ type: ESettingsActionsTypes.SETTINGS_CHANGE_COLOR, payload: newColor });
};
