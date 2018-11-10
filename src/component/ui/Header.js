import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = (props) => {
    const {title} = props;
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-info mb-3 py-0">
            <div className="container">
                <a href="/" className="navbar-brand">{title}</a>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact/add" className="nav-link">+Add</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
//just in case we didnt pass title
Header.defaultProps = {
    title: 'My App'
}
//check type
Header.propTypes = {
    title: PropTypes.string.isRequired
}
export default Header;