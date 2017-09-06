import React, { Component } from 'react';
import $ from 'jquery';

import QuoteContent from './QuoteContent';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      quoteText: "",
      quoteAuthor: ""
    };


    this.getQuote = this.getQuote.bind(this);
  }

  componentWillMount() {
    this.getQuote();
  }

  getQuote() {
    $.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&lang=en&format=jsonp&jsonp=?",
      success: (res) => {
        this.setState({
          quoteText: res.quoteText,
          quoteAuthor: res.quoteAuthor
        })
      }
    });
  }

  render() {
    return (
      <div id="quote-box">
        <QuoteContent quoteText={this.state.quoteText} quoteAuthor={this.state.quoteAuthor} />
        <div className="quoteBtns">
          <a id="tweet-quote" className="icon-twitter"href={`https://twitter.com/intent/tweet?text=${this.state.quoteText}-${this.state.quoteAuthor}`} target="_blank"></a>
          <button id="new-quote" onClick={this.getQuote}>New Quote</button>
        </div>
        <a href="https://github.com/CollinPerkins/reactRandomQuoteMachine" className="githubLink" target="_blank">GitHub</a>
      </div>
    );
  }
}
