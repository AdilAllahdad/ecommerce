import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  return token && isAdmin ? children : <Navigate to="/admin-login" />;
};

export default PrivateRoute;
