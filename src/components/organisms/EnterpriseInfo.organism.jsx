import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import useScreenSize from "../../hooks/useScreenSize";
import { EnterpriseLogo, EnterpriseMainInfo } from "../molecules";

const EnterpriseInfo = () => {
  const { width } = useScreenSize();
  return (
    <Grid item xs={12} sm={12} md={12} lg={12}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: width < 385 ? "52vh" : "35vh",
          backgroundColor: "#FFFFFF",
        }}
      >
        <EnterpriseLogo />
        <EnterpriseMainInfo />
      </Paper>
    </Grid>
  );
};

export default EnterpriseInfo;
