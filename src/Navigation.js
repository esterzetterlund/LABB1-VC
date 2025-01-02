import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css'; // Din CSS-fil

const Navigation = () => {
  return (
    <div>
      <header className="main-header">
        <h1>Ester Zetterlund</h1>
      </header>
      <nav className="main-menu">
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Hem
            </NavLink>
          </li>
          <li>
            <NavLink to="/om-mig" activeClassName="active">
              Om mig
            </NavLink>
          </li>
          <li>
            <NavLink to="/cv" activeClassName="active">
              CV
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" activeClassName="active">
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/kontakt" activeClassName="active">
              Kontakt
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
