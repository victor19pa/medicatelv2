import React, { useContext } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { WelcomeCard, Features } from "../molecules";
import EnterpriseInfo from "./EnterpriseInfo.organism";
import { UserContext } from "../../context/UserContext";

const MainSection = () => {
  // const { height } = useScreenSize();
  const { userInfo } = useContext(UserContext);

  const { colaboradores, citas_agendadas, positivas, negativas } = userInfo;

  return (
    <Grid container spacing={3} marginTop={1}>
      <Grid item xs={12} sm={12} md={9} lg={9}>
        <Grid container spacing={2} marginTop={1}>
          <WelcomeCard />
          <EnterpriseInfo />
          <Features mainCharacter={colaboradores} title="Colaboradores" />
          <Features mainCharacter={citas_agendadas} title="Citas Agendadas" />
          <Features
            mainCharacter={`${positivas}/${negativas}`}
            title="Positivos/Negativos"
            covid={true}
          />
        </Grid>
      </Grid>
      {/* Futuro */}
      <Grid item xs={12} sm={12} md={3} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "center",
            backgroundColor: "#EFEFEF",
          }}
        >
          <Typography variant="h6" color="#005F7F" align="center" marginTop={5}>
            Facturacion, <b>Proximamente</b>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default MainSection;
