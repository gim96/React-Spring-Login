import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Dashboard from "./Dashboard";
import Signup from "./Signup";
import Logout from "./Logout";
import Login from "./Login";
import { useState } from "react";
import axios from "axios";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Redirect from="/app" to="/login" />
          <Route path="/signup" component={Signup} />
          <Route path="/logout" component={Logout} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    </div>
  );
}

export default App;
