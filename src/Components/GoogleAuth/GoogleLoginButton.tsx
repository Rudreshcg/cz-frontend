import React from 'react';
import http from '../../Services/http';

const GoogleLoginButton = () => {
    const handleGoogleLogin = async () => {
        try {
            const response = await http.get('/google/login/'); // Use the http instance here
            const { login_url } = response.data;
            window.location.href = login_url;
        } catch (error) {
            console.error('Error initiating Google login:', error);
        }
    };

    return (
        <div onClick={handleGoogleLogin}>
          Continue with Google
        </div>
    );
};

export default GoogleLoginButton;
