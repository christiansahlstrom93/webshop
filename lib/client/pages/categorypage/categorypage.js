import React, { useContext, useEffect } from 'react';
import './categorypage.scss';
import { CategoriesContext } from '../../contexts/CategoriesContext';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';

const Categorypage = () => {
  const [, fetchCategories ] = useContext(CategoriesContext);

  useEffect(() => {
    fetchCategories()
  }, []);

  return (
    <div className="categorypage">
      <Breadcrumbs />
    </div>
  );
}

export default Categorypage;