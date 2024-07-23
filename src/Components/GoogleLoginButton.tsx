import React from 'react';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import axios from 'axios';

// Function to get the CSRF token from cookies
function getCookie(name: string) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

const GoogleLoginButton: React.FC = () => {
  const handleSuccess = (response: CredentialResponse) => {
    if (response.credential) {
      const csrfToken = getCookie('csrftoken');
  
      axios.post('http://localhost:8000/api/auth/google/', {
        token: response.credential,
      }, {
        headers: {
          'X-CSRFToken': csrfToken, // Include the CSRF token in the headers
        }
      })
      .then((response) => {
        console.log('User details:', response.data);
        // Store the token in localStorage
        localStorage.setItem('authToken', response.data.token);
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
