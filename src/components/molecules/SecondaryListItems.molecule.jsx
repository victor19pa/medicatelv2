import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListSubheader from "@mui/material/ListSubheader";
import LogoutIcon from "@mui/icons-material/Logout";
import Typography from "@mui/material/Typography";
import { UserContext } from "../../context/UserContext";

const SecondaryListItems = () => {
  const navigate = useNavigate();
  const { logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <>
      <ListSubheader component="div" inset>
        Opciones
      </ListSubheader>
      <ListItemButton onClick={handleLogout}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <Typography variant="h6" color="#005F7F" align="center">
          Cerrar Sesión
        </Typography>
      </ListItemButton>
    </>
  );
};

export default SecondaryListItems;
