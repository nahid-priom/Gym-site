import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { HelmetProvider } from "react-helmet-async";


const Home = lazy(() => import("./pages/Home"));

const App = () => (
  <HelmetProvider>
    <Router>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </HelmetProvider>
);

export default App;
