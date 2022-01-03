import React, { useContext, useEffect } from 'react';
import './subcategorypage.scss';
import { CategoriesContext } from '../../contexts/CategoriesContext';
import {useParams} from 'react-router-dom';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';

const Subcategorypage = () => {
  const [, fetchCategories ] = useContext(CategoriesContext);
  const params = useParams();

  useEffect(() => {
    fetchCategories()
  }, []);

  return (
    <div className="subcategorypage">
      <Breadcrumbs />
    </div>
  );
}

export default Subcategorypage;