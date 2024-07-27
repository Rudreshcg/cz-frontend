import React from 'react';
import { AppBar, Toolbar, Divider, Box, IconButton, Typography, InputBase, Avatar } from '@mui/material';
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
    }
};

const Header: React.FC = () => {
    return (
        <>
            <AppBar position="static" sx={headerStyles.appBar}>
                <Toolbar sx={headerStyles.toolbar}>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, overflow: 'hidden' }}>
                        <RouterLink to="/" style={headerStyles.logoLink}>
                            <Typography variant='h4' sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>The Author</Typography>
                        </RouterLink>
                        <Box sx={headerStyles.searchBox}>
                            <SearchIcon sx={{ color: '#6B6B6B' }} />
                            <InputBase
                                placeholder="Search"
                                sx={{ ml: 1, flex: 1 }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton
                            component={RouterLink}
                            to="/write"
                            sx={{ ...headerStyles.iconButton, ...headerStyles.writeButton }}
                        >
                            <EditNoteIcon sx={headerStyles.icon} />
                            <Typography sx={{ marginLeft: '5px' }}>Write</Typography>
                        </IconButton>
                        <IconButton
                            component={RouterLink}
                            to="/profile"
                            sx={headerStyles.avatarButton}
                        >
                            <Avatar alt="Profile Picture" src="path/to/profile-pic.jpg" />
                        </IconButton>
                    </Box>
                </Toolbar>
                <Divider sx={headerStyles.divider} />
            </AppBar>
        </>
    );
};

export default Header;
