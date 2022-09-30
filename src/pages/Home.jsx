import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout as logoutHandle } from "../store/auth";
import { Stack, IconButton, Typography, Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Home = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();
    dispatch(logoutHandle());
    navigate("/login", {
      replace: true,
    });
  };

  if (user) {
    return (
      <Stack sx={{ marginTop: "50px" }}>
        <Typography variant="h5" sx={{ textAlign: "center" }} color="GrayText">
          Welcome {user.email}
        </Typography>
        <Button
          sx={{
            width: "150px",
            display: "flex",
            margin: "0 auto",
            marginTop: "10px",
          }}
          variant="contained"
          onClick={handleLogout}
        >
          Log out
        </Button>
      </Stack>
    );
  }
  return (
    <Stack
      sx={{
        display: "flex",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <Link to="/register" style={{ textDecoration: "none" }}>
        Sign Up
        <IconButton>
          <ArrowForwardIcon />
        </IconButton>
      </Link>
      <Link to="/login" style={{ textDecoration: "none" }}>
        Log In
        <IconButton>
          <LoginIcon />
        </IconButton>
      </Link>
    </Stack>
  );
};

export default Home;
