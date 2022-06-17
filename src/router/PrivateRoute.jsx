import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const PrivateRoute = ({ children }) => {
  const { userState } = useContext(UserContext);
  return userState.logged ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
