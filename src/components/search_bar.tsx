import React, { useState } from 'react';

interface IProps {
  onSearchTermChange: (term: string) => void
}

const SearchBar: React.FC<IProps> = ({onSearchTermChange}) => {
  const [term, setTerm] = useState("");
  
  const onInputChange = (searchString: string) => {
    setTerm(searchString);
    onSearchTermChange(searchString);
  }

  return (
    <div className="search-bar">
      <input
        value={term}
        onChange={(event) => onInputChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
