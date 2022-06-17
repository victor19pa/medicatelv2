import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { CustomButton } from "../atoms";

const Features = ({ mainCharacter, title, covid }) => {
  return (
    <Grid item xs={12} sm={12} md={4} lg={4}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: "35vh",
          backgroundColor: "#FFFFFF",
          justifyContent: "center",
        }}
      >
        {covid && (
          <Grid container>
            <Grid item xs={3} sm={3} lg={3} justifyContent="left">
              <CustomButton
                title="COVID-19"
                colorBtn={"#00B2E333"}
                colorTxt={"#00B2E3"}
              />
            </Grid>
          </Grid>
        )}

        <Grid container marginTop={1}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant="h4" color="#005F7F" align="center">
              <b>{mainCharacter}</b>
            </Typography>
            <Typography variant="inherit" color="#707070" align="center">
              <b>{title}</b>
            </Typography>
          </Grid>
        </Grid>

        <Grid container marginTop={1}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant="string" color="#005F7F" align="center">
              {new Date().toDateString()}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Features;
