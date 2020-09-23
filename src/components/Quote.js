import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuotes } from '../actions';
import { Spring } from 'react-spring/renderprops';

export class Quote extends Component {
  componentDidMount() {
    this.props.fetchQuotes();
  }
  handleClick = e => {
    this.props.fetchQuotes();
  };

  render() {
    return (
      <div>
        <Spring delay={3000} from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {({ opacity }) => (
            <div className="quoteCard" style={{ opacity }}>
              <div className="quoteText">
                <p>{this.props.quotes}</p>
                <small>{this.props.author}</small>
              </div>
              <button
                type="button"
                className="btn btn-light"
                onClick={this.handleClick}
              >
                Next Quote <span className="emoji">📝</span>
              </button>
            </div>
          )}
        </Spring>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  quotes: state.quotes,
  author: state.author
});

export default connect(mapStateToProps, { fetchQuotes })(Quote);
