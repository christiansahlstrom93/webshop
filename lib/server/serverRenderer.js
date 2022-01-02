import React from 'react';
import ReactDomServer from 'react-dom/server';
import { StaticRouter } from "react-router-dom/server";
import { App } from 'components/App';

export const renderIndex = (req) => ReactDomServer.renderToString(
  <StaticRouter location={req.url}>
    <App />
  </StaticRouter>
);
