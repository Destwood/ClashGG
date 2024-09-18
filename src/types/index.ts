export interface ButtonProps {
  children: string;
  type: "contained" | "filled" | "outlined";
  onClick?: () => void;
}
