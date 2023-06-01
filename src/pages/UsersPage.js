import Users from "components/users";
import User from "components/user";
import { useParams } from "react-router-dom";

const SecondPage = () => {
  const params = useParams();
  const userId = params.userId;
  return userId ? <User id={userId} /> : <Users />;
};

export default SecondPage;
