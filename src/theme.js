import {createContext, useMemo, useState} from "react";
import {createTheme} from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
    ...(mode === "dark"
        ? {
            grey: {
                white: "#1d2628",
                98: "#1d2729",
                94: "#263336",
                80: "#546f75",
                40: "#81acb5",
                black: "#fafafa",
            },
            primary: {
                lighter: "#424e51",
                light: "#6a8189",
                default: "#7eb5b7",
                dark: "#8cd5da",
                darker: "#c2fbff",
            },
            blueAccent: {
                light: "#0b7b83",
                default: "#039da7",
                dark: "#1bc7d3",
            },
            brownAccent: {
                light: "#785939",
                default: "#ae7c46",
                dark: "#d9995b",
            },
            red: {
                default: "#ff2121",
            },
        }
        : {
            grey: {
                white: "#ffffff",
                98: "#fafafa",
                94: "#f0f0f0",
                80: "#cccccc",
                40: "#666666",
                black: "#000000",
            },
            primary: {
                lighter: "#c2fbff",
                light: "#8cd5da",
                default: "#7eb5b7",
                dark: "#6a8189",
                darker: "#424e51",
            },
            blueAccent: {
                light: "#1bc7d3",
                default: "#039da7",
                dark: "#0b7b83",
            },
            brownAccent: {
                light: "#d9995b",
                default: "#ae7c46",
                dark: "#785939",
            },
            red: {
                default: "#ff2121",
            },
        }),
});

// mui theme settings
export const themeSettings = (mode) => {
    const colors = tokens(mode);
    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                    // palette values for dark mode
                    primary: {
                        light: colors.primary.light,
                        main: colors.primary.default,
                        dark: colors.primary.dark,
                        contrastText: colors.grey.white,
                    },
                    secondary: {
                        light: colors.brownAccent.light,
                        main: colors.brownAccent.default,
                        dark: colors.brownAccent.dark,
                    },
                    neutral: {
                        light: colors.grey[94],
                        main: colors.grey[80],
                        dark: colors.grey[40],
                    },
                    background: {
                        default: "#1d2628",
                    },
                    // Then you will be able to use it like this: `<Button color="custom">`
                    // (For TypeScript, you need to add module augmentation for the `custom` value)
                    m8bt: {
                        light: colors.blueAccent.dark,
                        main: colors.blueAccent.light,
                        dark: colors.blueAccent.default,
                        contrastText: colors.grey.black,
                    },
                }
                : {
                    // palette values for light mode
                    primary: {
                        light: colors.primary.light,
                        main: colors.primary.default,
                        dark: colors.primary.dark,
                        contrastText: colors.grey.white,
                    },
                    secondary: {
                        light: colors.brownAccent.light,
                        main: colors.brownAccent.default,
                        dark: colors.brownAccent.dark,
                    },
                    neutral: {
                        light: colors.grey[94],
                        main: colors.grey[80],
                        dark: colors.grey[40],
                    },
                    background: {
                        default: colors.grey[98],
                    },
                    m8bt: {
                        light: colors.blueAccent.dark,
                        main: colors.blueAccent.default,
                        dark: colors.blueAccent.light,
                        contrastText: colors.grey.white,
                    },
                }),
        },
        typography: {
            fontFamily: "Roboto,sans-serif",
            fontSize: 13,
            h1: {
                fontFamily: "Roboto,sans-serif",
                fontSize: 40,
            },
            h2: {
                fontFamily: "Roboto,sans-serif",
                fontSize: 32,
            },
            h3: {
                fontFamily: "Roboto,sans-serif",
                fontSize: 24,
            },
            h4: {
                fontFamily: "Roboto,sans-serif",
                fontSize: 20,
            },
            h5: {
                fontFamily: "Roboto,sans-serif",
                fontSize: 16,
            },
            h6: {
                fontFamily: "Roboto,sans-serif",
                fontSize: 14,
            },
        },
    };
};

// context for color mode
export const ColorModeContext = createContext({
    toggleColorMode: () => {
    },
});

export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode];
};
