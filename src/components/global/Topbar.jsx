import {Box, IconButton, Typography, useTheme} from "@mui/material";
import {useContext} from "react";
import {ColorModeContext, tokens} from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AuthContext from "../../scenes/auth/AuthContext";

const Topbar = () => {
    const authCtx = useContext(AuthContext)
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box
            display="flex"
            justifyContent="space-between"
            p={2}
            alignItems="center"
            borderBottom={1}
            borderColor={colors.grey[94]}
        >
            {/* WELCOME */}
            <Box display="flex">
                <Typography variant="h6" color={colors.grey[80]}>
                    {"Logged in as "}
                </Typography>
                &nbsp;
                <Typography display="inline" variant="h5" color={colors.grey[40]} fontWeight="bold"
                            textTransform="capitalize">
                    {` ${authCtx.username}`}
                </Typography>
            </Box>

            {/* ICONS */}
            <Box display="flex">
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === "dark" ? (
                        <DarkModeOutlinedIcon/>
                    ) : (
                        <LightModeOutlinedIcon/>
                    )}
                </IconButton>
                <IconButton onClick={authCtx.logout}>
                    <LogoutOutlinedIcon/>
                </IconButton>
            </Box>
        </Box>
    );
};

export default Topbar;
