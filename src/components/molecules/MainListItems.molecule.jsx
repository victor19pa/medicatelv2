import React from "react";
import { useNavigate } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import Typography from "@mui/material/Typography";

const MainListItems = () => {
  const navigate = useNavigate();

  const handlePage = (page) => {
    navigate(page);
  };

  return (
    <>
      <ListItemButton onClick={() => handlePage("/inicio")}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <Typography variant="h6" color="#005F7F" align="center">
          Empresa
        </Typography>
        {/* <ListItemText primary="Empresa" color="#005F7F" /> */}
      </ListItemButton>

      <ListItemButton onClick={() => handlePage("/colaboradores")}>
        <ListItemIcon>
          <GroupIcon />
        </ListItemIcon>
        <Typography variant="h6" color="#005F7F" align="center">
          Colaboradores
        </Typography>
      </ListItemButton>
    </>
  );
};

export default MainListItems;
