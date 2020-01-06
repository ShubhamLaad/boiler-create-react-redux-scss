
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import Root from '../components/Root/Root';
import DashboardPage from '../pages/DashboardPage/DashboardPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

const AppRoutes = () => (
  <Provider store={store} >
    <BrowserRouter>
      <Switch>
        <Root path="/">
          <Switch>
            <Route
              exact
              path="/"
              name="dashboard"
              component={DashboardPage}
            />
            <Route
              path="*"
              component={NotFoundPage}
            />
          </Switch>
        </Root>
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default AppRoutes;