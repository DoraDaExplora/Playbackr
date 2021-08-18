export const pendingSelector = (state: any) => state.main.pending;

export const settingsSelector = (state: any) => state.main.settings;
export const footerSettingsSelector = (state: any) => settingsSelector(state).showFooter;
export const fontSettingsSelector = (state: any) => settingsSelector(state).fontColor;

export const playbackSelector = (state: any) => state.main.playback;
