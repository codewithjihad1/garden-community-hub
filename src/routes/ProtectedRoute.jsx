import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import Loading from '../components/Loading';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()

    if (loading) return <Loading />;

    return user && !loading ? children : <Navigate state={location.pathname} to="/auth/login" replace />;
};

export default ProtectedRoute;
