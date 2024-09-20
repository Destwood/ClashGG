import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#1976d2",
        },
        secondary: {
            main: "#ff4081",
        },
    },
    typography: {
        fontFamily: ["Poppins", "Arial", "sans-serif"].join(","),
    },
});

export default lightTheme;
