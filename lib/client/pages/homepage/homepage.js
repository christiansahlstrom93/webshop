import React, { useContext, useEffect } from 'react';
import './homepage.scss';
import { CategoriesContext } from '../../contexts/CategoriesContext';

const Homepage = () => {
  const [, fetchCategories ] = useContext(CategoriesContext);

  useEffect(() => {
    fetchCategories()
  }, []);

  return (
    <div className="homepage">
        
    </div>
  );
}

export default Homepage;