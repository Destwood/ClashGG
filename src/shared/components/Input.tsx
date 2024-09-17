import React, { ChangeEvent } from "react";
import TextField from "@mui/material/TextField";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type: "filled" | "outlined";
}

const commonInputStyles: SxProps<Theme> = {
  bgcolor: "#2F384C",
  borderRadius: ".5rem",
  color: "white",
  padding: "0",
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiInputBase-input": {
    color: "white",
    padding: ".5rem 1rem",
    fontSize: ".9rem",
    "&::placeholder": {
      color: "#fff",
    },
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #ffffff2a",
  },
  "&:focus-within .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #4a556d",
    outline: "none",
  },
};

const inputStyle: Record<InputProps["type"], SxProps<Theme>> = {
  filled: {
    ...commonInputStyles,
  },
  outlined: {
    ...commonInputStyles,
  },
};

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  type = "outlined",
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <TextField
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      type={type}
      sx={inputStyle[type]}
    />
  );
};

export default Input;
