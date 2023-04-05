import { useLocation, Navigate, Outlet } from "react-router-dom";


const PrivateRoutes =  () => {
    const location = useLocation();
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    return (
        isLoggedIn
            ?  <Outlet /> : <Navigate to="/login" state={{ from: location}} replace/>
    )
}

export default PrivateRoutes;