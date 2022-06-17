import React, { useContext, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import {
  CollaboratorCard,
  HeaderCollaborator,
  Navbar,
  Sidebar,
} from "../components/organisms";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { UserContext } from "../context/UserContext";

const mdTheme = createTheme();

const Collaborators = () => {
  const [open, setOpen] = useState(true);
  const { collaboratorsInfo, getCollaborators } = useContext(UserContext);

  getCollaborators();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar
          open={open}
          toggleDrawer={toggleDrawer}
          title={"Colaboradores"}
        />
        <Sidebar open={open} toggleDrawer={toggleDrawer} />
        <Box
          component="main"
          sx={{
            backgroundColor: "#F8FBFD",
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
            justifyContent: "center",
          }}
        >
          <Toolbar />
          <Container sx={{ my: 4 }} lg={8}>
            <HeaderCollaborator />
            <Grid container spacing={2} marginTop={1}>
              {collaboratorsInfo.map((colaborador, index) => (
                <CollaboratorCard
                  key={colaborador.id + index}
                  colaboradorData={colaborador}
                />
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Collaborators;
