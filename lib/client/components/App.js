import React from 'react';
import { CategoriesContextProvider } from '../contexts/CategoriesContext';
import Header from './header/Header';

export const App = () => {
    return (
      <CategoriesContextProvider>
       <Header />
      </CategoriesContextProvider>
    );
};
