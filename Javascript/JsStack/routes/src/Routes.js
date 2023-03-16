import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Posts } from './pages/Posts';

export function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
      <Route path="/post" component={Posts} />
    </BrowserRouter>
  )
}
