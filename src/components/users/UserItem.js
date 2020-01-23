//rce - generate class based component
//to select multiple same words, first select one and keep pressing Ctrl+D and edit
//UserItem - single user and props
//this is class based component
//but since no state we convert it to functional component
//we can use like 'function UserItem(){...}' , but we use arrow function

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  //implementing component state
  //constructor is not a good place to state
  /*constructor() {
    super();
    this.state = {
      id: 'id',
      login: 'octocat',
      avatar_url: 'https://avatars0.githubusercontent.com/u/597302?v=4',
      html_url: 'https://github.com/octocat'
    };
  }*/

  //declaring state, proper way
  //user are passing as props from Users.js so this state is not required
  /*state = {
    id: 'id',
    login: 'octocat',
    avatar_url: 'https://avatars0.githubusercontent.com/u/597302?v=4',
    html_url: 'https://github.com/octocat'
  };*/

  //destructing state
  //const { login, avatar_url, html_url } = props.user;

  return (
    <div className='text-center card border-0'>
      <img
        src={avatar_url}
        alt=''
        className='rounded-circle mx-auto card-img-top'
        style={{ width: '60px' }}
      />
      <div className='card-body'>
        <h5 className='card-title'>{login}</h5>
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired //ptor
};

export default UserItem;
