import { Collapse } from 'bootstrap';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {



    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-extend-lg">

                <Link to="/" className="navbar-brand"> Exercise Tracker</Link>

                <div className="collapse navbar-collapse">
                    <ul>
                        <li>
                            <Link to="/create" className="nav-link"> Create Exercise Log</Link>

                        </li>
                        <li>
                            <Link to="/user" className="nav-link"> Create User</Link>
                        </li>

                    </ul>



                </div>
            </nav>
        );

    }
}
