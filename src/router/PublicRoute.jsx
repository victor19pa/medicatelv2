import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const PublicRoute = ({ children }) => {
  const { userState } = useContext(UserContext);

  return userState.logged ? <Navigate to="/inicio" /> : children;
};

export default PublicRoute;
