
import React from 'react';
// import { connect } from 'react-redux';

// import { logout } from '../../actions/auth';
// import Link from '../router/Link';
import Logo from './logo';

export const Navigation = ({user, handleLogout}) => (
    <nav className="navbar">
        <Logo logoOnly={false} />
        {
          user?.authenticated ? (
            <span className="user-nav-widget">
            <span>{user.name}</span>
            <img width={40} className="img-circle" src={user.profilePicture} alt={user.name} />
            <span onClick={handleLogout}>
                <i className="fa fa-sign-out" />
            </span>
        </span>
          ) : (
            <button type="button:block">Log in or sign up</button>
          )
        }
    </nav>
);


export default Navigation;
