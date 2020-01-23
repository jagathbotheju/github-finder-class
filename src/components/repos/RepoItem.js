import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  return (
    <div className='card my-2'>
      <div className='card-body py-2'>
        <h5 className='card-title py-2'>
          <a href={repo.html_url}>{repo.name}</a>
        </h5>
      </div>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoItem;
