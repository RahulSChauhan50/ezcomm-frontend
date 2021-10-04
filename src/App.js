import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./assets/pages/login/login";
import ERROR from "./assets/pages/notfoundpage/notfoundpage";
function App() {
  return (
    <Router>
       {/* <div className="App">
        
      </div>  */}
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="*">
          <ERROR />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
