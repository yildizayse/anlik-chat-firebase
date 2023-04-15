import { Navigate } from "react-router-dom";
 import { UserAuth } from "../context/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { currentUser } = UserAuth();
 // const currentUser= true;

  if(!currentUser) {
    return <Navigate to="/" replace={true}  />
  }
  return children;
}