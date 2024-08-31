import React from 'react';
import axios from 'axios';

const GoogleLoginButton = () => {
    const handleGoogleLogin = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/google/login/');
            const { login_url } = response.data;
            window.location.href = login_url;
        } catch (error) {
            console.error('Error initiating Google login:', error);
        }
    };

    return (
        <button onClick={handleGoogleLogin}>
            Login with Google
        </button>
    );
};

export default GoogleLoginButton;
