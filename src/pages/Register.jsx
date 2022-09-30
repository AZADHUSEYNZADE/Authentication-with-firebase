import React, { useState } from "react";
import { Typography, TextField, Button, Stack, Card } from "@mui/material";
import { Link } from "react-router-dom";
import { register } from "../firebase";
import { login as loginHandle } from "../store/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await register(email, password);
    dispatch(loginHandle(user));
    navigate("/", {
      replace: true,
    });
  };
  return (
    <>
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
            Sign up
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
            />

            <Button
              type="submit"
              variant="contained"
              color="secondary"
              size="large"
              sx={{ marginLeft: "60px", marginTop: "40px" }}
            >
              Sign Up
            </Button>
          </form>
          <Typography variant="body2" sx={{ marginTop: "10px" }}>
            Already have an account?
            <Link style={{ textDecoration: "none" }} to="/login">
              Log In
            </Link>
          </Typography>
        </Stack>
      </Card>
    </>
  );
};

export default Register;
