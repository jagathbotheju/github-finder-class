import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types'; //impt - props type checking
import { Link } from 'react-router-dom';
import {} from 'react-bootstrap';

const Navbar = ({ title }) => {
  return (
    <nav className='navbar navbar-expand navbar-dark bg-danger'>
      <span className='navbar-brand h1'>
        <FontAwesomeIcon icon={['fab', 'github']} />
        {title}
      </span>

      <ul className='navbar-nav ml-auto'>
        <li className='nav-item active'>
          <Link to='/' className='nav-link'>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/about' className='nav-link'>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

export default Navbar;
