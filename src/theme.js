import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

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
          default: "#0b7b83",
          dark: "#039da7",
        },
        brownAccent: {
          default: "#785939",
          dark: "#ae7c46",
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
          default: "#039da7",
          dark: "#0b7b83",
        },
        brownAccent: {
          default: "##ae7c46",
          dark: "#785939",
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
              main: colors.primary.default,
            },
            secondary: {
              main: colors.brownAccent.default,
            },
            neutral: {
              light: colors.grey[94],
              main: colors.grey[80],
              dark: colors.grey[40],
            },
            background: {
              default: "#1d2628",
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary.default,
            },
            secondary: {
              main: colors.brownAccent.default,
            },
            neutral: {
              light: colors.grey[94],
              main: colors.grey[80],
              dark: colors.grey[40],
            },
            background: {
              default: colors.grey[98],
            },
          }),
    },
    typography: {
      fontFamily: "Roboto,sans-serif",
      fontSize: 13,
      h1: {
        fontFamily: "Roboto,sans-serif",
        fontSize: 34,
      },
      h2: {
        fontFamily: "Roboto,sans-serif",
        fontSize: 28,
      },
      h3: {
        fontFamily: "Roboto,sans-serif",
        fontSize: 23,
      },
      h4: {
        fontFamily: "Roboto,sans-serif",
        fontSize: 19,
      },
      h5: {
        fontFamily: "Roboto,sans-serif",
        fontSize: 16,
      },
      h6: {
        fontFamily: "Roboto,sans-serif",
        fontSize: 13,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
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
