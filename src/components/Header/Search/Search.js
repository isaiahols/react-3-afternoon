import React, { Component } from 'react';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   text: ''
    // };
    // this.updateSearch = this.updateSearch.bind(this);
  }

  // // searching(e) {
  // //   this.props.searchPostsFn(e.target.value);
  // // }

  // updateText(val) {
  //   this.setState({
  //     text: val
  //   });

  //   this.updateSearch(this.state.text);
  // }

  // updateSearch(text) {
  //   console.log('Search State is: ' + text);
  //   this.props.searchPostsFn(text);
  // }

  render() {
    const { searchPostsFn } = this.props;
    // console.log(this.state.text);
    return (
      <section className="Search__parent">
        <div className="Search__content">
          <input
            placeholder="Search Your Feed"
            onChange={e => searchPostsFn(e.target.value)}
          />

          <SearchIcon id="Search__icon" />
        </div>
      </section>
    );
  }
}
