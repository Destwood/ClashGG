import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import AuthModal from "shared/modules/AuthModal/AuthModal";
import { getTheme } from "shared/theme";
import { useAppSelector } from "./shared/hooks";
import Header from "./shared/modules/Header/Header";
import "./App.scss";


const App = () => {
    const [themeModa, setThemeMode] = useState<"light" | "dark">("dark")
    const theme = getTheme(themeModa)

  const modalState = useAppSelector((state) => state.modal);

  return (
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
              <div className="App">
                  <Header />

                  <Routes>
                      <Route path="/" element="" />
                  </Routes>

                  {/* Modals */}
                  {modalState.isOpen && <AuthModal />}
              </div>
          </Router>
      </ThemeProvider>

  );
}

export default App;
