import React, { useCallback, useContext } from 'react';
import { SidebarContext } from '../../contexts/SidebarContext';
import './topbar.scss';

const Topbar = () => {
  const [ sidebarState , updateState ] = useContext(SidebarContext);
  const onMenuClick = useCallback(() => updateState(!sidebarState.show), [sidebarState, updateState]);

  return (
    <span className="topbar">
      <div className="icon" onClick={onMenuClick}>
        <img src={`/icons/${sidebarState && sidebarState.show ? 'menu-open.svg' : 'menu.svg'}`} />
      </div>
      <a className="headline" href="/">
        Esthers
      </a>
    </span>
  );
}

export default Topbar;