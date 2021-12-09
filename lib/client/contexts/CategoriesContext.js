import React from 'react';
import { createContext, useCallback, useReducer } from 'react';
import categoryService from 'api/categoryService';
import baseData from './baseData';

export const CategoriesContext = createContext([baseData], () => '');

export const CategoriesContextProvider = ({ children }) => {
  const reducer = (prevState, updatedProperty) => ({
    ...prevState,
    ...updatedProperty,
  });

  const [categoriesState, setCategoriesState] = useReducer(reducer, {
    loading: null,
    error: null,
    errorCode: null,
    data: null,
  });

  const fetchCategories = useCallback(async () => {
    setCategoriesState({
      loading: true,
      error: null,
    });

    try {
      const categories = categoryService.getCategories();
      setCategoriesState({
        loading: false,
        error: null,
        data: categories,
      });
    } catch (err) {
      setCategoriesState({
        loading: false,
        error: err
      })
    }
  }, []);

  return (
    <CategoriesContext.Provider value={[categoriesState, fetchCategories]}>
      {children}
    </CategoriesContext.Provider>
  );
};