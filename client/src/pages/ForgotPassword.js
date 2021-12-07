import React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ForgotPassword = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ mt: 10 }}>
        <Typography variant="body1">
          Please enter your email address. We will be sending you a verification
          email.
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
            Send Verification Email
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
