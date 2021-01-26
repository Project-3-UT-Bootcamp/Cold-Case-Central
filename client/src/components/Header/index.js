import React from 'react';

const Header = () => {

    return (
        <header>
            <div>
                <h1>COLD CASE CENTRAL</h1>
                <div className="double-border"></div>
                <nav>
                    <div>
                        Today's Date
                    </div>
                    <ul>
                        <li>Login</li>
                        <li>SignUp</li>
                    </ul>
                </nav>
                <div className="double-border"></div>
            </div>
        </header>
    )
};

export default Header;