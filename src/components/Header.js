import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
    <div>
        <nav>
            <h3><Link to="/">Home</Link></h3>
            <h3><Link to="/projects">Projects</Link></h3>
            <h3>About</h3>
            <h3>Contact</h3>
        </nav>
    </div>
    )
}

export default Header;