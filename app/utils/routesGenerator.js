import React from 'react';
import { Switch, Route } from 'react-router-dom';

export const routesGenerator = routesArr => {
  const results = [];

  const collectRoutes = (routesToCollect, baseUrl = '') => {
    routesToCollect.forEach(ele => {
      if (ele.routes) {
        results.push({
          exact: ele.exact || false,
          path: baseUrl + ele.path,
          component: ele.component,
        });

        collectRoutes(ele.routes, ele.path);
        return;
      }

      results.push({
        exact: ele.exact || false,
        path: baseUrl + ele.path,
        component: ele.component,
      });
    });
  };

  collectRoutes(routesArr, '');

  return (
    <Switch>
      {results.map((ele, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Route key={index} {...ele} />
      ))}
    </Switch>
  );
};
