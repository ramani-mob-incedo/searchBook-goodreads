import React, { Component } from "react";
import BookDetail from "./components/BookDetail";
import Search from "./components/Search";

class App extends Component {
  state = {
    results: [],
    expandedBook: null
  };

  setResults = results => {
    this.setState({ results });
  };

  collapseBook = () => {
    this.setState({
      expandedBook: null
    });
  };

  expandBook = expandedBook => {
    this.setState({ expandedBook });
  };

  render() {
    return (
      <div className="container">
        <div className="header clearfix mt-5">
          <h3 className="text-muted">Goodreads Book Search</h3>
        </div>
        <div className="jumbotron">
          {this.state.expandedBook ? (
            <BookDetail
              bookData={this.state.expandedBook}
              collapseBook={this.collapseBook}
            />
          ) : (
            <Search
              results={this.state.results}
              setResults={this.setResults}
              expandBook={this.expandBook}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
