import React from 'react';
import { Box, Typography, useTheme, useMediaQuery, styled } from '@mui/material';

const FooterContainer = styled(Box)(({ theme }) => ({
  marginTop: 'auto',
  padding: theme.spacing(2),
  backgroundColor: '#f8f8f8',
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(2),
}));

const Footer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <FooterContainer sx={{ backgroundColor: '#f0f0f0', py: 3, textAlign: 'center' }}>
      <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '40px' }}>
        &copy; 2021 - 2024 The Author &reg;
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
