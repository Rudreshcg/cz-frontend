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
            const picture = query.get('picture')
            

            if (token) {
                localStorage.setItem('token', token);
                localStorage.setItem('picture', picture || '')
                setIsLoggedIn(true);
                navigate('/dashboard');
            } else {
                console.error('No token returned from backend');
                navigate('/login');
            }
        };

        handleGoogleCallback();
    }, [location, navigate, setIsLoggedIn]);

    return (
        <div>Processing Google login...</div>
    );
};

export default GoogleCallback;
