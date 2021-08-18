import { AnyAction } from 'redux';
import { EUserActionsTypes, ESettingsActionsTypes } from './actionTypes';

interface MainStore {
  pending: boolean;
  error: null | Error;
  userId: string;
  settings: {
    fontColor: string;
    backgroundImage: string;
    showRecent: boolean;
    showPlaceholderTitle: boolean;
    placeholderTitle: string;
    showPlaceholderText: boolean;
    placeholderText: string;
    showPlaceholderSubtitle: boolean;
    placeholderSubtitle: string;
    showFooter: boolean;
  };
}

export const initialState: MainStore = {
  pending: false,
  error: null,
  userId: '',
  settings: {
    fontColor: '#222222',
    backgroundImage: '',
    showRecent: false,
    showPlaceholderTitle: true,
    placeholderTitle: 'You can change me in the settings',
    showPlaceholderText: true,
    placeholderText: 'Me too!',
    showPlaceholderSubtitle: true,
    placeholderSubtitle: 'Me three.',
    showFooter: true,
  },
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

    case ESettingsActionsTypes.SETTINGS_SHOW_FOOTER: {
      return {
        ...state,
        settings: {
          ...state.settings,
          showFooter: payload,
        },
      };
    }

    default:
      return state;
  }
};
