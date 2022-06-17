import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
// import { CustomButton } from "../atoms";

const WelcomeCard = () => {
  return (
    <Grid item xs={12} sm={12} md={12} lg={12}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: "35vh",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Typography
          variant="h4"
          color="#005F7F"
          align="left"
          marginTop={3}
          marginBottom={3}
          marginLeft={5}
        >
          Hola, <b>Fundación Grupo Terra</b>
        </Typography>
        <Typography
          variant="subtitle1"
          color="#AAAAAA"
          align="left"
          marginLeft={5}
        >
          Bienvenido a Red Medicatel.
        </Typography>
        <Typography
          variant="subtitle1"
          color="#AAAAAA"
          align="left"
          marginLeft={5}
          marginBottom={3}
        >
          Agenda y ten toda la información médica de tu empresa.
        </Typography>
        {/* //!TODO <CustomButton /> */}
      </Paper>
    </Grid>
  );
};

export default WelcomeCard;
