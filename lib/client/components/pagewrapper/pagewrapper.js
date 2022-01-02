import React from 'react';
import './pagewrapper.scss';

const Pagewrapper = ({ children }) => {
  return (
    <div className="pageWrapper">
      {children}
    </div>
  );
};

export default Pagewrapper;