import React, { useContext, useState } from "react";
import useFetch from "../hooks/useFetch";
import TopBar from "../components/TopBar";
import Grid from "@mui/material/Unstable_Grid2";
import { Container, Typography, Box, TextField, Link } from "@mui/material";
import Btn from "../components/Btn";
import UserContext from "../context/user";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const SignIn = (props) => {
  const navigate = useNavigate();
  const userCtx = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const fetchData = useFetch();
  const handleLogin = async () => {
    const res = await fetchData("/auth/login", "POST", { email, password });
    if (res.ok) {
      userCtx.setAccessToken(res.data.access);
      localStorage.setItem("accessToken", JSON.stringify(res.data.access));

      const decoded = jwtDecode(res.data.access);

      userCtx.setUserId(decoded.id);
      localStorage.setItem("userId", JSON.stringify(decoded.id));

      navigate(`/profile/${decoded.id}`);
    } else {
      alert(JSON.stringify(res.data));
    }
  };

  

  return (
    <>
      <TopBar></TopBar>

      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh", // Set the height to the full viewport
            "& .MuiTextField-root": { m: 3, width: "25ch" },
          }}
        >
          <Grid
            xs={6}
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h5" textAlign="start" margin="2rem 0">
              Sign-in
            </Typography>
            <TextField
              label="Email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
            />

            <Btn variant="text" onClick={handleLogin}>
              Sign In
            </Btn>

            <Typography
              variant="subtitle"
              textAlign="start"
              margin="1rem 0"
              sx={{ fontSize: "12px" }}
            >
              No account?{" "}
              <Link
                onClick={() => {
                  navigate("/registration");
                }}
                underline="always"
              >
                Register
              </Link>
            </Typography>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default SignIn;