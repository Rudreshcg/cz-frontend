import React from 'react';
import { AppBar, Toolbar, Divider, Box, IconButton, Typography, InputBase, Avatar, Button, useMediaQuery, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import EditNoteIcon from '@mui/icons-material/EditNote';

const headerStyles = {
    appBar: {
        backgroundColor: 'white',
        color: 'black',
        boxShadow: 'none',
        overflowX: 'hidden'
    },
    toolbar: {
        padding: '0px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        boxSizing: 'border-box'
    },
    logoLink: {
        textDecoration: 'none',
        color: 'black'
    },
    searchBox: {
        backgroundColor: '#f0f0f0',
        borderRadius: '25px',
        display: 'flex',
        alignItems: 'center',
        padding: '2px 10px',
        marginLeft: '15px',
        minWidth: 0,
        maxWidth: '300px',
        flexGrow: 1
    },
    searchIcon: {
        fontSize: '2rem',
        color: '#6B6B6B',
        backgroundColor: 'transparent',
        borderRadius: '50%',
        padding: '8px',
        marginLeft: '5px'
    },
    iconButton: {
        flexShrink: 0,
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    writeButton: {
        marginRight: '25px',
        color: '#6B6B6B',
        '&:hover': {
            color: 'black',
            backgroundColor: 'transparent'
        }
    },
    avatarButton: {
        flexShrink: 0,
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    icon: {
        fontSize: '2.5rem'
    },
    divider: {
        width: '100%'
    },
    authButton: {
        marginLeft: '10px',
        textTransform: 'none',
        borderRadius: '17px',
        '&:hover': {
            backgroundColor: 'black'
        }
    }
};

const isLoggedIn = true;

const Header: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <AppBar position="static" sx={headerStyles.appBar}>
                <Toolbar sx={headerStyles.toolbar}>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, overflow: 'hidden' }}>
                        <RouterLink to="/" style={headerStyles.logoLink}>
                            <Typography variant='h4' sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>The Author</Typography>
                        </RouterLink>
                        {isLoggedIn && (
                            <Box sx={headerStyles.searchBox} style={{ display: isMobile ? 'flex' : 'none' }}>
                                <SearchIcon sx={{ backgroundColor: isMobile ? 'transparent' : headerStyles.searchIcon.backgroundColor }} />
                            </Box>
                        )}
                        {!isMobile && isLoggedIn && (
                            <Box sx={headerStyles.searchBox}>
                                <SearchIcon sx={{ color: '#6B6B6B' }} />
                                <InputBase
                                    placeholder="Search"
                                    sx={{ ml: 1, flex: 1 }}
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Box>
                        )}
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {isLoggedIn ? (
                            <>
                                <IconButton
                                    component={RouterLink}
                                    to="/write"
                                    sx={{ 
                                        ...headerStyles.iconButton, 
                                        ...headerStyles.writeButton,
                                        marginRight: isMobile ? '0' : '25px'
                                    }}
                                >
                                    <EditNoteIcon sx={headerStyles.icon} />
                                    {!isMobile && <Typography sx={{ marginLeft: '5px' }}>Write</Typography>}
                                </IconButton>
                                <IconButton
                                    component={RouterLink}
                                    to="/profile"
                                    sx={headerStyles.avatarButton}
                                >
                                    <Avatar alt="Profile Picture" src="path/to/profile-pic.jpg" />
                                </IconButton>
                            </>
                        ) : (
                            <Box sx={{ alignItems: 'center' }}>
                                {!isMobile && (
                                    <Typography
                                        component={RouterLink}
                                        to="/signin"
                                        sx={{ color: 'black', textDecoration: 'none', px: 2, py: 2 }}
                                    >
                                        Sign In
                                    </Typography>
                                )}
                                <Button
                                    component={RouterLink}
                                    to="/get-started"
                                    variant="contained"
                                    sx={{ ...headerStyles.authButton, backgroundColor: 'black', color: 'white', fontSize: '0.87rem' }}
                                >
                                    Get Started
                                </Button>
                            </Box>
                        )}
                    </Box>
                </Toolbar>
                <Divider sx={headerStyles.divider} />
            </AppBar>
        </>
    );
};

export default Header;
