import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const SignInPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <div>
      <Container maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h5">Sign In</Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ mt: 2, alignSelf: "stretch" }}
          >
            <TextField
              fullWidth
              margin="normal"
              name="email"
              type="email"
              label="Email Address"
            />
            <TextField
              fullWidth
              margin="normal"
              name="password"
              type="text"
              label="Password"
            />

            <Button fullWidth type="submit" variant="contained" sx={{ mt: 3 }}>
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};
