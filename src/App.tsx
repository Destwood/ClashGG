import React from "react";
import "./App.scss";
import Header from "./shared/modules/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAppSelector } from "./shared/hooks/redux";
import AuthModal from "./shared/modules/Modal/Modal";

function App() {
  const authModalState = useAppSelector((state) => state.authModal);
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={""} />
        </Routes>
        {/* Modals */}

        {authModalState.isOpen && <AuthModal />}
      </div>
    </Router>
  );
}

export default App;
