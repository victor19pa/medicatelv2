import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const HeaderCard = ({ nombre, apellido, cargo, ciudad }) => {
  return (
    <Grid container marginTop={1}>
      <Grid item xs={2} sm={3} md={3} lg={3} justifyContent="center">
        <img
          // src="https://d29fhpw069ctt2.cloudfront.net/icon/image/84587/preview.svg" //! ver despues
          src={require("../../assets/img/user.png")}
          alt="Avatar"
          width="60"
          height="65"
        />
      </Grid>

      <Grid item xs={10} sm={9} lg={9} justifyContent="center" paddingLeft={2}>
        <Typography variant="string" color="#005F7F" align="center">
          <b>
            {nombre} {apellido}
          </b>
        </Typography>
        <br />
        <Typography variant="string" color="#00B2E3" align="center">
          {cargo}
        </Typography>
        <br />
        <Typography variant="string" color="#707070" align="center">
          {ciudad}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default HeaderCard;
