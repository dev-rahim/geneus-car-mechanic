import useAuth from "../../../hooks/useAuth"
import { useLocation, Outlet, Navigate } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'

const PrivateRoute = () => {
    const { user, isLoading } = useAuth()
    const location = useLocation()
    if (isLoading) {
        return <Spinner variant="dark" animation="border" />
    }
    return (
        user.displayName ? <Outlet /> : <Navigate to='/login' state={{ from: location }} />
    )
}

export default PrivateRoute;