import { combineReducers } from 'redux'
import searchReducer from './search.reducer';

export const reducer = combineReducers({
  search: searchReducer
})

export type State = ReturnType<typeof reducer>
