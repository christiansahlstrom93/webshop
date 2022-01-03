import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  const populateChildren = (category) => {
    if (!category.children || !category.children.length) {
      return null;
    }
    return (
      <div className="subcategory">
        {category.children.map(child => (
          <Link className="link" to={`/category/${category.id}/subcategory/${child.id}`}>{child.name}</Link>
          )
        )}
      </div>
    );
  };

  return (
    <div className={`sidebar ${sidebarState && sidebarState.show ? 'show' : 'hide'}`}>
        {categoryState.data.map(category => (
          <div className="category">
            <Link className="link" to={`/category/${category.id}`}>{category.name}</Link>
            {populateChildren(category)}
          </div>
        ))}
    </div>
  );
}

export default Sidebar;