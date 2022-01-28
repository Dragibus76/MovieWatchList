import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <ul>
                <NavLink to="/" className={(nav) => nav.isActive ? "nav-active" : ""}>
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to="/films" className={(nav) => nav.isActive ? "nav-active" : ""}>
                        <li>Films</li>
                    </NavLink>
                    <NavLink to="/series" className={(nav) => nav.isActive ? "nav-active" : ""}>
                        <li>Series</li>
                    </NavLink>
                    <NavLink to="/watchlist" className={(nav) => nav.isActive ? "nav-active" : ""}>
                        <li>Coup de coeur</li>
                    </NavLink>
                </ul>
            </nav>
            <h1>MovieWatchList</h1>
        </div>
    );
};

export default Header;