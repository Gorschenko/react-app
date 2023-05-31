import { Switch, Route, Link } from "react-router-dom";
import Stats from "components/routerTest/stats";
import Edit from "components/routerTest/edit";

const Dashboard = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/dashboard/edit">Edit</Link>
        </li>
        <li>
          <Link to="/dashboard">Stats</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/dashboard" component={Stats} />
        <Route path="/dashboard/edit" component={Edit} />
      </Switch>
    </div>
  );
};

export default Dashboard;
