import React, { useCallback, useState, useContext } from 'react';
import { SidebarContext } from '../../contexts/SidebarContext';
import './topbar.scss';

const Topbar = () => {
  const [menuOpen, setMenuState] = useState(false);
  const [, updateState ] = useContext(SidebarContext);
  const onMenuClick = useCallback(() => {
    setMenuState(!menuOpen);
    updateState(!menuOpen);
  }, [menuOpen, setMenuState]);

  return (
    <span className="topbar">
      <div className="icon" onClick={onMenuClick}>
        <img src={`/icons/${menuOpen ? 'menu-open.svg' : 'menu.svg'}`} />
      </div>
      <a className="headline" href="/">
        Esthers
      </a>
    </span>
  );
}

export default Topbar;