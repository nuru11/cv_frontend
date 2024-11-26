// import React, { useState } from 'react';
// import {
//   Container,
//   TextField,
//   Button,
//   Typography,
//   Snackbar,
//   Alert,
// } from '@mui/material';

// const Signup = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [openSnackbar, setOpenSnackbar] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     try {
//       const response = await fetch('http://localhost:4000/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//       });

//       if (response.ok) {
//         setSuccess('User registered successfully!');
//         setUsername('');
//         setPassword('');
//       } else {
//         const errorData = await response.json();
//         setError(errorData.message || 'Registration failed');
//       }
//     } catch (error) {
//       setError('An error occurred, please try again.');
//     } finally {
//       setOpenSnackbar(true);
//     }
//   };

//   const handleCloseSnackbar = () => {
//     setOpenSnackbar(false);
//   };

//   return (
//     <Container maxWidth="xs">
//       <Typography variant="h5" align="center" gutterBottom>
//         Signup
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           label="Username"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <TextField
//           label="Password"
//           type="password"
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           fullWidth
//           style={{ marginTop: '16px' }}
//         >
//           Sign Up
//         </Button>
//       </form>

//       <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
//         <Alert onClose={handleCloseSnackbar} severity={error ? 'error' : 'success'}>
//           {error || success}
//         </Alert>
//       </Snackbar>
//     </Container>
//   );
// };

// export default Signup;




//////////////////////////////////


import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Snackbar,
  Alert,
  Box,
} from '@mui/material';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch('https://skywayapi.ntechagent.com/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
          isAdmin: false, // Set isAdmin to false
        }),
      });

      if (response.ok) {
        setSuccess('Signup successful! You can now log in.');
        // Optionally redirect to login page
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Signup failed');
      }
    } catch (error) {
      setError('An error occurred, please try again.');
    } finally {
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
          Sign Up
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Sign Up
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

export default Signup;