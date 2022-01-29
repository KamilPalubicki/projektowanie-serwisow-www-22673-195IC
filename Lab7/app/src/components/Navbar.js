import * as React from 'react';
import {Link} from "react-router-dom";


function Navbar(){
    return(
            <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
                <Link className="navbar-brand ms-3" to="/">Strony</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/1">Pierwsza</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/2">Druga</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/3">Trzecia</Link>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}

export default Navbar;