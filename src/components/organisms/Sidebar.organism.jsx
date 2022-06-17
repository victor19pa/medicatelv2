import React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import { MainList, SecondaryList } from "../molecules";

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const drawerWidth = 240;

const Sidebar = ({ open, toggleDrawer }) => {
  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: [1],
          marginY: 1,
        }}
      >
        <img
          // src={`https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:98d18f69-674c-423f-87a4-b19d4c153be6;revision=0?component_id=0ce55e10-d268-4e07-a1e8-913190db8898&api_key=CometServer1&access_token=1655354814_urn%3Aaaid%3Asc%3AUS%3A98d18f69-674c-423f-87a4-b19d4c153be6%3Bpublic_50ed773ca8af2b79963d73a0d8c02582e99b9134`}
          // srcSet={`https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:98d18f69-674c-423f-87a4-b19d4c153be6;revision=0?component_id=0ce55e10-d268-4e07-a1e8-913190db8898&api_key=CometServer1&access_token=1655354814_urn%3Aaaid%3Asc%3AUS%3A98d18f69-674c-423f-87a4-b19d4c153be6%3Bpublic_50ed773ca8af2b79963d73a0d8c02582e99b9134`}
          src={require("../../assets/img/logo2.webp")}
          alt={"Red Medicatel"}
          loading="lazy"
          width="170"
          height="65"
        />
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        <MainList />
        <Divider sx={{ my: 1 }} />
        <SecondaryList />
      </List>
    </Drawer>
  );
};

export default Sidebar;
