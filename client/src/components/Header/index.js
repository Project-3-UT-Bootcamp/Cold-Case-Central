import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {
    const logout = event => {
        event.preventDefault();
        Auth.logout();
      };

    return (
        <header>
            <div>
                <Link to="/">
                    <h1>COLD CASE CENTRAL</h1>
                </Link>
                <div className="double-border"></div>
                <nav className="text-center">
                    {Auth.loggedIn() ? (
                        <>
                            {/* <Link to="/profile">Me</Link> */}
                            <a href="/" onClick={logout}>
                                Logout
                            </a>
                        </>
                    ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </>
                    )}
                </nav>
                <div className="double-border"></div>
            </div>
        </header>
    )
};

export default Header;