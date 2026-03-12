import { useAuth } from '@/context/AuthContext';
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const {user,loading} = useAuth();
    if(loading) return <p>loading...</p>;

    if(!user || user == undefined)
    {
        return <Navigate to="/login" replace/>;
    }
  return <Outlet/>;
}

export default ProtectedRoute