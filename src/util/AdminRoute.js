import { useLocation, Navigate, Outlet } from "react-router-dom";

const AdminRoute =  () => {

    const location = useLocation();
    
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const role = localStorage.getItem("role");

    return (
        isLoggedIn && role === "Admin"
            ?  <Outlet /> : <Navigate to="/login" state={{ from: location}} replace/>
    )
    
}

export default AdminRoute;