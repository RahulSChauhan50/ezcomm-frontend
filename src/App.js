import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
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
          <NavBar />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

function NavBar() {
  var match = useRouteMatch();
  console.log(match);
  return (
    <>
      <div>it is always showing</div>
      <Switch>
        <Route path={match.path + "/dashboard"}>
          <Homepage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
