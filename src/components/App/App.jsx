import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainPage from "pages/MainPage";
import UsersPage from "pages/UsersPage";
import FirstPage from "pages/FirstPage";
import Navbar from "components/navBar";
import Home from "components/routerTest/home";
import Login from "components/routerTest/login";
import Posts from "components/routerTest/posts";
import Stats from "components/routerTest/stats";
import Dashboard from "components/routerTest/dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/dashboard/stats" component={Stats} />
        <Route path="/login" component={Login} />
        <Route
          path="/posts/:postId?"
          render={(props) => <Posts {...props} />}
        />

        <Route path="/ui" component={MainPage} />
        <Route path="/users" component={UsersPage} />
        <Route path="/counters" component={FirstPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
