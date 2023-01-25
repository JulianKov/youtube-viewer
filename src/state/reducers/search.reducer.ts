import { SearchAction } from '../actions';
import { ActionTypes } from '../action-types';

const initialState = "";

const searchReducer = (state: string = initialState, action: SearchAction) => {
  switch (action.type) {
    case ActionTypes.SET_SEARCH:
      return action.payload;
    default:
      return state;
  }
}

export default searchReducer;

