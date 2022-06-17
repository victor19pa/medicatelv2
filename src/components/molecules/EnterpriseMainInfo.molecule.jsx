import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import { UserContext } from "../../context/UserContext";
import { EnterpriseLabel } from "../atoms";

const EnterpriseMainInfo = () => {
  const { userInfo } = useContext(UserContext);
  const { rtn, telefono, ciudad, pais } = userInfo;
  return (
    <Grid container marginTop={1} justifyContent="center">
      <EnterpriseLabel title={"RTN"} content={rtn} />
      <EnterpriseLabel title={"Teléfono"} content={telefono} />
      <EnterpriseLabel title={"País"} content={pais} />
      <EnterpriseLabel title={"Ciudad"} content={ciudad} />
    </Grid>
  );
};

export default EnterpriseMainInfo;
