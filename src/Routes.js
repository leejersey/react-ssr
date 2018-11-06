import React from 'react';

import App from './App';
import Home from './containers/Home';
import Login from './containers/Login';

export default [{
  path: "/",
  component: App,
  routes: [
    {
      path: "/",
      component: Home,
      exact:true,
      loadData: Home.loadData,
      key: 'home',
    },
    {
      path: "/login",
      component: Login,
      exact:true,
      key: 'login'
    }
  ]
}];
