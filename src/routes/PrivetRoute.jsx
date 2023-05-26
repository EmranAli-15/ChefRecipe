import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Shared/Loading';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivetRoute;