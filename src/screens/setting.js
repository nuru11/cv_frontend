import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Box,
} from '@mui/material';

import Header from "../screens/header"

const Settings = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [notifications, setNotifications] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
    console.log({ username, email, notifications });
  };

  return (
    <Container maxWidth={false} style={{ padding: '0 ' }} >
        <Header />

        <Container maxWidth="sm">
      <Box sx={{ mt: 4, mb: 2 }}>
        <Typography variant="h4" align="center">
          Settings
        </Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          margin="normal"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
            />
          }
          label="Enable Notifications"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Save Settings
        </Button>
      </form>
      </Container>
    </Container>
  );
};

export default Settings;