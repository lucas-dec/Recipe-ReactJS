import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import RecommendedView from "./RecommendedView";
import MainCourseView from "./MainCourseView";
import CoctailsView from "./CoctailsView";
import SaladView from "./Salad";
import DetailsView from "./DetailsView";

function Root() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={RecommendedView} />
      <Route exact path="/maincourse" component={MainCourseView} />
      <Route path="/maincourse/:id" component={DetailsView} />

      <Route exact path="/coctails" component={CoctailsView} />
      <Route path="/coctails/:id" component={DetailsView} />

      <Route exact path="/salad" component={SaladView} />
      <Route path="/salad/:id" component={DetailsView} />
    </BrowserRouter>
  );
}

export default Root;
