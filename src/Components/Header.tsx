import React from 'react';
import { AppBar, Toolbar, Divider, Box, IconButton, Typography, InputBase, Avatar } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';

const Header: React.FC = () => {
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
                <Toolbar sx={{ padding: '0px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', boxSizing: 'border-box' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, overflow: 'hidden' }}>
                        <RouterLink to="/" style={{ textDecoration: 'none', color: 'black' }}>
                            <Typography variant='h4' sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>The Author</Typography>
                        </RouterLink>
                        <Box sx={{
                            backgroundColor: '#f0f0f0',
                            borderRadius: '25px',
                            display: 'flex',
                            alignItems: 'center',
                            padding: '2px 10px',
                            marginLeft: '15px',
                            minWidth: 0,
                            maxWidth: '300px',
                            flexGrow: 1
                        }}>
                            <SearchIcon sx={{ color: 'gray' }} />
                            <InputBase
                                placeholder="Search"
                                sx={{ ml: 1, flex: 1 }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton component={RouterLink} to="/write" sx={{ flexShrink: 0, marginRight: '25px' }}>
                            <NoteAltOutlinedIcon sx={{fontSize: '2rem'}}/>
                            <Typography sx={{ marginLeft: '8px' }}>Write</Typography>
                        </IconButton>
                        <IconButton component={RouterLink} to="/profile" sx={{ flexShrink: 0 }}>
                            <Avatar alt="Profile Picture" src="path/to/profile-pic.jpg" />
                        </IconButton>
                    </Box>
                </Toolbar>
                <Divider sx={{ width: '100%' }} />
            </AppBar>
        </>
    );
};

export default Header;
