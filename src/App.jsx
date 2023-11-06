import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LogIn from "./pages/login/login";
import { Router, Route } from "react-router-dom";
import Landing from "./pages/Landing/landing";
import { createBrowserHistory } from "history";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  const [count, setCount] = useState(0);
  const newHistory = createBrowserHistory();

  return (
    <>
      <Router history={newHistory}>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Router>
    </>
  );
}

export default App;
