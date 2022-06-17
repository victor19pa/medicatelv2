import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Modal from "@mui/material/Modal";
import { BodyCollaboratorCard, HeaderCollaboratorCard } from "../molecules";
import useScreenSize from "../../hooks/useScreenSize";

const CardCollab = ({ colaboradorData }) => {
  const { width } = useScreenSize();
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  const { apellido, cargo, ciudad, correo, nombre, telefono, id } =
    colaboradorData;

  return (
    <>
      <Grid item xs={12} md={6} lg={4} onClick={handleOpenModal}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: width < 500 ? "40vh" : "45vh",
            backgroundColor: "#FFFFFF",
          }}
        >
          <HeaderCollaboratorCard
            apellido={apellido}
            nombre={nombre}
            cargo={cargo}
            ciudad={ciudad}
          />
          <Divider sx={{ my: 1 }} />
          <BodyCollaboratorCard data={id} />
          <BodyCollaboratorCard data={`(504) - ${telefono}`} />
          <BodyCollaboratorCard data={correo} />
        </Paper>
      </Grid>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: "40vh",
            backgroundColor: "#FFFFFF",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: width < 600 ? width - 10 : 500,
          }}
        >
          <HeaderCollaboratorCard
            apellido={apellido}
            nombre={nombre}
            cargo={cargo}
            ciudad={ciudad}
          />
          <Divider sx={{ my: 1 }} />
          <BodyCollaboratorCard data={id} />
          <BodyCollaboratorCard data={`(504) - ${telefono}`} />
          <BodyCollaboratorCard data={correo} />
        </Paper>
      </Modal>
    </>
  );
};

export default CardCollab;
