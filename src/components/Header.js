import React from 'react';
import "./Header.css";

function Header () {
    return (
        <>
            <nav className="navbar  ">
                <span className="navbar-brand mb-0 h1">Employee Directory</span>
            </nav>
            <div className="jumbotron rounded-0">
                <h1 className="display-4 row justify-content-md-center ">Contacts</h1>
            </div>
        </>

    );
};

export default Header;