import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState('');

  const onChange = event => setText(event.target.value);

  const onSubmit = event => {
    event.preventDefault();
    //it is better to search in centralized location App.js
    //we have to pass this.state.text(search criteria) up to the App.js
    //sending things up and down through pops - better use context api or redux
    if (text === '') {
      alertContext.setAlert(' Please Enter something...', 'danger');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            type='text'
            name='text'
            value={text}
            onChange={onChange}
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
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-secondary btn-block m-2'
          onClick={githubContext.clearUsers}
        >
          clear
        </button>
      )}
    </div>
  );
};

export default Search;
