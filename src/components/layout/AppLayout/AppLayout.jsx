import React, { Fragment } from "react";
import NavBar from "../NavBar/NavBar";
import AppContent from "../Content/AppContent";

const AppLayout = () => {
  return (
    <Fragment>
      <NavBar />
      <AppContent />
    </Fragment>
  );
};

export default AppLayout;
