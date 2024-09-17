import React from "react";
import "./App.scss";
import Header from "./shared/modules/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={""} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
