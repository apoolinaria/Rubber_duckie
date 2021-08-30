import React from 'react';
import logo from '../dist/logo.jpg';
// const logo =
// 'https://lilalu-shop.com/media/image/3e/ca/ae/lilalu-quietscheente-weiss-white-rubber-duck-gummiente-F.png';
const Header = () => {
  return (
    <div className="header">
      <div className="image">
        <img src={logo}></img>
      </div>
    </div>
  );
};
export default Header;
