import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import CitiesList from '../pages/CitiesList';

const Routes: React.FC = () => {
  const routes = [
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/cities',
      component: CitiesList,
    },
  ];

  function RouteWithSubRoutes(route: any) {
    return (
      <Route
        path={route.path}
        render={props => (
          // pass the sub-routes down to keep nesting
          /* eslint-disable */ 
          <route.component {...props} routes={route.routes} />
          /* eslint-disable */ 
        )}
      />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        {routes.map(route => (
          /* eslint-disable */ 
          <RouteWithSubRoutes key={`${route.path}`} {...route} />
          /* eslint-disable */ 
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
