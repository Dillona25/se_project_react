import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import Profile from "../Profile/Profile";

const ProtectedRoute = ({ isLoggedIn, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isLoggedIn ? <Component {...routeProps} /> : <Redirect to="/welcome" />
      }
    />
  );
};

export default ProtectedRoute;
