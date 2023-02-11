import {IconButton, useTheme} from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import {ColorModeContext} from "../../theme";
import {useContext} from "react";

const ThemeButton = (props) => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);

    return <IconButton {...props} onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon/>
        ) : (
            <LightModeOutlinedIcon/>
        )}
    </IconButton>
}

export default ThemeButton