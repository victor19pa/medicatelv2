import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const EnterpriseLabel = ({ title, content }) => {
  return (
    <Grid item xs={12} sm={12} md={6} lg={6}>
      <Grid container marginTop={1} justifyContent="center">
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <Typography variant="subtitle1" color="#AAAAAA" align="center">
            {title}:
          </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <Typography variant="subtitle1" color="#3C3C3B" align="center">
            {content}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EnterpriseLabel;
