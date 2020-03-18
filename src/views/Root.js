import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";

import store from "../store/index";
import RecommendedView from "./RecommendedView";
import MainCourseView from "./MainCourseView";
import CoctailsView from "./CoctailsView";
import SaladView from "./SaladView";
import DetailsView from "./DetailsView";

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/recommended" />} />
          <Route exact path="/recommended" component={RecommendedView} />
          <Route path="/recommended/:id" component={DetailsView} />

          <Route exact path="/maincourse" component={MainCourseView} />
          <Route path="/maincourse/:id" component={DetailsView} />

          <Route exact path="/coctails" component={CoctailsView} />
          <Route path="/coctails/:id" component={DetailsView} />

          <Route exact path="/salad" component={SaladView} />
          <Route path="/salad/:id" component={DetailsView} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default Root;
