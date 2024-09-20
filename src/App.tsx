import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAppSelector } from "./shared/hooks";
import Header from "./shared/modules/Header/Header";
import AuthModal from "./shared/modules/Modal/Modal";
import "./App.scss";

const App = () => {
  const authModalState = useAppSelector((state) => state.authModal);
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element="" />
        </Routes>
        {/* Modals */}

        {authModalState.isOpen && <AuthModal />}
      </div>
    </Router>
  );
}

export default App;
