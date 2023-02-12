import {Box, IconButton, Typography, useTheme} from "@mui/material";
import {useContext} from "react";
import {tokens} from "../../theme";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AuthContext from "../../scenes/auth/AuthContext";
import ThemeButton from "./ThemeButton";

const Topbar = () => {
    const authCtx = useContext(AuthContext)
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

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
                <Typography display="inline" variant="h5" color={colors.grey[40]}
                            textTransform="capitalize">
                    {` ${authCtx.username}`}
                </Typography>
            </Box>

            {/* ICONS */}
            <Box display="flex">
                <ThemeButton/>
                <IconButton onClick={authCtx.logout}>
                    <LogoutOutlinedIcon/>
                </IconButton>
            </Box>
        </Box>
    );
};

export default Topbar;
