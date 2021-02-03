import React from 'react';
import './style.css';
const Logo = (props) => {
  return (
    <img
      alt="Siglot"
      src="/static/siglot2.jpg"
      {...props}
    />
  );
};

export default Logo;