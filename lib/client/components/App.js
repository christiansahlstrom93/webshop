import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CategoriesContextProvider } from '../contexts/CategoriesContext';
import Footer from './footer/footer';
import { HOMEPAGE } from '../../shared/routes';
import Homepage from '../pages/homepage/homepage';
import Sidebar from './sidebar/sidebar';
import Pagewrapper from './pagewrapper/pagewrapper';
import { SidebarContextProvider } from '../contexts/SidebarContext';

export const App = () => {
  return (
    <CategoriesContextProvider>
      <SidebarContextProvider>
        <Pagewrapper>
          <Sidebar />
          <Routes>
            <Route path={HOMEPAGE} element={<React.Fragment><Homepage /></React.Fragment>} />
          </Routes>
        </Pagewrapper>
        <Footer />
      </SidebarContextProvider>
    </CategoriesContextProvider>
  );
};
