import React from "react";
import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import history from "utils/history";
import configureStore from "store/configureStore";
import Heading from "components/heading/Heading";
import Monitoring from "containers/monitoring/Monitoring";
import Statistics from "containers/statistics/Statistics";
import "./App.scss";

const store = configureStore();

export default () => (
  <Provider store={store}>
    <Router history={history}>
      <div className="app">
        <Heading />
        <Switch>
          <Route exact={true} path="/" component={Monitoring} />
          <Route exact={true} path="/statistics/:id" component={Statistics} />
        </Switch>
      </div>
    </Router>
  </Provider>
);
