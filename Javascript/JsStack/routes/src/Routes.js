import React from 'react';
import { Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { NotFound } from './pages/NotFound';
import { Posts } from './pages/Posts';

export function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/posts" component={Posts} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}
