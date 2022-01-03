import React, { useContext } from 'react';
import './breadcrumbs.scss';
import {Link, useParams} from 'react-router-dom';
import { CategoriesContext } from '../../contexts/CategoriesContext';

const Breadcrumbs = () => {
  const params = useParams();
  const [ { data } ] = useContext(CategoriesContext);
  
  if (!data) {
    return null;
  }
  
  const category = data.find(cat => cat.id === params.categoryId);
  const crumbs = [
    { label: 'Hem', url: '/', clickable: true },
    { label: category.name, url: `/category/${category.id}`, clickable: !!params.subcategoryId }
  ];

  if (params.subcategoryId) {
    const subCategory = category.children.find(child => child.id === params.subcategoryId);
    crumbs.push({
      label: subCategory.name,
      url: `/category/${category.id}/subcategory/${subCategory.id}`,
      clickable: false,
    });
  }

  return (
    <div className="breadcrumbs">
      {crumbs.map((crumb, idx) => (
        <React.Fragment>
          <Link className={crumb.clickable ? 'crumb' : 'crumb-non-click'} to={crumb.url}>
            {crumb.label}
          </Link>
          {idx < crumbs.length - 1 ? <img className="icon" src="/icons/arrow-right.svg"/> : null}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Breadcrumbs;