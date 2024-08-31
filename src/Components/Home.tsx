// HomePage.js
import React from 'react';
import { Container, Typography, Button, Box, Link } from '@mui/material';
import { styled } from '@mui/system';

const BackgroundBox = styled(Box)(({ theme }) => ({
  backgroundColor: '#f8f8f8',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
}));

const Home = () => {
  return (
    <BackgroundBox>
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          Human stories & ideas
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          A place to read, write, and deepen your understanding
        </Typography>
        <Button 
        sx={{
          backgroundColor: 'black',
          color: 'white',
          fontSize: '0.87rem',
          textTransform: 'none',
          px: 2,
          py: 1,
          '&:hover': {
              backgroundColor: '#6B6B6B'
          }
        }}
        >
          Start Reading
        </Button>
      </Container>
    </BackgroundBox>
  );
};

export default Home;
