import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'app/containers/HomePage/loadable';
import NotFoundPage from 'app/containers/NotFoundPage/loadable';

import routeTemplates from 'utils/routeTemplates';
import styled from 'styled-components';

const AppWrapper = styled.div`
  height: 100%;
`;

const App = props => {
  return (
    <AppWrapper>
      <Switch>
        <Route exact path={routeTemplates.root} component={HomePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </AppWrapper>
  );
};

App.propTypes = {};

export default App;
