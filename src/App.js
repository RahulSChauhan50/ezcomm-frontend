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
function App() {
  return (
    <Router>
      {/* <div className="App">
        
      </div>  */}
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
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </>
  );
}

export default App;
