import { AnyAction } from 'redux';
import { EUserActionsTypes } from './actionTypes';

interface MainStore {
  pending: boolean;
  error: null | Error;
  userId: string;
}

export const initialState: MainStore = {
  pending: false,
  error: null,
  userId: '',
};

export const reducer = (state: MainStore = initialState, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case EUserActionsTypes.USER_LOAD_REQUEST: {
      return {
        ...state,
        pending: !state.pending,
        error: null,
        userId: '',
      };
    }

    case EUserActionsTypes.USER_LOAD_SUCCESS: {
      return {
        ...state,
        userId: payload,
        pending: false,
      };
    }

    case EUserActionsTypes.USER_LOAD_FAILURE: {
      return {
        ...state,
        error: payload,
        pending: false,
      };
    }

    default:
      return state;
  }
};
