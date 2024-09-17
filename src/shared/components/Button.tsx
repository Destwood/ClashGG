import React from "react";
import MuiButton from "@mui/material/Button";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

interface ButtonProps {
  children: string;
  type: "contained" | "filled" | "outlined";
}

const commonButtonStyles: SxProps<Theme> = {
  borderRadius: "1rem",
  fontSize: "0.75rem",
  textTransform: "capitalize",
  border: "1px solid #2f384c",
  transition: "0.1s",
  margin: "0 0.5rem",
};

const buttonStyles: Record<ButtonProps["type"], SxProps<Theme>> = {
  contained: {
    ...commonButtonStyles,
    backgroundColor: "#2f384c",
    "&:hover": {
      backgroundColor: "#4a556d",
    },
  },
  filled: {
    ...commonButtonStyles,
    backgroundColor: "#fff",
    color: "#000",
    "&:hover": {
      color: "#fff",
      border: "1px solid #fff",
      backgroundColor: "transparent",
    },
  },
  outlined: {
    ...commonButtonStyles,
  },
};

const Button: React.FC<ButtonProps> = ({ children, type }) => {
  return (
    <MuiButton
      sx={buttonStyles[type]}
      variant={type === "outlined" ? "outlined" : "contained"}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
