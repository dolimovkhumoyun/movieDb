import React from "react";
import AppContent from "../Content/AppContent";
import MovieContextProvider from "../../../context/MovieContext";

const AppLayout = () => {
  return (
    <MovieContextProvider>
      <AppContent />
    </MovieContextProvider>
  );
};

export default AppLayout;
