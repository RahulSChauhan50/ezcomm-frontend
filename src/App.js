import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./assets/pages/login/login";
import Error from "./assets/pages/notfoundpage/notfoundpage";
import Homepage from "./assets/pages/homepage/homepage";
function App() {
  return (
    <Router>
      {/* <div className="App">
        
      </div>  */}
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/home">
          <Homepage />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
