import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Counter from "./components/Counter";
import UserForm from "./components/UserForm";
import RichTextEditor from "./components/RichTextEditor";
import Dashboard from "./components/Dashboard";
import Auth from "./components/Auth";
import PrivateRoute from "./components/PrivateRoute";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";

const theme = createTheme();

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/form" element={<UserForm />} />
            <Route path="/editor" element={<RichTextEditor />} />
            <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
