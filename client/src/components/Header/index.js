import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header>
            <div>
                <Link to="/">
                    <h1>COLD CASE CENTRAL</h1>
                </Link>
                <div className="double-border"></div>
                <nav>
                    <div>
                        Today's Date
                    </div>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </nav>
                <div className="double-border"></div>
            </div>
        </header>
    )
};

export default Header;