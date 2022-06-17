import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const BodyCard = ({ data }) => {
  return (
    <Grid container marginTop={1} justifyContent="center">
      <Grid item xs={2} sm={2} md={2} lg={2}>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
      </Grid>
      <Grid item xs={10} sm={10} md={10} lg={10}>
        <Typography variant="string" color="#707070" align="center">
          {data}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default BodyCard;
