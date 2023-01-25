import { ActionTypes } from '../action-types';
import { Dispatch } from 'redux';
import { SearchAction } from '../actions';

export const setSearch = (str: string) => {
  return (dispatch: Dispatch<SearchAction>) => {
    dispatch({
      type: ActionTypes.SET_SEARCH,
      payload: str,
    })
  }
}
