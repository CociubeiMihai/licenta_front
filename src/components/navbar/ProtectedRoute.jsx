import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ children, expectedRoles }) => {

    const authContext = JSON.parse(localStorage.getItem('user'));
    if(authContext === ""){
        return <Navigate to='/signup' replace/>
    }else
    if (!expectedRoles.includes(authContext.role.name)) {
      return <Navigate to='/' replace />;
    }
  
    return children ? children : <Outlet />;
  };