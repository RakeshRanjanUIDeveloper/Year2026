import { useSelector } from "react-redux";
import type { RootState } from "../app/rootReducer";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute(){
    const token = useSelector((s:RootState) => s.auth.token)
    return token ? <Outlet /> : <Navigate to="/login" replace />
}