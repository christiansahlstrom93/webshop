import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CategoriesContextProvider } from '../contexts/CategoriesContext';
import Footer from './footer/footer';
import Topbar from './topbar/topbar';
import { HOMEPAGE, CATEGORYPAGE, SUBCATEGORYPAGE } from '../../shared/routes';
import Homepage from '../pages/homepage/homepage';
import Categorypage from '../pages/categorypage/categorypage';
import Subcategorypage from '../pages/subcategorypage/Subcategorypage';
import Sidebar from './sidebar/sidebar';
import Pagewrapper from './pagewrapper/pagewrapper';
import { SidebarContextProvider } from '../contexts/SidebarContext';

export const App = () => {
  return (
    <CategoriesContextProvider>
      <SidebarContextProvider>
        <Topbar />
        <Pagewrapper>
          <Sidebar />
          <Routes>
            <Route path={HOMEPAGE} element={<React.Fragment><Homepage /></React.Fragment>} />
            <Route path={CATEGORYPAGE} element={<React.Fragment><Categorypage /></React.Fragment>} />
            <Route path={SUBCATEGORYPAGE} element={<React.Fragment><Subcategorypage /></React.Fragment>} />
          </Routes>
        </Pagewrapper>
        <Footer />
      </SidebarContextProvider>
    </CategoriesContextProvider>
  );
};
