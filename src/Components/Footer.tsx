import React from 'react';
import { Box, Typography, Container, useMediaQuery, useTheme, Link } from '@mui/material';

const Footer: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box sx={{ backgroundColor: '#f0f0f0', py: 3, textAlign: 'center' }}>
            <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '40px' }}>
                &copy; 2021 - 2024 The Author &reg;
            </Typography>
        </Box>
    );
};

export default Footer;
