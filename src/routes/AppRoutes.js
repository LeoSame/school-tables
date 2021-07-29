import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PageInfo from '../components/PageInfo/PageInfo';
import TableVisits from '../components/TableVisits/TableVisits';

const AppRoutes = () => {
  return (
    <Switch>
      <Redirect exact from='/' to='/table' />
      <Route exact path='/table'>
        <TableVisits />
      </Route>
      <Route exact path='/page-info'>
        <PageInfo />
      </Route>
    </Switch>
  );
};

export default AppRoutes;
