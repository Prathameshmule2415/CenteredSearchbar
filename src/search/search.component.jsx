import React from "react";
import "./search.styles.css";
class Search extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  handleSubmit = (e) => {};
  render() {
    return (
      <div class="full-screen-wrapper">
        <div class="center">
          <h1>Federated Search</h1>
          <input type="textbox" onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default Search;
