// src/Components/ProfileMenu.tsx
import React from 'react';
import { Menu, MenuItem, Divider, Avatar } from '@mui/material';
import { useAuth } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import http, { getErrorMessage } from '../../Services/http';
import { toast } from 'react-toastify';

interface ProfileMenuProps {
    anchorEl: HTMLElement | null;
    open: boolean;
    onClose: () => void;
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({ anchorEl, open, onClose }) => {
    const { setIsLoggedIn } = useAuth();
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await http.post('logout/');
            setIsLoggedIn(false);
            localStorage.removeItem('token');
            navigate('/');
            onClose(); 
        } catch (error) {
            console.error('Error during sign out:', getErrorMessage(error)); 
            toast.error('Failed to log out. Please try again.');
        }
    };

    const handleProfileClick = () => {
        navigate('/profile');
        onClose();
    };

    const handleStoriesClick = () => {
        navigate('/stories');
        onClose();
    };

    const handleHelpClick = () => {
        navigate('/help');
        onClose();
    };

    const handleManageAccountClick = () => {
        navigate('/manage-account');
        onClose();
    };

    const handleEmailClick = () => {
        navigate('/email');
        onClose();
    };

    return (
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={onClose}
            PaperProps={{ sx: { width: '200px' } }}
        >
            <MenuItem onClick={handleProfileClick}>
                <Avatar sx={{ marginRight: 1 }} />
                Profile
            </MenuItem>
            <MenuItem onClick={handleStoriesClick}>Stories</MenuItem>
            <MenuItem onClick={handleHelpClick}>Help</MenuItem>
            <MenuItem onClick={handleManageAccountClick}>Manage Account</MenuItem>
            <MenuItem onClick={handleEmailClick}>Email</MenuItem>
            <Divider />
            <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
        </Menu>
    );
};

export default ProfileMenu;
