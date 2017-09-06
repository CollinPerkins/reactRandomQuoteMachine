import React, { Component } from 'react';

export default class QuoteContent extends Component {

  render() {
    return (
      <div className="quoteContent">
        <p id="text">{this.props.quoteText}</p>
        <p id="author">-{this.props.quoteAuthor}</p>
      </div>
    );
  }
}
