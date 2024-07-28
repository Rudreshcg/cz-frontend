import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { Button, Box } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

function getCookie(name: string) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

const GoogleLoginButton: React.FC = () => {
  const handleSuccess = async (tokenResponse: { access_token: string }) => {
    const csrfToken = getCookie('csrftoken');
  
    try {
      const response = await axios.post('http://localhost:8000/api/auth/google/', {
        token: tokenResponse.access_token,
      }, {
        headers: {
          'X-CSRFToken': csrfToken,
        }
      });
      console.log('User details:', response.data);
      localStorage.setItem('authToken', response.data.token);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleError = () => {
    console.error('Login Error');
  };

  const login = useGoogleLogin({
    onSuccess: handleSuccess,
    onError: handleError,
    flow: 'implicit',  // or 'token' if you prefer token-based flow
  });

  const buttonStyle: React.CSSProperties = {
    marginBottom: '16px',
    textTransform: 'none',
    justifyContent: 'flex-start',
    width: '70%',
    borderRadius: '15px',
    padding: '6px',
    borderColor: 'black',
    borderWidth: '1px',
    borderStyle: 'solid',
    color: 'black',
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <Button onClick={() => login()} variant="outlined" sx={buttonStyle} startIcon={<GoogleIcon />}>
      <Box sx={{ flexGrow: 1, textAlign: 'center', color: 'black' }}>Continue with Google</Box>
    </Button>
  );
};

export default GoogleLoginButton;
