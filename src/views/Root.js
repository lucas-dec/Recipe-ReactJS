import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import RecommendedView from "./RecommendedView";
import MainCourseView from "./MainCourseView";
import CoctailsView from "./CoctailsView";
import SaladView from "./Salad";
import DetailsView from "./DetailsView";

function Root() {
  return (
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
  );
}

export default Root;
