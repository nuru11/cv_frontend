import React, { useState, useEffect } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Snackbar,
  Alert,
  Box,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  
  const navigate = useNavigate(); // Initialize useNavigate
  const location = useLocation(); // Get the current location

  useEffect(() => {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedCode(code);
    console.log(`Generated code for testing: ${code}`);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Check if the verification code matches
    if (verificationCode !== generatedCode) {
      setError('Verification code is incorrect.');
      setOpenSnackbar(true);
      return;
    }

    try {
      const response = await fetch('https://skywayapi.ntechagent.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        localStorage.setItem('token', token);
        console.log("Token:", token);

        // Set expiration time for 20 minutes
        const expirationTime = new Date().getTime() + 20 * 60 * 1000;
        localStorage.setItem('tokenExpiration', expirationTime);

        // Decode the token to check user role
        if (token) {
          try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            const isAdmin = payload.isAdmin || false;
            console.log("Payload:", payload.isAdmin);

            // Redirect based on admin status
            if (isAdmin) {
              navigate('/'); // Redirect to admin dashboard
            } else {
              // Redirect to the previous location or a default page
              const from = location.state?.from || '/list';
              navigate(from);
            }
          } catch (error) {
            console.error("Token decoding failed:", error);
          }
        }
        
        setSuccess('Login successful!');
        setOpenSnackbar(true);
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Login failed');
        setOpenSnackbar(true);
      }
    } catch (error) {
      setError('An error occurred, please try again.');
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="xs" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Box sx={{ width: '100%', padding: 3, boxShadow: 3, borderRadius: 2, bgcolor: 'background.paper' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <TextField
            label={`Enter this code: ${generatedCode}`}
            variant="outlined"
            fullWidth
            margin="normal"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Log In
          </Button>
        </form>

        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
          <Alert onClose={handleCloseSnackbar} severity={error ? 'error' : 'success'}>
            {error || success}
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
};

export default Login;