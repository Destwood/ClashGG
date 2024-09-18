import React, { ChangeEvent } from "react";
import TextField from "@mui/material/TextField";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";
import commonInputStyles from "./InputStyle";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type: "filled" | "outlined";
}

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
