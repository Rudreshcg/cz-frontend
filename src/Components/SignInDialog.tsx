import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
  Box
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import EmailIcon from '@mui/icons-material/Email';
import CloseIcon from '@mui/icons-material/Close';
import { Link as RouterLink } from 'react-router-dom';
import GoogleLoginButton from './GoogleLoginButton';
import GoogleIcon from '@mui/icons-material/Google';

interface SignInDialogProps {
  open: boolean;
  onClose: () => void;
}

const SignInDialog: React.FC<SignInDialogProps> = ({ open, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const buttonStyle: React.CSSProperties = {
    marginBottom: '16px',
    textTransform: 'none',
    justifyContent: 'flex-start',
    width: '70%',
    borderRadius: '15px',
    padding: '8px',
    paddingLeft: '15px',
    borderColor: 'black',
    borderWidth: '1px',
    borderStyle: 'solid',
    color: 'black',
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={isMobile}
      maxWidth="md"
      sx={{
        '& .MuiDialog-paper': {
          width: isMobile ? '100%' : isTablet ? '70%' : '35%',
          maxWidth: 'none',
          height: '100%',
          margin: 0,
          overflow: 'hidden',
          alignItems: 'center',
        },
      }}
    >
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogTitle
        sx={{
          textAlign: 'center',
          py: 8,
          fontSize: '25px',
          fontWeight: 'bold',
        }}
      >
        Welcome to LekhanaWorld.
      </DialogTitle>
      <DialogContent
        sx={{
          px: isMobile ? 2 : isTablet ? 4 : 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflowY: 'auto',
          maxWidth: '100%',
          width: '100%',
          height: isMobile ? 'calc(100vh - 200px)' : 'auto',
        }}
      >
        <Button startIcon={<GoogleIcon/>} variant="outlined" sx={buttonStyle}>
        <Box sx={{ flexGrow: 1, textAlign: 'center', color: 'black' }}><GoogleLoginButton/></Box>
        </Button>
        <Button startIcon={<FacebookIcon/>} variant="outlined" sx={buttonStyle}>
          <Box sx={{ flexGrow: 1, textAlign: 'center', color: 'black' }}>Continue with Facebook</Box>
        </Button>
        <Button startIcon={<AppleIcon />} variant="outlined" sx={buttonStyle}>
          <Box sx={{ flexGrow: 1, textAlign: 'center', color: 'black' }}>Continue with Apple</Box>
        </Button>
        <Button startIcon={<EmailIcon />} variant="outlined" sx={buttonStyle}>
          <Box sx={{ flexGrow: 1, textAlign: 'center', color: 'black' }}>Continue with Email</Box>
        </Button>
        <Typography variant="body2" sx={{ flexGrow: 1, textAlign: 'center', mt: '20px' }}>
          No account? <RouterLink to="/signup" onClick={onClose}>Create one</RouterLink>
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default SignInDialog;

