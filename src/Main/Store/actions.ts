import { EUserActionsTypes } from './actionTypes';
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
