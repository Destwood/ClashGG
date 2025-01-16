import React from "react";
import MuiButton from "@mui/material/Button";
import buttonStyle from "./ButtonStyle";
import { ButtonProps } from "../../../types";

const Button: React.FC<ButtonProps> = ({ children, type, onClick }) => {
  return (
    <MuiButton
      sx={buttonStyle[type]}
      variant={type === "outlined" ? "outlined" : "contained"}
      onClick={onClick}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
