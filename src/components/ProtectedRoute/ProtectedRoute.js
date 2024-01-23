import { Route, Redirect } from "react-router-dom";
import Profile from "../Profile/Profile";

const ProtectedRoute = ({ isLoggedIn }) => {
  return (
    <Route path="/profile">
      {isLoggedIn ? <Profile /> : <Redirect to="/" />}
    </Route>
  );
};

export default ProtectedRoute;
