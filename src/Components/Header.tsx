import React, { useState } from 'react';
import { AppBar, Toolbar, Divider, Box, IconButton, Typography, InputBase, Avatar, Button, useMediaQuery, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import EditNoteIcon from '@mui/icons-material/EditNote';
import SignInDialog from './SignInDialog';

const Header: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isLoggedIn = false;

    const [open, setOpen] = useState(false);

    const handleOpenDialog = () => {
        setOpen(true);
    };

    const handleCloseDialog = () => {
        setOpen(false);
    };

    return (
        <>
            <AppBar
                position="static"
                sx={{
                    backgroundColor: 'white',
                    color: 'black',
                    boxShadow: 'none',
                    overflowX: 'hidden'
                }}
            >
                <Toolbar
                    sx={{
                        padding: '0px 16px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        boxSizing: 'border-box'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexGrow: 1,
                            overflow: 'hidden'
                        }}
                    >
                        <RouterLink to="/" style={{ textDecoration: 'none', color: 'black' }}>
                            <Typography
                                variant='h4'
                                sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}
                            >
                                The Author
                            </Typography>
                        </RouterLink>
                        {isMobile && isLoggedIn && (
                            <Box
                                sx={{
                                    display: isMobile ? 'flex' : 'none',
                                    alignItems: 'center',
                                    minWidth: 0,
                                    maxWidth: '300px',
                                    flexGrow: 1
                                }}
                            >
                                <SearchIcon
                                    sx={{
                                        fontSize: '2rem',
                                        color: '#6B6B6B',
                                        backgroundColor: 'transparent',
                                        borderRadius: '50%',
                                        padding: '8px',
                                        marginLeft: '5px'
                                    }}
                                />
                            </Box>
                        )}
                        {!isMobile && isLoggedIn && (
                            <Box
                                sx={{
                                    backgroundColor: '#f0f0f0',
                                    borderRadius: '25px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '2px 10px',
                                    marginLeft: '15px',
                                    minWidth: 0,
                                    maxWidth: '300px',
                                    flexGrow: 1,
                                    height: '35px'
                                }}
                            >
                                <SearchIcon
                                    sx={{
                                        color: '#6B6B6B',
                                        backgroundColor: 'transparent',
                                        borderRadius: '50%',
                                        padding: '8px',
                                    }}
                                />
                                <InputBase
                                    placeholder="Search"
                                    sx={{ ml: 1, flex: 1 }}
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Box>
                        )}
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        {isLoggedIn ? (
                            <>
                                <IconButton
                                    component={RouterLink}
                                    to="/write"
                                    sx={{
                                        flexShrink: 0,
                                        marginRight: isMobile ? '0' : '25px',
                                        color: '#6B6B6B',
                                        '&:hover': {
                                            color: 'black',
                                            backgroundColor: 'transparent'
                                        }
                                    }}
                                >
                                    <EditNoteIcon
                                        sx={{
                                            fontSize: '2.5rem'
                                        }}
                                    />
                                    {!isMobile && <Typography sx={{ marginLeft: '5px' }}>Write</Typography>}
                                </IconButton>
                                <IconButton
                                    component={RouterLink}
                                    to="/profile"
                                    sx={{
                                        flexShrink: 0,
                                        '&:hover': {
                                            backgroundColor: 'transparent'
                                        }
                                    }}
                                >
                                    <Avatar alt="Profile Picture" src="path/to/profile-pic.jpg" />
                                </IconButton>
                            </>
                        ) : (
                            <Box sx={{ alignItems: 'center' }}>
                                {!isMobile && (
                                    <Typography
                                        component="span"
                                        onClick={handleOpenDialog}
                                        sx={{ textDecoration: 'none',
                                             px: 2, py: 2, mr: 2,
                                             color: '#6B6B6B',
                                             cursor: 'pointer',
                                             '&:hover': {
                                                 color: 'black',
                                                 backgroundColor: 'transparent'
                                             } }}
                                    >
                                        Sign In
                                    </Typography>
                                )}
                                <Button
                                    onClick={handleOpenDialog}
                                    variant="contained"
                                    sx={{
                                        marginLeft: '10px',
                                        textTransform: 'none',
                                        borderRadius: '17px',
                                        backgroundColor: 'black',
                                        color: 'white',
                                        fontSize: '0.87rem',
                                        '&:hover': {
                                            backgroundColor: 'black'
                                        }
                                    }}
                                >
                                    Get Started
                                </Button>
                            </Box>
                        )}
                    </Box>
                </Toolbar>
                <Divider sx={{ width: '100%' }} />
            </AppBar>
            <SignInDialog open={open} onClose={handleCloseDialog} />
        </>
    );
};

export default Header;
