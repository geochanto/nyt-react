import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    begin_date: "YYYYMMDD",
    end_date: "YYYYMMDD",
    results: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  // componentDidMount() {
  //   this.searchGiphy("kittens");
  // }

  searchNYT = query => {
    API.search(query, this.state.begin_date, this.state.end_date)
      // .then(res => console.log(res.data), this.setState({ results: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchNYT(this.state.search);
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default SearchResultContainer;
