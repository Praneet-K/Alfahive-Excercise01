import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">Employee Details</a>
            <div className="collapse navbar-collapse pull-right" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/"><button className="nav-link active" aria-current="page" href="#">Home</button></Link>
                    <Link to="/display"><button className="nav-link" href="#">Display</button></Link>
                </div>
            </div>
        </div>
        </nav>
    )
}

export default Nav
