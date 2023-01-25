import { ActionTypes } from '../action-types';

export interface SearchAction {
  type: ActionTypes.SET_SEARCH;
  payload: string;
}
