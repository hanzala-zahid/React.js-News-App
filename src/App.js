import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const pageSize = 6;

  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route
            exact
            path="/home"
            element={
              <News
                key="general"
                pageSize={pageSize}
                country="us"
                category="general"
              />
            }
          />

          <Route
            exact
            path="/business"
            element={
              <News
                key="business"
                pageSize={pageSize}
                country="us"
                category="business"
              />
            }
          />

          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                pageSize={pageSize}
                country="us"
                category="entertainment"
              />
            }
          />

          <Route
            exact
            path="/sports"
            element={
              <News
                key="sports"
                pageSize={pageSize}
                country="us"
                category="sports"
              />
            }
          />

          <Route
            exact
            path="/science"
            element={
              <News
                key="science"
                pageSize={pageSize}
                country="us"
                category="science"
              />
            }
          />

          <Route
            exact
            path="/technology"
            element={
              <News
                key="technology"
                pageSize={pageSize}
                country="us"
                category="technology"
              />
            }
          />

          <Route
            exact
            path="/health"
            element={
              <News
                key="health"
                pageSize={pageSize}
                country="us"
                category="health"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
