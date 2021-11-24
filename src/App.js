import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./assets/redux/store";
import Login from "./assets/pages/login/login";
import Error from "./assets/pages/notfoundpage/notfoundpage";
import SideBar from "./assets/pages/sidebar/sidebar";
import DashBoard from "./assets/pages/dashboard/dashboard";
import Notice from "./assets/pages/notice/notice";
import Assignmnet from "./assets/pages/assignment/assignmnet";
function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Router>
          <AllRoutes />
        </Router>
      </Provider>
    </div>
  );
}
function AllRoutes() {
  let history = useHistory();
  return (
    <Switch>
      <Route exact path={["/", "/login"]}>
        <Login history={history} />
      </Route>
      <Route path="/home">
        <NavBar history={history} />
      </Route>
      <Route path="*">
        <Error />
      </Route>
    </Switch>
  );
}

function NavBar({ history }) {
  var match = useRouteMatch();
  return (
    <>
      <SideBar history={history} />
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
