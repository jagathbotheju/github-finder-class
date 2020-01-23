import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    //it is better to search in centralized location App.js
    //we have to pass this.state.text(search criteria) up to the App.js
    //sending things up and down through pops - better use context api or redux
    if (this.state.text === '') {
      this.props.setAlert('Please Enter something...', 'light');
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };

  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form className='form' onSubmit={this.onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              name='text'
              value={this.state.text}
              onChange={this.onChange}
              placeholder='Search Users...'
              className='form-control m-2'
            />
            <input
              type='submit'
              value='search'
              className='btn btn-dark btn-block m-2'
            />
          </div>
        </form>
        {showClear && (
          <button
            className='btn btn-secondary btn-block m-2'
            onClick={clearUsers}
          >
            clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
