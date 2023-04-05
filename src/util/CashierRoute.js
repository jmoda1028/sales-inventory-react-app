import { useLocation, Navigate, Outlet } from "react-router-dom";


const CashierRoute = () => {
    const location = useLocation();

    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const role = localStorage.getItem("role");

    return (
        isLoggedIn && role === "Cashier"
            ?  <Outlet /> : <Navigate to="/login" state={{ from: location}} replace/>
    )   
}

export default CashierRoute;