import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../state/reducers';
import { actionCreators } from '../state'
import { bindActionCreators } from 'redux';

interface IProps {
  onSearchTermChange: (term: string) => void
}

const SearchBar: React.FC<IProps> = ({onSearchTermChange}) => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state: State) => state.search);
  
  const {setSearch} = bindActionCreators(actionCreators, dispatch);
  
  
  const onInputChange = (searchString: string) => {
    setSearch(searchString);
    onSearchTermChange(searchString);
  }

  return (
    <div className="search-bar">
      <input
        value={searchValue}
        onChange={(event) => onInputChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
