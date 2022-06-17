import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const HeaderCollab = () => {
  const [search, setSearch] = useState("");

  const handleInputSearch = (e) => {
    setSearch({ [e.target.name]: e.target.value });
    console.log(search);
  };
  return (
    <Grid container spacing={2} marginTop={1}>
      {/* title */}
      <Grid item xs={12} sm={12} md={6} lg={6} justifyContent="center">
        <Typography
          variant="h4"
          color="#005F7F"
          align="left"
          marginTop={4}
          marginLeft={5}
        >
          <b>Colaboradores</b>
        </Typography>
        <Typography
          variant="string"
          color="#005F7F"
          align="center"
          marginBottom={3}
          marginLeft={5}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Typography>
      </Grid>
      {/* barra busqueda */}
      <Grid item xs={12} sm={12} md={6} lg={6} marginTop={3}>
        <TextField
          margin="normal"
          fullWidth
          name="search"
          label="Buscar"
          type="search"
          id="search"
          onChange={handleInputSearch}
        />
      </Grid>
    </Grid>
  );
};

export default HeaderCollab;
