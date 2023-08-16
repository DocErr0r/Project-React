import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import NewsRfc from "./components/NewsRfc";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const apiKey = process.env.REACT_APP_API_KEY;

  const [progress, setProgress] = useState(0);
  document.body.style.backgroundColor='gray'
  return (
    <div className="bdy">
      <Router>
        <Navbar />
        <LoadingBar color="blue" height={3} progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <NewsRfc
                setProgress={setProgress}
                apiKey={apiKey}
                key="General"
                country="in"
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <NewsRfc
                setProgress={setProgress}
                apiKey={apiKey}
                key="Science"
                country="in"
                category="science"
              />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <NewsRfc
                setProgress={setProgress}
                apiKey={apiKey}
                key="Business"
                country="in"
                category="business"
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <NewsRfc
                setProgress={setProgress}
                apiKey={apiKey}
                key="Health"
                country="in"
                category="health"
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <NewsRfc
                setProgress={setProgress}
                apiKey={apiKey}
                key="Entertainment"
                country="in"
                category="entertainment"
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <NewsRfc
                setProgress={setProgress}
                apiKey={apiKey}
                key="Technology"
                country="in"
                category="technology"
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <NewsRfc
                setProgress={setProgress}
                apiKey={apiKey}
                key="Sports"
                country="in"
                category="sports"
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}
