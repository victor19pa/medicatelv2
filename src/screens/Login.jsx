import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { UserContext } from "../context/UserContext";
import { Copyright } from "../components/molecules";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    user: "",
    password: "",
  });

  const { login } = useContext(UserContext);

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(user);
      navigate("/inicio");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        sx={{
          backgroundImage:
            "url(https://rochepacientes.es/content/dam/roche-pacientes-2/es/assets/images/artritis-medico-paciente.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <Box
          sx={{
            mt: 25,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#005F7F" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" color="#005F7F" align="left">
            INICIA SESIÓN
          </Typography>
          <Typography component="h1" variant="h4" color="#005F7F">
            <b>EN TU CUENTA</b>
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="user"
              label="Username"
              name="user"
              onChange={handleInputChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              type="password"
              onChange={handleInputChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Ingresar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body1" color="#005F7F">
                  ¿Olvidaste tu contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body1" color="#005F7F">
                  ¿No tienes una cuenta? Registrate
                </Link>
              </Grid>
            </Grid>
            {/* <Copyrigh sx={{ mt: 5 }} /> */}
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
