export const pendingSelector = (state: any) => state.main.pending;

export const settingsSelector = (state: any) => state.main.settings;
export const footerSettingsSelector = (state: any) => settingsSelector(state).showFooter;

export const playbackSelector = (state: any) => state.main.playback;
