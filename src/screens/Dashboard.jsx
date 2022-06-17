import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { MainSection, Navbar, Sidebar } from "../components/organisms";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

const mdTheme = createTheme();

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar open={open} toggleDrawer={toggleDrawer} title={"Inicio"} />
        <Sidebar open={open} toggleDrawer={toggleDrawer} />
        {/* <MainSection /> */}
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
          <Container sx={{ my: 4 }}>
            <MainSection />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
