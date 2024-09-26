import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#90caf9",
        },
        secondary: {
            main: "#f48fb1",
        },
    },
    typography: {
        fontFamily: ["Poppins", "Arial", "sans-serif"].join(","),
    },
});

export default darkTheme;
