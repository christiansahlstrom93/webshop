import React, { useContext, useEffect } from 'react';
import './homepage.scss';
import { CategoriesContext } from '../../contexts/CategoriesContext';

const Homepage = () => {
  const [ categoryState, fetchCategories ] = useContext(CategoriesContext);

  useEffect(() => {
    fetchCategories()
  }, []);

  if (categoryState.loading && !categoryState.data) {
    return 'Laddar produkter';
  }

  if (!categoryState.data) {
    return 'Kunde inte hitta något'
  }

  return (
    <div className="homepage">
        
    </div>
  );
}

export default Homepage;