import React, { Component } from "react";

import AppLayout from "./components/layout/AppLayout/AppLayout";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <AppLayout />
      </div>
    );
  }
}

export default App;
