// src/Components/GoogleCallback.tsx
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const GoogleCallback: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { setIsLoggedIn } = useAuth();

    useEffect(() => {
        const handleGoogleCallback = async () => {
            const query = new URLSearchParams(location.search);
            const token = query.get('token');

            if (token) {
                localStorage.setItem('token', token);
                setIsLoggedIn(true);  // Update login state
                navigate('/dashboard');  // Redirect to the dashboard or home
            } else {
                console.error('No token returned from backend');
                navigate('/login');  // Redirect to login on error
            }
        };

        handleGoogleCallback();
    }, [location, navigate, setIsLoggedIn]);

    return (
        <div>Processing Google login...</div>
    );
};

export default GoogleCallback;
