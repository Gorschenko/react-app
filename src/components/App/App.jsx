import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainPage from "pages/MainPage";
import UsersPage from "pages/UsersPage";
import FirstPage from "pages/FirstPage";
import Navbar from "components/navBar";
import Home from "components/routerTest/home";
import Login from "components/routerTest/login";
// import Posts from "components/routerTest/posts";
import Post from "components/routerTest/post";
import PostsList from "components/routerTest/postsList";
import Stats from "components/routerTest/stats";
import Dashboard from "components/routerTest/dashboard";

const posts = [
  { id: 1, label: "post 1" },
  { id: 2, label: "post 2" },
  { id: 3, label: "post 3" },
];

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route
          path="/dashboard"
          exact
          render={(props) => <Dashboard isAmdin={false} {...props} />}
        /> */}
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/dashboard/stats" component={Stats} />
        <Route path="/login" component={Login} />
        <Route
          path="/posts/:postId"
          render={(props) => <Post {...props} posts={posts} />}
        />
        <Route
          path="/posts"
          render={(props) => <PostsList {...props} posts={posts} />}
        />

        <Route path="/ui" component={MainPage} />
        <Route path="/users" component={UsersPage} />
        <Route path="/counters" component={FirstPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
