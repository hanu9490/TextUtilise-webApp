import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Alert from "./components/alert/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TextForm from "./components/textForm/TextForm";
import About from "./components/about/About";
import "./App.css";

const App = () => {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "#3b5771";
      setMode("dark");
      showAlert("Dark mode Enabled", "success");
    } else {
      document.body.style.backgroundColor = "white";
      setMode("light");
      showAlert("Light mode Enabled", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar toggleMode={toggleMode} textMode={mode} />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/"
            element={<TextForm mode={mode} showAlert={showAlert} />}
          />
          <Route path="/about" element={<About textMode={mode} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
