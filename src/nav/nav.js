import React from "react";
import {Link} from 'react-router-dom';
const Nav = () => {
  return (
      <div className="nav">
        <h1 className="nav-header">Логотип</h1>

        <Link className='nav-btn' to='/form/'>
          <button className="nav-btn">Форма</button>
        </Link>
    </div>
  );
};

export default Nav;
