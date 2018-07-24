import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";
import { Container } from 'reactstrap';

class SearchResultContainer extends Component {
  state = {
    search: "",
    begin_date: "YYYYMMDD",
    end_date: "YYYYMMDD",
    results: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchNYT("obama","20010101","20100101");
  }

  searchNYT = query => {
    API.search(query, this.state.begin_date, this.state.end_date)
      .then(res => {
        this.setState({ results: res.data.response.docs })
      }
      )
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
      <Container>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.results} />
      </Container>
    );
  }
}

export default SearchResultContainer;
