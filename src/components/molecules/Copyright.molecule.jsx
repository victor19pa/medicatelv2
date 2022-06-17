import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Copyright = (props) => {
  return (
    <Typography variant="body2" color="#005F7F" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://google.com/">
        VP Medical Design
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
