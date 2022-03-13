import { combineReducers, AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import main from '../Main/Store/index';

export const rootReducer = combineReducers({
  main,
});

/**
 * Dispatch type
 *
 * @example Dispatch typing
 * export const testThunk = () => (dispatch: TDispatch) => {};
 */
export type TDispatch = ThunkDispatch<{}, {}, AnyAction>;

/**
 * Default action type
 *
 * @example Default action type
 * export const actions = {
 *   action1: (test: TTest) => ({ type: ETTestActionsTypes.SHOW, payload: test } as const),
 *   action2: () => ({ type: ETestActionsTypes.HIDE } as const),
 * };
 * export type TTestActions = TActionsTypes<typeof actions>
 */
export type TActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never;
