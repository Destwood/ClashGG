import darkTheme from "./darkTheme";
import lightTheme from "./lightTheme";

export const getTheme = (mode: "light" | "dark") => {
    return mode === "light" ? lightTheme : darkTheme;
};
