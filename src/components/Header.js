import React from 'react';
import Logo from '../../public/images/Grato.png';

const Header = (props) => (
  <div className="header">
    <div className="container">
      <img src={Logo} alt="Logo" />
      {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
    </div>
  </div>
);

Header.defaultProps = {
  title: 'Grato'
};

export default Header;
