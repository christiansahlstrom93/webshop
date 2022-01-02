import React, { useContext, useEffect } from 'react';
import './sidebar.scss';
import { CategoriesContext } from '../../contexts/CategoriesContext';
import { SidebarContext } from '../../contexts/SidebarContext';

const Sidebar = () => {
  const [ categoryState, fetchCategories ] = useContext(CategoriesContext);
  const [ sidebarState ] = useContext(SidebarContext);

  useEffect(() => {
    fetchCategories()
  }, []);

  if (!categoryState.data) {
    return null;
  }

  const populateChildren = (children) => {
    if (!children || !children.length) {
      return null;
    }
    return (
      <div className="subcategory">
        {children.map(child => (
          <div>{child.name}</div>
          )
        )}
      </div>
    );
  };

  return (
    <div className={`sidebar ${sidebarState && sidebarState.show ? 'show' : ''}`}>
        {categoryState.data.map(category => (
          <div className="category">
            {category.name}
            {populateChildren(category.children)}
          </div>
        ))}
    </div>
  );
}

export default Sidebar;