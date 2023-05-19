import React, { Fragment } from "react";
import { ExploreTopBooks } from "./components/ExploreTopBooks";
import { Carousel } from "./components/Carousel";
import { Heros } from "./components/Heros";
import { LibraryServices } from "./components/LibraryServices";


export const HomePage = () => {
  return (
    <Fragment>
      <ExploreTopBooks />
      <Carousel />
      <Heros />
      <LibraryServices />
    </Fragment>
  );
};
