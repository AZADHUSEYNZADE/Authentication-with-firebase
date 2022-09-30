import React, { useState } from "react";
import {
  Stack,
  Typography,
  TextField,
  Button,
  Card,
  InputAdornment,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login as loginHandle } from "../store/auth";
import { useNavigate } from "react-router-dom";
import { login } from "../firebase";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    dispatch(loginHandle(user));
    navigate("/", {
      replace: true,
    });
  };
  return (
    <Card
      sx={{
        width: "300px",
        height: "350px",
        display: "flex",
        justifyContent: "center",
        margin: "0 auto",
        marginTop: "100px",
      }}
    >
      <Stack sx={{ marginTop: "30px", marginLeft: "40px" }}>
        <Typography variant="h4" marginLeft="50px" color="secondary">
          Log in
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            required
            label="Email"
            variant="filled"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            label="Password"
            variant="filled"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ marginTop: "20px" }}
            inputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />

          <Button
            type="submit"
            variant="contained"
            color="secondary"
            size="large"
            sx={{ marginLeft: "60px", marginTop: "40px" }}
          >
            Log in
          </Button>
        </form>
        <Typography variant="body2" sx={{ marginTop: "10px" }}>
          Don't have an account?
          <Link style={{ textDecoration: "none" }} to="/register">
            Sign Up
          </Link>
        </Typography>
      </Stack>
    </Card>
  );
};

export default Login;
