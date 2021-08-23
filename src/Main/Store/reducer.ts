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
    showArtwork: boolean;
  };
  playback: {
    isPlaying: boolean;
    artist: string;
    album: string;
    song: string;
    artwork: string;
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
    showArtwork: true,
  },
  playback: {
    isPlaying: false,
    artist: '',
    album: '',
    song: '',
    artwork: 'https://via.placeholder.com/100',
  },
};

export const reducer = (state: MainStore = initialState, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case EUserActionsTypes.USER_SET_TOKEN: {
      return {
        ...state,
        userId: payload,
        error: null,
      };
    }

    case EUserActionsTypes.USER_SET_TOKEN_FAILURE: {
      return {
        ...state,
        error: payload,
      };
    }

    // Settings actions
    case ESettingsActionsTypes.SETTINGS_SHOW_FOOTER: {
      return {
        ...state,
        settings: {
          ...state.settings,
          showFooter: payload,
        },
      };
    }

    case ESettingsActionsTypes.SETTINGS_CHANGE_COLOR: {
      return {
        ...state,
        settings: {
          ...state.settings,
          fontColor: payload,
        },
      };
    }

    default:
      return state;
  }
};
