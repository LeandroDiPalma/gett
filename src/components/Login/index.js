import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Grid, Container, Paper } from '@mui/material';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'user' && password === 'pass') {
      navigate('/todo');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper style={{ padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Grid container spacing={2} direction="column" alignItems="center">
          <Grid item xs={12}>
            <TextField 
              variant="outlined"
              fullWidth
              label="Username" 
              onChange={(e) => setUsername(e.target.value)} 
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              variant="outlined"
              fullWidth
              label="Password" 
              type="password" 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleLogin}>
              Login
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Login;