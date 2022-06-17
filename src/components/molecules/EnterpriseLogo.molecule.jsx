import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const EnterpriseLogo = () => {
  return (
    <Grid container marginTop={1} justifyContent="center">
      <Grid item xs={12} sm={12} md={3} lg={3} justifyContent="center">
        <img src={require("../../assets/img/logo1.webp")} alt="Avatar" />
      </Grid>

      <Grid item xs={12} sm={12} md={8} lg={8}>
        <Typography variant="h5" color="#005F7F" align="center">
          <b>Fundación Grupo Terra</b>
        </Typography>
        <Typography variant="subtitle2" color="#00B2E3" align="center">
          correo@fundaciongrupoterra.com
        </Typography>
      </Grid>
    </Grid>
  );
};

export default EnterpriseLogo;
