import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Form from './Form'

const Home = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Form} exact={true} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Home;