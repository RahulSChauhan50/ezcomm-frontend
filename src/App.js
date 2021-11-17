import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";
import Login from "./assets/pages/login/login";
import Error from "./assets/pages/notfoundpage/notfoundpage";
import SideBar from "./assets/pages/sidebar/sidebar";
import DashBoard from "./assets/pages/dashboard/dashboard";
import Notice from "./assets/pages/notice/notice";
import Assignmnet from "./assets/pages/assignment/assignmnet";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={["/", "/login"]}>
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
    </div>
  );
}

function NavBar() {
  var match = useRouteMatch();
  return (
    <>
      <SideBar />
      <Switch>
        <Route exact path={[match.path + "/", match.path + "/dashboard"]}>
          <DashBoard />
        </Route>
        <Route path={match.path + "/notice"}>
          <Notice />
        </Route>
        <Route path={match.path + "/assignment"}>
          <Assignmnet />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </>
  );
}

export default App;
