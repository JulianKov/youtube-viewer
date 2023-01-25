import React, { Component } from "react";

interface IProps {
  onSearchTermChange: (term: string) => void
}

interface IState {
  term: string;
}

class SearchBar extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { term: "" };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={(event) => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  /**
   * Function that is being called every time the input has been changed
   * @param {*} term
   */
  onInputChange(term: string) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
