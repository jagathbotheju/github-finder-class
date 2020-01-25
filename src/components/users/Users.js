import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import { chunk } from 'lodash';
import { Container, Row, Col } from 'react-grid-system';
import uuid from 'react-uuid';
import GithubContext from '../../context/github/GithubContext';

const Users = () => {
  //better to move users state to top level component - App.js
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;
  const rows = chunk(users, 3);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Container>
        {rows.map(threesUsers => (
          <Row key={uuid()}>
            {threesUsers.map(oneUser => (
              <Col key={uuid()}>
                <UserItem key={oneUser.id} user={oneUser} />
              </Col>
            ))}
          </Row>
        ))}
      </Container>

      /*<div className='row bg-light p-2 border'>
        {users.map(user => (
          <div className='col' key={user.login}>
            <UserItem key={user.id} user={user} />
          </div>
        ))}
      </div>*/
    );
  }
};

export default Users;
