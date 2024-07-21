// GoogleLoginButton.tsx
import React from 'react';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import axios from 'axios';

const GoogleLoginButton: React.FC = () => {
  const handleSuccess = (response: CredentialResponse) => {
    if (response.credential) {
      axios.post('http://localhost:8000/api/auth/google/', {
        token: response.credential,
      })
      .then((response) => {
        console.log('User details:', response.data);
        // Handle successful authentication, e.g., store token, redirect, or update state
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    } else {
      console.error('Credential is undefined');
    }
  };

  const handleError = () => {
    console.error('Login Error');
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={handleError}
    />
  );
};

export default GoogleLoginButton;
