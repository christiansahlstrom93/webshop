import React, { createContext, useReducer }  from 'react';

export const SidebarContext = createContext([]);

export const SidebarContextProvider = ({ children }) => {
  const reducer = (prevState, updatedProperty) => ({
    ...prevState,
    ...updatedProperty,
  });

  const [sidebarState, setSidebarState] = useReducer(reducer, {
    show: false,
  });

  const updateState = (newState) => setSidebarState({
    show: newState
  });

  return (
    <SidebarContext.Provider value={[sidebarState, updateState]}>
      {children}
    </SidebarContext.Provider>
  );
};