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
        render={props => <route.component {...props} routes={route.routes} />}
      />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        {routes.map(route => (
          <RouteWithSubRoutes key={`${route.path}`} {...route} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
