import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const CustomButton = ({ title, onClick, colorBtn, colorTxt, marginLeft }) => {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: colorTxt ? colorTxt : "FFF",
    backgroundColor: colorBtn ? colorBtn : "#005F7F",
    "&:hover": {
      backgroundColor: colorBtn ? colorBtn : "#005F7F",
    },
    width: "40%",
  }));

  return (
    <Stack
      spacing={2}
      direction="row"
      marginLeft={marginLeft}
      onClick={onClick}
    >
      <ColorButton variant="contained">{title}</ColorButton>
    </Stack>
  );
};

export default CustomButton;
