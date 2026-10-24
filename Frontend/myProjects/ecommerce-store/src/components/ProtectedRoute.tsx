import type { ReactNode } from "react"
import { useAppSelector } from "../store/hooks"
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    children : ReactNode
}
const ProtectedRoute = ({children} : ProtectedRouteProps) => {
    const {user} = useAppSelector((state) => state.auth);
    if(!user) return <Navigate to="/login" replace />
    return children
}

export default ProtectedRoute