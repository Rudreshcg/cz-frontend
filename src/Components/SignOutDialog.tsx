import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import { useAuth } from '../Context/AuthContext';

interface SignOutDialogProps {
    open: boolean;
    onClose: () => void;
    setOpenSignOutDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignOutDialog: React.FC<SignOutDialogProps> = ({ open, onClose, setOpenSignOutDialog }) => {
    const { setIsLoggedIn } = useAuth();

    const handleSignOut = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        setOpenSignOutDialog(false);
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="sign-out-dialog-title"
        >
            <DialogTitle id="sign-out-dialog-title">Sign Out</DialogTitle>
            <DialogContent>
                Are you sure you want to sign out?
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSignOut} color="secondary">
                    Sign Out
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default SignOutDialog;
