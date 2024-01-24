import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import Profile from "../Profile/Profile";

const ProtectedRoute = ({ isLoggedIn, component: Component, ...props }) => {
  return (
    <Route {...props}>{isLoggedIn ? <Component /> : <Redirect to="/" />}</Route>
  );
};

export default ProtectedRoute;
