import React from 'react';
import HomePage from './HomePage';
import LeaderPage from './LeaderPage'
import { Route, Switch, BrowserRouter } from 'react-router-dom';
const Root: React.FunctionComponent = () => {
      return (
        <BrowserRouter>
          <Switch>
            <Route exact={true} path={'/'} component={HomePage} />
            <Route exact={true} path={'/leader/:id'} component={LeaderPage} />
            <Route path="*" component={HomePage} />
          </Switch>
        </BrowserRouter>
          
          
      );
  }

export default Root;