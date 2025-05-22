import { Navigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import Loading from '../components/ui/Loading';

const PublicRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    if (loading) return <Loading />;

    return !user ? children : <Navigate to="/" replace />;
};

export default PublicRoute;
