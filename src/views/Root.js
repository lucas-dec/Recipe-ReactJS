import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import RecommendedView from "./RecommendedView";
import MainCourseView from "./MainCourseView";
import CoctailsView from "./CoctailsView";
import SaladView from "./Salad";

function Root() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={RecommendedView} />
      <Route path="/maincourse" component={MainCourseView} />
      <Route path="/coctails" component={CoctailsView} />
      <Route path="/salad" component={SaladView} />
    </BrowserRouter>
  );
}

export default Root;
