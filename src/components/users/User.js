import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GithubContext from '../../context/github/GithubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { user, getUser, loading, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hirable
  } = user;

  if (loading) return <Spinner />;
  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back To Search
      </Link>
      Hirable:{''}
      {hirable ? (
        <FontAwesomeIcon
          icon={['far', 'check-circle']}
          className='text-success'
        />
      ) : (
        <FontAwesomeIcon
          icon={['far', 'times-circle']}
          className='text-danger'
        />
      )}
      <div className='card-columns'>
        <div className='card'>
          <div className='text-center'>
            <img
              src={avatar_url}
              alt='avatar url'
              style={{ width: '150px' }}
              className='rounded-circle card-img-top'
            />
            <div className='card-body'>
              <h2 className='card-title'>{name}</h2>
              <p>Location : {location}</p>
            </div>
          </div>
        </div>

        <div className='card'>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className='btn btn-dark btn-sm my-1'>
            Visit Github Profile
          </a>
          <ul className='list-unstyled'>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong>
                  {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong>
                  {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website: </strong>
                  {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card justify-content-center d-flex flex-row border-0'>
        <div className='badge badge-primary mx-2'>Followers : {followers}</div>
        <div className='badge badge-success mx-2'>Following : {following}</div>
        <div className='badge badge-warning mx-2'>
          Public Repos : {public_repos}
        </div>
        <div className='badge badge-dark mx-2'>
          Public Gists : {public_gists}
        </div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
